const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  imagepath: {
    type: String,
  },
  likes: [{ type: String, required: true, unique: true }],

  comments: [
    {
      _id: { type: String, required: true },
      userName: { type: String, required: true },
      userImage: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, Default: Date.now },
    },
  ],
})

module.exports = mongoose.model('Card', cardSchema)
