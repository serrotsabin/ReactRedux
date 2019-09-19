import React from 'react';
import { connect } from 'react-redux';
import  {addTodo} from './actions/actions'

const mapStateToProps = (state)=>{
    return(
        {
            count: state.count
        }
    )
}
const mapDispatchToProps = {
    addTodo,
}
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todo: ""
    }
  }
  handleOnChange(e){
    let value = e.target.value
    this.setState({
      todo: value
    })
  }
  render(){
    /*<button onClick={this.props.decrement}>-</button>
    <span>{this.props.count}</span>
    <button onClick={this.props.increment}>+</button>*/
    return(
      <div>
        <input type="text" placeholder="Add todo" onChange={(e)=>{this.handleOnChange(e)}}/>
        <button onClick={()=>{this.props.addTodo({
          todo: this.state.todo,
          completed: false
        })}}>ADDD</button>
      </div>
    )
  }
}
// onClick ma kunai function invoke garyo vane, tesle onClick lai kurdaina ani afai fire hunxa,
// teslaie kuna parameter pass garne ho vane teslai callback virtra rakhdinu parxa ani matra garne
export default connect(mapStateToProps,mapDispatchToProps)(Counter)