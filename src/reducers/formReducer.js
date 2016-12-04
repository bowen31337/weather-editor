import * as types from '../constants/actionTypes'

const INIT_STATE = {
  title:'untitled',
  units:null,
  showWind:null
}

const formReducer = (state = INIT_STATE, action) => {
	const { type,item } = action

	switch(type) {
		case types.SUBMIT_FORM:
			return {
					...INIT_STATE,
					...item
			}
		default:
      return state
	}

}

export default formReducer
