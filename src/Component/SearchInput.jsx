import React from 'react'

export default function SearchInput({ searchVal , setSearchVal}) {
  return (
    <div className='search_input'>
      <input type="text"  onChange={(e)=>setSearchVal(e.target.value)}/>
    </div>
  )
}
