import React from 'react'
import {connect} from 'react-redux'
import PlaylistItem from './PlaylistItem'
import './css/Playlist.css'
import Spinner from './Spinner'

function Playlist(props) {

const data = props.playlists_data !== null ? props.playlists_data.playlists.items.map(item => 
<PlaylistItem 
key={Math.floor(Math.random()*1000)}
name={item.name} 
image={item.images[0] ? item.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"} 
owner={item.owner.display_name} 
link={item.external_urls.spotify} 
tracks_count={item.tracks.total} />) 
: null

if (props.isLoading) return <Spinner />   
else return (
        <div className="playlist">
            {data}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playlists_data: state.playlists.playlists_data,
        isLoading: state.playlists.isLoading,
      }
    }


export default connect(mapStateToProps)(Playlist)
