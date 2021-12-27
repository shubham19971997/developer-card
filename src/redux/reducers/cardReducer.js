import { ActionTypes } from '../constants/action-types'

const initialState = {
  cards: [],
}

export const allCardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_CARDS:
      return { ...state, cards: payload }
    default:
      return state
  }
}

export const myCardReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.MY_CARD:
      return { ...state, ...payload }
    default:
      return state
  }
}
