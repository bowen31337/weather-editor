import React from 'react'
import AppContainer from '../containers/AppContainer'
import EditorFormContainer from '../containers/EditorFormContainer'
import ItemsTableContainer from '../containers/ItemsTableContainer'
import '../assets/css/custom.css'

const App = props => {
	return (
		<AppContainer {...props}>
			<EditorFormContainer />
			<ItemsTableContainer />
		</AppContainer>
		)
}

export default App
