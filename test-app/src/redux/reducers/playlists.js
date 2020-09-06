import {ADD_PLAYLISTS_DATA, SEARCH_SUCCESS_PLAYLISTS, SEARCH_START_PLAYLISTS, SEARCH_FAILURE_PLAYLISTS} from '../actions/constants'

const initialState = {
    isLoading: false,
    playlists_data: null,
    error: false,   
  }

export default function playlists(state = initialState, action) {
switch(action.type) {
    case ADD_PLAYLISTS_DATA: 
    return {
        ...state,
        playlists_data: action.payload
    }

       case SEARCH_SUCCESS_PLAYLISTS:
        return {
            ...state,
            isLoading: false,
            error: false
        }

    case SEARCH_START_PLAYLISTS:
        return {
                ...state,
                isLoading: true,
                error: false
            }
    
    case SEARCH_FAILURE_PLAYLISTS:
                return {
                        ...state,
                        error: true,
                        isLoading: false,
                    }
    default: return state;
}
}