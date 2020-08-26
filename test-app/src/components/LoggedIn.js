import React, { Component } from 'react'
import queryString from 'query-string'
import Header from './Header'
import SearchForm from './SearchForm'
import TypeButtons from './TypeButtons'
import ArtistList from './ArtistList'
import PlayList from './Playlist'
import AlbumList from './AlbumList'
import TrackList from './Tracklist'
import {connect} from 'react-redux'
import {addToken, addUserData} from '../redux/actions/actions'

class LoggedIn extends Component {
constructor() {
    super()
    // this.state = {
    //     userData: null,
    //     token: "",
    //     }
}

    componentDidMount() {
        this.props.addToken(queryString.parse(window.location.hash).access_token);

        fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + queryString.parse(window.location.hash).access_token
        }
    }).then((response) => response.json())
    .then(data => {
        this.props.addUserData(data)
      
    })
}

    render() {
      
        return (
            <div>
            <p>Hello, {this.props.userData ? this.props.userData.display_name : null}!</p>
           <Header link={this.props.userData ? this.props.userData.external_urls.spotify : null} />
           <SearchForm token={this.props.token} />
           <ArtistList />
           <TrackList />
           <PlayList />
           <AlbumList />
           </div>
        )
    }
}

function mapStateToProps(state) {
return {
    token: state.token,
    userData: state.userData,
    
}
}

function mapDispatchToProps(dispatch) {
return {
    addToken: (token) => dispatch(addToken(token)),
    addUserData: (userData) => dispatch(addUserData(userData))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)
