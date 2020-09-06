import React, { Component } from 'react'
import './css/SearchField.css'
import {connect} from 'react-redux'
import {addSearchInput} from '../redux/actions/actions'
import SearchButton from './SearchButton'

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
                <input type="text" value={this.state.searchInput} onChange={(event) => {
                    this.props.addInput(event.target.value);
                }}/>  
                <SearchButton search={this.props.search}/>
           
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        searchInput: state.searchInput,
    }
    }

    function mapDispatchToProps(dispatch) {
        return {
            addInput: (input) => dispatch(addSearchInput(input)),
                }
        }

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)
