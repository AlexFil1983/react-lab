import React from 'react'
import {connect} from 'react-redux'
import './css/Tracklist.css'
import TrackItem from './TrackItem'
import Spinner from './Spinner'

function Tracklist(props) { 
    console.log(props)
    const data = props.tracks_data !== null ? props.tracks_data.tracks.items.map(item => 
    (<TrackItem 
        key={item.id}
        name={item.name} 
        link={item.external_urls.spotify}  
        duration={item.duration_ms}
        popularity = {item.popularity}
        album_name = {item.album.name}
        album_link = {item.album.external_urls.spotify}
        artist_name = {item.artists[0].name}
        artist_link = {item.artists[0].external_urls.spotify}
        image={item.album.images[0] ? item.album.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"}
        />)) : null

    if (props.isLoading) return <Spinner />
    else return (
        <div className="tracklist">
            {data}
        </div>
    )

}


function mapStateToProps(state) {
    return {
        tracks_data: state.tracks.tracks_data,
        isLoading: state.tracks.isLoading,
      }
    }


export default connect(mapStateToProps)(Tracklist)