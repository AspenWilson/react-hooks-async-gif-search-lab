import React from 'react'
import { List, Image,  } from 'semantic-ui-react'

function GifList({results}) {

    const gifResults = results.map((gif) => {
        return <List.Item key={gif.id}>
            <header>{gif.title}</header>
            <Image src={gif.images.original.url} size='medium'/>
        </List.Item>
    })
  return (
    <ul>
        {gifResults}
    </ul>

  )
}

export default GifList


