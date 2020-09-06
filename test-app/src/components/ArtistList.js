import React from 'react'
import {connect} from 'react-redux'
import ArtistItem from './ArtistItem'
import './css/ArtistList.css'
import Spinner from './Spinner'

function ArtistList(props) {
const data = props.artists_data !== null ? props.artists_data.artists.items.map(item => 
<ArtistItem name={item.name} genres={item.genres.join(', ')} image={item.images[0] ? item.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"} link={item.external_urls.spotify} />) : null

if (props.isLoading) return <Spinner />    
else {
    return (
        <div className="artist-items">
           {data}
        </div>
    )
}
}


function mapStateToProps(state) {
    return {
        artists_data: state.artists.artists_data,
        isLoading: state.artists.isLoading,
      }
    }


export default connect(mapStateToProps)(ArtistList)
