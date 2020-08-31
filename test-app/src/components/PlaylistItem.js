import React from 'react'
import './css/Playlist-item.css'


export default function PlaylistItem({name, link, image, owner, tracks_count}) {
    return (
        <div className="playlist-item">
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <p>{owner}</p>
            <p>Tracks: {tracks_count}</p>
            <a className="playlist-link" href={link}>See on Spotify</a>
        </div>
    )
}
