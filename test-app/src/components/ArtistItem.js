import React from 'react'
import PropTypes from 'prop-types'

export default function ArtistItem() {
    return (
        <div>
<p>Name</p>            
<p>Spotify link</p>            
<p>Genres: </p>            
<p>Image</p>            
        </div>
    )
}

ArtistItem.propTypes = {
    name: PropTypes.string,
    spotify_link: PropTypes.string,
    genres: PropTypes.string,
    imgSrc: PropTypes.string,
}