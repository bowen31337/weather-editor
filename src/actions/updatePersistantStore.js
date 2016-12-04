import * as types from '../constants/actionTypes'


const upateLocalStorageSuccess = (payload) => ({
    type: UPDATE_PERSISTANT_STORE_SUCCESS,
    payload
})

const upateLocalStorageFailure = error => ({
  type: UPDATE_PERSISTANT_STORE_FAILURE,
  payload:error
})

const fetchLocalStorageSuccess = (payload) => ({
    type: FETCH_PERSISTANT_STORE_SUCCESS,
    payload
})

const fetchLocalStorageFailure = error => ({
  type: FETCH_PERSISTANT_STORE_FAILURE,
  payload:error
})



export const upateLocalStorage = (payload) => dispatch => {
  if(sessionStorage) {
    sessionStorage.setItem('weather_editor_local_storage',JSON.stringify(payload))
    dispatch(upateLocalStorageSuccess(payload))
  } else {
    dispatch(upateLocalStorageFailure('Your browser does not support localStorage'))
  }
}

export const fetchLocalStorage = () => dispatch => {
  if(sessionStorage) {
    const payload = JSON.parse(
        sessionStorage.getItem('weather_editor_local_storage')
    )
    dispatch(fetchLocalStorageSuccess(payload))
  } else {
    dispatch(fetchLocalStorageFailure('Your browser does not support localStorage'))
  }
}



export const resetStates = () => {

	const payload = JSON.parse(
            sessionStorage.getItem('hrblock_local_states')
        )

	return ({
	  type: RESET_STATES,
	  payload:payload || {}
	})

}

export const appendStates = (state) => {
	const payload = JSON.parse(
            sessionStorage.getItem('hrblock_local_states')
        )

	const mergedPayload = {...payload||{}, ...state||{}}

	saveToLocalStorage(mergedPayload)
	return ({
	  type: APPEND_STATES,
	  payload: mergedPayload
	})

}

export const destroyStates = () => {
	 sessionStorage.setItem('hrblock_local_states',JSON.stringify({}))
	return ({
	  type: DESTROY_STATES,
	  payload: {}
	})

}
