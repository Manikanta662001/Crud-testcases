import React,{useState} from 'react'

const TestEvents = () => {
    const [count,setcount] = useState(0)
  return (
    <div>
        <h1 data-testid={'count'}>{count}</h1>
        <button data-testid={'Arrow-up'} onClick={()=>setcount(count+1)}>Increment</button>
        <button data-testid={'Arrow-down'}  onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}
export  default TestEvents
