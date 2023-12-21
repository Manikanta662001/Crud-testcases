import React, { useEffect } from 'react'
import { useState } from 'react'
import Search from './Search'

const getUser=()=>{
    return Promise.resolve({name:"mani",age:22})
}

function Another() {
    const [user,setUser] = useState(null)
    const [search,setSearch] = useState(null)
    useEffect(()=>{
        const loadUser = async()=>{
            const User= await getUser()
            setUser(User)
        }
        loadUser()
    },[])
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
        {user? <p>Signed in as : {user.name}</p>:null}
        <Search value={search} onchange={handleChange}>
            Search :
        </Search>
        <p>Searches for {search ? search : '...'}</p>
    </div>
  )
}

export default Another