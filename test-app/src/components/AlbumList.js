import React from 'react'
import {connect} from 'react-redux'
import AlbumItem from './AlbumItem'
import './css/AlbumList.css'
import Spinner from './Spinner'

function AlbumList(props) {
const result = []
const list_of_artists = props.albums_data !== null ? props.albums_data.albums.items.map(item => item.artists.map(artist => result.push(artist.name))) : null

const albumItems = props.albums_data ? props.albums_data.albums.items.map(item => {
    let result = []
    item.artists.map(artist => result.push(artist.name))
    return (<AlbumItem key={Math.random()} name={item.name} image={item.images[0].url} link={item.external_urls.spotify} date={item.release_date} total_tracks={item.total_tracks} list_of_artists={result.length > 0 ? result.join(', ') : null}  />)
}
) : null

if (props.isLoading) return  <Spinner /> 
else {
    return (
        <div className="album-items">
            {albumItems}
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        albums_data: state.albums.albums_data,
        isLoading: state.albums.isLoading,
      }
    }

    export default connect(mapStateToProps)(AlbumList)