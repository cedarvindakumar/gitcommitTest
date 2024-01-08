import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log('Component mounting');
    })
  return (
    <div>


      
      <div>{count}</div>



      <button onClick={()=> setCount(count + 1)}>click</button>
    </div>
  )
}

export default LifeCycle
