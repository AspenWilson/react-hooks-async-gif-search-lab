import React from 'react'
import { Divider } from 'semantic-ui-react'

function GifSearch({handleSubmit, handleSearchTerm}) {

  return (
    <form className='ui search' onSubmit={handleSubmit}>
        <label htmlFor='search '>Search for GIFs</label>
        <br />
            <input 
                id='search'
                type='text'
                placeholder='Search here...'
                onChange={handleSearchTerm}
            />
            <button type='submit' className="search icon" >🔍</button>
    </form>

  )
}

export default GifSearch
