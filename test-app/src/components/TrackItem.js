import React from 'react'
import PropTypes from 'prop-types'

export default function TrackItem() {
    return (
        <div>
           <p>Name</p> 
           <p>Spotify link</p> 
           <p>Duration</p> 
           <p>Popularity</p> 
           <p>Album name</p> 
           <p>Album spotify link</p> 
           <p>Artist name</p> 
           <p>Artist spotify link</p> 
        </div>
    )
}


TrackItem.propTypes = {
    name: PropTypes.string,
    spotify_link: PropTypes.string,
    duration: PropTypes.number,
    popularity: PropTypes.number,
    album_name: PropTypes.string,
    album_link: PropTypes.string,
    artist_name: PropTypes.string,
    artist_link: PropTypes.string,
}
