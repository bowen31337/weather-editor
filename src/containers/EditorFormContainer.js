import { connect } from 'react-redux'
import EditorForm from '../components/EditorForm'
import {submitForm} from '../actions/formActions'
import { addItem, removeItem} from '../actions/widgetEditorActions'

const mapStateToProps = state => ({
  form:state.form || {}
})

const mapDispatchToProps = (dispatch, ownPros) => ({
 	handleSubmit:item => {
    dispatch(submitForm(item))
    dispatch(addItem(item))

  }
})


const EditorFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditorForm)

export default EditorFormContainer
