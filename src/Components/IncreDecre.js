import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../state/action-creators';

const IncreDecre = () => {

    const dispatch = useDispatch();

  return (
    <>
        <div className='d-flex mt-5 justify-content-center'>
            <button onClick={()=> dispatch(increment())} className='p-3 btn btn-primary m-3'> <h3>+</h3> </button>
            <h2 className='mt-4'>What do you want to do?</h2>
            <button onClick={()=> dispatch(decrement())} className='p-3 btn btn-primary m-3'> <h3>-</h3> </button>
        </div>
    </>
  )
}

export default IncreDecre