import { connect } from 'react-redux'
import ItemsTable from '../components/ItemsTable'
import {toggleItem,removeItem} from '../actions/widgetEditorActions'


const mapStateToProps = state => ({
  items:state.items || []
})

const mapDispatchToProps = (dispatch, ownPros) => ({
  toggleItem:(id,flag) => dispatch(toggleItem(id,flag)),
  removeItem:id => dispatch(removeItem(id))

})

const ItemsTableContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsTable)

export default ItemsTableContainer
