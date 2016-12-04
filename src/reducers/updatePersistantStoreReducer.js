import * as types from '../constants/actionTypes'

const INIT_STATE = {
		error:null,
		payload:{}
}

const updatePersistantStoreReducer = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.UPDATE_PERSISTANT_STORE_SUCCESS:
		case types.FETCH_PERSISTANT_STORE_SUCCESS:
			return {
					...INIT_STATE,
					payload:action.payload
			}
		case type.FETCH_CONTENTS_FAILURE:
			return {
					...INIT_STATE,
					error:action.payload,
					loading:false
			}
		default:
      return state
	}

}

export default updatePersistantStoreReducer
