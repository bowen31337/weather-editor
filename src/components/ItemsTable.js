import React, {Component} from 'react'

// import loading from '../assets/images/infinity.gif'


class ItemsTable extends Component{
  componentWillMount(){
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchContents()
  }

  tableListHeader(){
    return (
      <thead>
        <tr>
          <th> Title</th><th>Units</th><th> Show Wind?</th><th>Actions</th><th></th>
        </tr>
      </thead>
    )
  }

  toggleItem(id,flag){
    this.props.toggleItem(id,flag)
  }

  removeItem(id){
    this.props.removeItem(id)
  }
  tableListBody(items){
    return (
      items.map(item => (
        <tr key={item.id}>
          <td>{item.item.title || 'Untitled'}</td>
          <td>{item.item.units}</td>
          <td>{item.item.showWind}</td>
          <td><button className="btn btn-default"
                onClick = {() => this.toggleItem(item.id,item.flag)}>
                {item.flag || 'Show Codes'}{item.flag && 'Hide Codes'}
              </button>
              <button className="btn btn-danger" onClick={() => this.removeItem(item.id)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
            </td>
          {item.flag && <td className="codes-html">
            <pre>
              <code dangerouslySetInnerHTML={{__html:
                `&lt;div id&equals;&quot;root&quot;&gt;&lt;&sol;div&gt;
                var window.WEATHER_WIDGET_CONFIG &equals; &lbrace;
                    &quot;title&quot;&colon;'${item.item.title||'untitled'}',
                    &quot;units&quot;&colon;'${item.item.units}',
                    &quot;showWind&quot;&colon;${item.item.showWind},
                    &quot;selectorID&quot;&colon;&quot;root&quot;
                  &rbrace;
                  &lt;script src='https://dl.dropboxusercontent.com/u/144131307/weather-widget.min.js'&gt;&lt;/script&gt;`
              }}/>
            </pre>
          </td>}
        </tr>
      ))

    )
  }

  render(){
    const {items} = this.props
    return (
      <table className="table">
      {this.tableListHeader()}
      <tbody>
      {this.tableListBody(items)}
      </tbody>
      </table>
    )
  }

}


export default ItemsTable
