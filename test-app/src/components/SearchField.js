import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import { userSearchQuery, userSearchEndpoint } from './helpers/endpoints'
import { addSearchData } from '../redux/actions/actions'
import './css/SearchField.css'

class SearchField extends React.Component {

constructor() {
    super();
    this.state = {
        lastQuery: '',
        album: '',
        artist: '',
        playlist: '',
        track: '',
        status: ''
    }
}

 renderInput({input}) {

return (
<input {...input} />
)
}

searchUserInput = ({searchInput}) => {
this.setState({status: ''})

if (searchInput.trim().length == 0) {
    this.setState({status: 'Just enter something'})
    return
}

    const currentQuery = userSearchQuery(searchInput, this.props.types, this.props.limit);
    if (currentQuery === this.state.lastQuery) {
        return;
    }
    
    this.setState({lastQuery: currentQuery})
    for (let type in this.props.types) {
if (this.props.types[type]) {
if (this.state[type] === userSearchEndpoint(searchInput, type, this.props.limit)) {
    console.log(`the same query with ${type}`)
    return
}
this.setState({[type] : userSearchEndpoint(searchInput, type, this.props.limit) })
    this.props.addSearchData(searchInput, type, this.props.token, this.props.limit)
}
    }
}


    render() {
        return (
        <form onSubmit={this.props.handleSubmit(this.searchUserInput)}>
            <Field name="searchInput" component={this.renderInput} label="Search" />
            <Button type="submit" variant="contained" color="primary">Search</Button>
            <p style={{color: 'red'}}>{this.state.status}</p>
        </form>
            )
    }
    
}

function mapStateToProps(state) {
   
    return {
    types: state.initialReducer.types,
    token: state.initialReducer.token,
    limit: state.initialReducer.limit,
    initialValues: {searchInput: ""}
   }
}

function mapDispatchToProps(dispatch) {
    return {
        addSearchData: (searchInput, type, token, limit) => dispatch(addSearchData(searchInput, type, token, limit)),
            }
    }

SearchField = reduxForm({form: 'inputSearch'})(SearchField)
SearchField = connect(mapStateToProps, mapDispatchToProps)(SearchField)

export default  SearchField