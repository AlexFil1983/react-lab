import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {addSearchInput} from '../redux/actions/actions'



class SearchField extends React.Component {
 renderInput({input}) {

return (
<input {...input} />
)
}

onSubmit = (searchValue) => {
this.props.search(searchValue.searchInput)
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

function mapDispatchToProps(dispatch) {
    return {
        addInput: (input) => dispatch(addSearchInput(input)),
            }
    }

SearchField = reduxForm({form: 'inputSearch'})(SearchField)
SearchField = connect(null, mapDispatchToProps)(SearchField)

export default  SearchField