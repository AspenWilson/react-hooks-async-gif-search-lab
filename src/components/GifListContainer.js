import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
import { Grid, Image, Divider } from 'semantic-ui-react'


function GifListContainer() {

    const [searchKey, setSearchKey] = useState('cat')
    const [results, setResults] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=xZ5prVbsf4D7ztlXR48pCbCh5iMH2odf&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(allResults => setResults(allResults.data.slice(0,5)))
    },[searchKey])

    console.log(searchKey)
    console.log(results)

    function handleSearchClick(e) {
        e.preventDefault()
        setSearchKey(text)
    }

    function handleSearchText(e) {
        setText(e.target.value)
    }
  return (
    <div className= 'ui grid'>
        <GifSearch setSearchKey={setSearchKey} handleSubmit={handleSearchClick} handleSearchTerm={handleSearchText}/>
        <br></br>
        <GifList results={results}/>
    </div>
  )
}
export default GifListContainer