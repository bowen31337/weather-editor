import * as types from '../constants/actionTypes'

let nextItemId = 0
export const addItem = (item) => ({
  type: types.ADD_ITEM,
  id: nextItemId++,
  item
})

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id
})

export const toggleItem = (id,flag) => ({
  type: types.TOGGLE_ITEM,
  id,
	flag:!flag
})
