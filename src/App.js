import React from 'react';
import ReactDOM from 'react-dom';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, islogged} from './actions/changeAction';


function App() {

  //extract count/logged state from state
  const mycounter = useSelector( state =>state.myCount);
  const logged = useSelector( state =>state.logged);
  const dispatch= useDispatch();
    
  return (
    
    <div className='App' style={{margin:'50px'}}>
      <h1>Sample redux state changer</h1>

      <button onClick={()=> dispatch(increment())} > Increment counter </button>
     <br></br>
      <button onClick={()=> dispatch(decrement())} > decrement counter </button>
      <br></br>
      <button onClick={()=> dispatch(islogged())} > Log me in!</button>

      <hr></hr>
      <h2>Count of the state {mycounter} </h2>

      

      {logged ? <h2>Am i logged in?   yes!</h2> : ''}
      

    </div>
  )
}

export default App;

