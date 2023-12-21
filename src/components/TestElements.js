import React,{useState} from 'react'

const TestElements = () => {
    const [count,setcount] = useState(0)
  return (
    <div>
        <h1 data-testid={'count'}>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button disabled onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}
export  default TestElements
