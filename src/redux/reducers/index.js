import { combineReducers } from 'redux'
import { allCardsReducer, myCardReducer } from './cardReducer'

const reducers = combineReducers({
  allCards: allCardsReducer,
  myCard: myCardReducer
})

export default reducers
