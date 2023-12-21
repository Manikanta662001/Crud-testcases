import React from 'react'

function Search({value,onchange,children}) {
  return (
    <div>
        <label htmlFor='search'>{children}</label>
        <input id='search' type='text' value={value} onChange={onchange}/>
    </div>
  )
}


export default Search