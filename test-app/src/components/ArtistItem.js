import React from 'react'
import PropTypes from 'prop-types'
import './css/ArtistItem.css'

export default function ArtistItem(props) {
    return (
<div className="artist-item">
    <h4>{props.name}</h4>            
    <img src={props.image} width="300" height="300" alt={props.name} />  
    <p>{props.genres ? "Genres: " + props.genres : null}</p>            
    <a className="artist-link" href={props.link}>See on Spotify</a> 
</div>
    )
}

ArtistItem.propTypes = {
    name: PropTypes.string,
    spotify_link: PropTypes.string,
    genres: PropTypes.string,
    imgSrc: PropTypes.string,
}