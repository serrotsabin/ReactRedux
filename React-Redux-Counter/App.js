import React from 'react';
import Counter from './counter'
import { createStore } from 'redux';
import appReducer from './store/reducer'
import { Provider } from 'react-redux';

const state = {
    counter: 0
}

const store = createStore(appReducer,state)

store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch({
//     type: C.INCREMENT
// })

// store.dispatch({
//     type: C.INCREMENT
// })

// store.dispatch({
//     type: C.INCREMENT
// })

// store.dispatch({
//     type: C.DECREMENT
// })


const App = ()=>{
  return(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
export default App;
