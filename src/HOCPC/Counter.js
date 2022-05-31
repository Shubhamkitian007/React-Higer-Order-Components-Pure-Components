import React, { useState } from 'react'
import './All.css'
const Counter = () => {
    const [count, setCount] = useState(0);
  return (
      <div className='click'>
        <h3>{count}</h3>
        <button className='btn1' onClick={() => setCount(count - 1)}>Decrease Counter</button>
        <button className='btn2' onClick={() => setCount(count + 1)}>Increase Counter</button>
      </div>
  )
}

export default Counter