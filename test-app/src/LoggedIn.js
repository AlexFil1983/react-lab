import React, { Component } from 'react'
import queryString from 'query-string'
import Header from './Header'

export default class Login extends Component {
constructor() {
    super()
    this.state = {
        serverData: null
    }
}

    componentDidMount() {
    const parsed = queryString.parse(window.location.hash)
    const access_token = parsed.access_token  
    fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + access_token
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
           <Header link={this.state.serverData ? this.state.serverData.external_urls.spotify : null} />
        <p>You successfully logged in {this.state.serverData ? this.state.serverData.username : null}!</p>
            </div>
        )
    }
}
