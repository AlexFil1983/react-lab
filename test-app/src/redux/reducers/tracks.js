import {ADD_TRACKS_DATA, SEARCH_START_TRACKS, SEARCH_SUCCESS_TRACKS, SEARCH_FAILURE_TRACKS} from '../actions/constants'

const initialState = {
    isLoading: false,
    tracks_data: null,
    error: false,   
  }

export default function tracks(state = initialState, action) {
switch(action.type) {
    case ADD_TRACKS_DATA: 
    return {
        ...state,
        tracks_data: action.payload
    }
  
    case SEARCH_SUCCESS_TRACKS:
        return {
            ...state,
            isLoading: false,
            error: false
        }

    case SEARCH_START_TRACKS:
        return {
                ...state,
                isLoading: true,
                error: false
            }
    
    case SEARCH_FAILURE_TRACKS:
                return {
                        ...state,
                        error: true,
                        isLoading: false,
                    }
    default: return state;
}
}