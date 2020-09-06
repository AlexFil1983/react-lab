import React from 'react'
import PropTypes from 'prop-types'
import './css/Track-item.css'


export default function TrackItem({name, link, duration, popularity, album_name, album_link, artist_name, artist_link, image}) {
    return (
        <div className="track-item">
           <h4>{name}</h4>
           <a href={link}><img src={image} alt={name} /></a>
           <a href={artist_link}>Artist: {artist_name}</a> 
           <p>Duration: {duration}</p> 
           <p>Popularity: {popularity}</p> 
           <a href={album_link}>Album: {album_name}</a> 
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
