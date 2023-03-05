import React from 'react'
import {useSelector} from 'react-redux'


const Total = () => {

    const mystate = useSelector((state) => state.reducer);
    

  return (
    <>
        <div className='d-flex justify-content-center'>
            <div className='bg-warning p-5 m-5'><h3>Value: {mystate}</h3></div>
        </div>
    </>
  )
}

export default Total