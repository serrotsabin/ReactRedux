import React from 'react'


import { increment, decrement} from './store/actions'

import { connect } from 'react-redux'

function mapStateToProps(state){
    return({
        count: state.counter
    })
}

const mapDispatchToProps = {
    increment,
    decrement
}
const style = {
    margin: 200 
  }

class Counter extends React.Component{
    // constructor(props){
    //   super(props)
    //   this.state = {
    //     counter: 0
    //   }
    //   this.increase = this.increase.bind(this)
    //   this.decrease = this.decrease.bind(this)
    // }
    // increase(){
    //   this.setState({
    //     counter: this.state.counter +1
    //   })
    // }
    // decrease(){
    //   this.setState({
    //     counter: this.state.counter -1
    //   })
    // }
    increase = ()=>{this.props.increment()}
    decrease = ()=>{this.props.decrement()}

    render(){
      return(
        <div style={style}>
          <button onClick={this.decrease}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increase}>+</button>
        </div>
      )
    }
  }
//   export default Counter

export default connect(mapStateToProps,mapDispatchToProps)(Counter);