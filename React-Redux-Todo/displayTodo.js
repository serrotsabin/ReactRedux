import React from 'react'
import {connect} from 'react-redux'
import {removeTodo, toogle} from './actions/actions'

const mapStateToProps = (state)=>{
    return({
        todos: state.todo
    }
        )
}
const mapDispatchToProps={
    removeTodo,
    toogle,
}
export class Todo extends React.Component{
    render(){
        const todos = this.props.todos.map((arr,key)=>{
            return( 
            <div key={key}> 
                <p style={{
                    textDecoration: arr.completed?'line-through':'none'
                }}>{arr.todo}
                <button onClick={()=>{this.props.toogle(key)}}>Toogle</button>
                <button onClick={()=>{this.props.removeTodo(key)}}>Remove</button></p>
        </div>)  })
        return(
            <div>{todos}</div>
        )
    }
    
} 

export default connect(mapStateToProps,mapDispatchToProps)(Todo)