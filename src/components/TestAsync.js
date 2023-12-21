import React,{useState} from 'react'

const TestAsync = () => {
    const [count,setcount] = useState(0)
    const delayCount=()=>{
        setTimeout(()=>{
            setcount((pevState)=>pevState+1)
        },2000)
    }
  return (
    <div>
        <h1 data-testid={'count'}>{count}</h1>
        <button data-testid={'Arrow-up'} onClick={delayCount}>Increment</button>
        <button data-testid={'Arrow-down'} disabled >Decrement</button>
    </div>
  )
}
export default TestAsync