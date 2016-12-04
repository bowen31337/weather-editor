import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import updatePersistantStoreReducer from './updatePersistantStoreReducer'
import itemsReducer from './widgetEditorActionsReducer'
import formReducer from './formReducer'

// Updates an entity cache in response to any action with response.entities.

const rootReducer = combineReducers({
  persistantStore:updatePersistantStoreReducer,
  items:itemsReducer,
  form:formReducer,
  routing
})

export default rootReducer
