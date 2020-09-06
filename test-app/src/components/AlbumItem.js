import React from 'react'
import './css/AlbumItem.css'
import Spinner from './Spinner'

export default function AlbumItem({name, link, image, date, total_tracks, list_of_artists, isLoading}) {
    
return (
    <div className="album-item">
        <h4>{name}</h4>
        <img width="300" heigh="200" src={image} />
        <p>Release date: {date}</p>
        <p>Total tracks: {total_tracks}</p>
        <p>{list_of_artists}</p>
        <a className="album-link" href={link}>See on Spotify</a>

    </div>
)
   
}
