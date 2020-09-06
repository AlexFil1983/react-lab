import React from 'react'
import './css/Typebuttons.css'
import {connect} from 'react-redux'
import { addTypes } from '../redux/actions/actions'
import Button from '@material-ui/core/Button'



function TypeButtons(props) {
    const types = Object.assign({}, props.types);

function changeType(type) {
    types[type] = !types[type];
    props.addTypes(types)
}

    return (
        <div className="type-buttons">
            <Button variant="contained" className={props.types.album ? "border" : null} onClick={() => changeType('album')}>Album</Button>
            <Button variant="contained" className={props.types.artist ? "border" : null} onClick={() => changeType('artist')}>Artist</Button>
            <Button variant="contained" className={props.types.playlist ? "border" : null} onClick={() => changeType('playlist')}>Playlist</Button>
            <Button variant="contained" className={props.types.track ? "border" : null} onClick={() => changeType('track')}>Track</Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        types: state.initialReducer.types,    
    }
    }

function mapDispatchToProps(dispatch) {
    return {
        addTypes: (types) => dispatch(addTypes(types)),
            }
    }
export default connect(mapStateToProps, mapDispatchToProps)(TypeButtons)
