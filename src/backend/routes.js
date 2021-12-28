const express = require('express')
const Card = require('./model')
const router = express.Router()
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary').v2
const jwt = require('jsonwebtoken')

cloudinary.config({
  cloud_name: 'daxavsasf',
  api_key: '191438778524724',
  api_secret: 'q4ckQ7OPplq-CDaK06PGTXXdTtw',
})

router.get('/', auth, async (req, res) => {
  try {
    const card = await Card.find()
    res.json(card)
  } catch (err) {
    res.send('Error ' + err)
  }
})

function auth(req, res, next) {
  const token = req.headers.token
  if (token) {
    jwt.verify(token, 'hereitisthesecretcodeforjwt')
    next()
  } else {
    alert('check your login and password')
  }
}

router.put('/update', async (req, res) => {
  let user = await Card.findOne({ _id: req.body._id })
  user.name = req.body.userName
  user.skills = req.body.newSkills
  user.aboutMe = req.body.newAboutMe
  try {
    user.save()
    res.status(200).send('OK')
  } catch (error) {
    res.error(error)
  }
})

router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const card = new Card({
      name: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      skills: req.body.skills,
      aboutMe: req.body.aboutMe,
      imagepath: req.body.selectFile,
    })
    let user = await Card.findOne({ email: req.body.email })
    if (user) return res.send('User Already Registered')

    let userName = await Card.findOne({ name: req.body.userName })
    if (userName) return res.send('Use Different Username')

    const a1 = await card.save()
    res.json({ a1 })
  } catch (error) {
    res.send('Error')
  }
})

router.post('/login', async (req, res) => {
  let user = await Card.findOne({ email: req.body.email })
  if (!user) return res.send('User is not registered')

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        'hereitisthesecretcodeforjwt'
      )
      res.send({ user: user, token: token })
    } else {
      res.send('Check your password once')
    }
  } catch {
    res.status(500).send()
  }
})

router.put('/like', async (req, res) => {
  // const cardHolder=  await Card.findOne({_id: req.body.cardId});
  // res.json(cardHolder.likes);

  Card.findByIdAndUpdate(
    req.body.cardId,
    {
      $push: { likes: req.body.userId },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    } else {
      res.json(result)
    }
  })
})

router.put('/unlike', (req, res) => {
  Card.findByIdAndUpdate(
    req.body.cardId,
    {
      $pull: { likes: req.body.userId },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    } else {
      res.json(result)
    }
  })
})

router.post('/comment', async (req, res) => {
  const comment = {
    _id: req.body.userId,
    userName: req.body.userName,
    userImage: req.body.userImage,
    text: req.body.commentText,
  }
  Card.findByIdAndUpdate(
    req.body.cardId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    } else {
      res.json(result)
    }
  })
})

module.exports = router
