import React from 'react'
 import increamentDec from './Redux/Reducers/increamentDec'
import { useSelector, useDispatch } from 'react-redux';


import {incNumber, decNumber} from './Redux/Action/index'
const ReduxConc = () => {
    const myState = useSelector((state:any)=> state.increamentDec);
    const dispatch = useDispatch();
    return (
        <div className='increament-decreament'>
            <button onClick={()=> {dispatch(incNumber())}}>Increament</button>
           <input type='text' value={myState}  />
            <button onClick={()=> {dispatch(decNumber())}}>Decreament</button>
        </div>
    )
}
 export default ReduxConc;