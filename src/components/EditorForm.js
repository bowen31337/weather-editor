import React, {Component} from 'react'



class EditorForm extends Component{
  constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this)
   this.changeTitle = this.changeTitle.bind(this)
   this.changeWind = this.changeWind.bind(this)
   this.changeUnits = this.changeUnits.bind(this)
   this.state = {
     "units":"metric",
     "showWind":"true",
     "title":""
   }
 }
  componentWillMount(){
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchContents()
  }

  changeTitle(e){
     this.setState({
       "title":e.target.value
     })
  }
  changeUnits(e){
    console.log(e.target.value)
     this.setState({
       "units":e.target.value
     })
  }

  changeWind(e){
     this.setState({
       "showWind":e.target.value
     })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.refs)


    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="title" ref="title" name="title" placeholder="title" onChange={this.changeTitle}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Units</label>
            <div className="col-sm-10">
                <label className="radio-inline">
                  <input type="radio" name="units"  ref="units" defaultChecked={true} value="metric" onChange={this.changeUnits}/>
                   Metric
                </label>
                <label className="radio-inline">
                <input type="radio" name="units"  ref="units" value="imperial" onChange={this.changeUnits}/>
                    Imperial
                </label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Show Wind</label>
            <div className="col-sm-10">
                <label className="radio-inline">
                  <input type="radio" name="showWind"  ref="showWind" defaultChecked={true} value={true} onChange={this.changeWind}/>
                    Yes
                </label>
                <label className="radio-inline">
                <input type="radio" name="showWind"  ref="showWind" value={false} onChange={this.changeWind}/>
                  No
                </label>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default EditorForm
