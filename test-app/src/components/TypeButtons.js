import React from 'react'
import './css/Typebuttons.css'
import {connect} from 'react-redux'
import { addTypes } from '../redux/actions/actions'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'


function TypeButtons(props) {
const types = Object.assign({}, props.types);
function changeType(type) {
    types[type] = !types[type];
    props.addTypes(types)
}

    return (
       
        <form className="searchTypes">
             <label>
            <Field name="album" component="input" type="checkbox" value="album" onChange={() => changeType('album')} />{' '}
            Album
          </label>
          <label>
            <Field name="artist" component="input" type="checkbox" value="artist" onChange={() => changeType('artist')} />{' '}
            Artist
          </label>
          <label>
            <Field name="playlist" component="input" type="checkbox" value="playlist" onChange={() => changeType('playlist')} />{' '}
            Playlist
          </label>
          <label>
            <Field name="track" component="input" type="checkbox" value="track" onChange={() => changeType('track')}/>{' '}
            Track
          </label>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        types: state.initialReducer.types, 
        initialValues: {
            album:true,
            artist: true,
        }   
    }
    }

function mapDispatchToProps(dispatch) {
    return {
        addTypes: (types) => dispatch(addTypes(types)),
            }
    }

TypeButtons = reduxForm({form: 'inputSearch'})(TypeButtons)

export default connect(mapStateToProps, mapDispatchToProps)(TypeButtons)
