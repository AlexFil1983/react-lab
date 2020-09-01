import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {addSearchInput} from '../redux/actions/actions'
import { userSearchQuery } from './helpers/endpoints'
import { saveTotalQuery, addSearchData } from '../redux/actions/actions'

class SearchField extends React.Component {
 renderInput({input}) {

return (
<input {...input} />
)
}

searchUserInput = (searchInput) => {
   
    this.props.saveTotalQuery(userSearchQuery(searchInput, this.props.types, this.props.limit));
    for (let type in this.props.types) {
if (this.props.types[type]) {
    this.props.addSearchData(searchInput, type, this.props.token, this.props.limit)
}
    }
}

onSubmit = ({searchInput}) => {
this.searchUserInput(searchInput)
}

    render() {
        return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="searchInput" component={this.renderInput} label="Search" onChange={(event) => this.props.addInput(event.target.value)} />
            <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
            )
    }
    
}

function mapStateToProps(state) {
    return {
    types: state.initialReducer.types,
    token: state.initialReducer.token,
    limit: state.initialReducer.limit,
   }
}

function mapDispatchToProps(dispatch) {
    return {
        addInput: (input) => dispatch(addSearchInput(input)),
        saveTotalQuery: (query) => dispatch(saveTotalQuery(query)),
        addSearchData: (searchInput, type, token, limit) => dispatch(addSearchData(searchInput, type, token, limit)),
            }
    }

SearchField = reduxForm({form: 'inputSearch'})(SearchField)
SearchField = connect(mapStateToProps, mapDispatchToProps)(SearchField)

export default  SearchField