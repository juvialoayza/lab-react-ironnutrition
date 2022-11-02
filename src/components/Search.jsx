import React from 'react'
import {useState} from "react"

function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const handleChangeSearch = (event) => {
        setSearchInput(event.target.value)
        props.filterFoodList(event.target.value)
        console.log(event.target.value)
    }
  return (
    <div>
        <h3>Search</h3>

        <input type="text" name="search" value={searchInput} onChange={handleChangeSearch}/>

        </div>
  )
}

export default Search