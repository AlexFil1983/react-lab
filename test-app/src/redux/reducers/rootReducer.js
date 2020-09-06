import {combineReducers} from 'redux'
import initialReducer from './initialReducer'
import albums from './albums'
import artists from './artists'
import playlists from './playlists'
import tracks from './tracks'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
initialReducer, albums, artists, playlists, tracks, form: formReducer
})