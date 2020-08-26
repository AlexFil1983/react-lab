import React, { Component } from 'react'
import './css/SearchField.css'
import {connect} from 'react-redux'


class SearchField extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
                }
    }


onSubmitHandler = () => {
   fetch(`https://api.spotify.com/v1/search?q=${this.state.input}&type=artist,playlist`, {
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

function mapStateToProps(state) {
    return {
        token: state.token,
    }
    }

export default connect(mapStateToProps)(SearchField)
