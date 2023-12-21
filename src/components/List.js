import React, { useState } from 'react'

const initialState=[
    {id:1,name:'mani'},
    {id:2,name:'vamsi'},
    {id:3,name:'aneesh'},
]
function List() {
    const [data,setData] = useState(initialState)
  return (
    <div>
        <h1>List</h1>
        {
            data.map((item)=>{
                return(
                    <div key={item.id} data-testid={'record'}>
                    {item.id} {item.name}
                </div>
                )
            })
        }
        <button onClick={()=>{
            setData([...data,{id:4,name:'hello'}])
        }}>Add user</button>
        <button onClick={()=>{
            const filtered = data.filter((item)=>item.id!==2)
            setData(filtered)
        }}>Remove user</button>
    </div>
  )
}

export default List