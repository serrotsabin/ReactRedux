import React from 'react';
import { createStore } from 'redux';
import appReducer from './store/reducer'
import Counter from './counter'
import {Provider} from 'react-redux';
import Todo from './displayTodo'

const store = createStore(appReducer)

store.subscribe(()=>{
  console.log(store.getState())
})
class App extends React.Component{
  render(){
    return(
      <Provider store= {store}>
        <Counter />
        <Todo />
      </Provider>
    )
  }
}

export default App