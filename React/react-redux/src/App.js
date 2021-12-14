import React from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from './action/index'


const App = () => {
const myState = useSelector((state) => state.changeTheNumber)
 const dispatch = useDispatch();
  return(
      <>
        <div class="App">
        <h4>Using react and redux</h4>

        <div>
          <a className='quentity_minus'  title="Decrement"
          onClick={() =>dispatch(decNumber())}><span>-</span></a>
          <input name="quantity" type="text" class="quantity_input" value={myState}/>
          <a className='quentity_plus'  title="increment"><span
          onClick={() =>dispatch(incNumber(5))}>+</span></a>
        </div>
        

        </div>
      </>

  )
}

export default App;
