import React, { Component } from 'react'
import queryString from 'query-string'
import Header from './Header'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'
import {addToken, addUserData, addSearchData, saveTotalQuery} from '../redux/actions/actions'
import { userDataEndpoint, userSearchQuery } from '../../src/components/helpers/endpoints'
import Tabs from './Tabs'

class LoggedIn extends Component {
 

    componentDidMount() {
        this.props.addToken(queryString.parse(window.location.hash).access_token);

        fetch(userDataEndpoint, {
        headers: {
            'Authorization': 'Bearer ' + queryString.parse(window.location.hash).access_token
        }
    }).then((response) => response.json())
    .then(data => {
        this.props.addUserData(data)
          })
}

render() {
function searchUserInput(searchInput) {
    this.props.saveTotalQuery(userSearchQuery(searchInput, this.props.types));
    for (let type in this.props.types) {
if (this.props.types[type]) {
    this.props.addSearchData(searchInput, type, this.props.token)
}
    }
    }
        return (
            <div>
            <p>Hello, {this.props.userData ? this.props.userData.display_name : null}!</p>
           <Header link={this.props.userData ? this.props.userData.external_urls.spotify : null} />
           <SearchForm search={searchUserInput.bind(this)}/>
           <p>Query: {userSearchQuery(this.props.searchInput, this.props.types)}</p>
           <Tabs />           
           </div>
        )
    }
}



function mapStateToProps(state) {
    
    return {
    token: state.initialReducer.token,
    userData: state.initialReducer.userData,
    types: state.initialReducer.types,
    searchInput: state.initialReducer.searchInput,
    albums_data: state.albums.albums_data,
    artists_data: state.artists.artists_data,
    playlists_data: state.playlists.playlists_data,
    tracks_data: state.tracks.tracks_data,
    isLoading: state.albums.isLoading,
    totalQuery: state.initialReducer.totalQuery,
}
}

function mapDispatchToProps(dispatch) {
return {
    addToken: (token) => dispatch(addToken(token)),
    addUserData: (userData) => dispatch(addUserData(userData)),
    addSearchData: (searchInput, type, token) => dispatch(addSearchData(searchInput, type, token)),
    saveTotalQuery: (query) => dispatch(saveTotalQuery(query)),

}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)
