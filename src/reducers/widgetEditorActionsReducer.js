import * as types from '../constants/actionTypes'

const init_state = {
  flag:false,
  id:null,
  item:{}
}

const item = (state=init_state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        id: action.id,
        item: action.item
			}
		case types.REMOVE_ITEM:
      return {
        id: action.id
			}
    case types.TOGGLE_ITEM:
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        flag: action.flag
      }
    default:
      return state
  }
}

const itemsReducer = (state = [], action) => {
  switch (action.type) {
		case types.ADD_ITEM:
      return [
        ...state,
        item(undefined, action)
      ]
		case types.REMOVE_ITEM:
     let index = state.findIndex(element => element.id === action.id)

       return [
         ...state.slice(0, index),
         ...state.slice(index + 1)
      ]
		case types.TOGGLE_ITEM:
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
}

export default itemsReducer
