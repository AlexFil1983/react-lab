import React, { Component } from 'react'
import queryString from 'query-string'
import Header from './Header'
import SearchForm from './SearchForm'

export default class LoggedIn extends Component {
constructor() {
    super()
    this.state = {
        serverData: null,
        token: "",
        }
}

    componentDidMount() {
   this.setState({token: queryString.parse(window.location.hash).access_token});
    fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + queryString.parse(window.location.hash).access_token
        }
    }).then((response) => response.json())
    .then(data => {
        this.setState({serverData: {username: data.display_name, ...data}});
        console.log(this.state.serverData)
    })
    
}

    render() {
        return (
            <div>
           <p>Hello, {this.state.serverData ? this.state.serverData.username : null}!</p>
           <Header link={this.state.serverData ? this.state.serverData.external_urls : null} />
           <SearchForm token={this.state.token} />
           </div>
        )
    }
}
