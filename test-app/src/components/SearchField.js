import React, { Component } from 'react'
import './css/SearchField.css'

export default class SearchField extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
                }
    }


onSubmitHandler = () => {
   fetch(`https://api.spotify.com/v1/search?q=${this.state.input}`, {
    headers: {
        'Authorization': 'Bearer ' + this.props.token
    }
}).then((response) => response.json()).then(response => console.log(response))
}

    render() {
        return (
            <div className="search-field">
                <input type="text" value={this.state.input} onChange={(event) => this.setState({input: event.target.value})}/>  
                <button type="submit" onClick={ this.onSubmitHandler }>Submit</button>
            </div>
        )
    }
}
