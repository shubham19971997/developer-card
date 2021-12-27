import { ActionTypes } from '../constants/action-types'

export const setAllCards = (cards) => {
  return {
    type: ActionTypes.ALL_CARDS,
    payload: cards,
  }
}

export const setMyCard = (card) => {
  return {
    type: ActionTypes.MY_CARD,
    payload: card,
  }
}
