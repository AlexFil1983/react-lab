import {ADD_ARTISTS_DATA, SEARCH_SUCCESS_ARTISTS, SEARCH_START_ARTISTS, SEARCH_FAILURE_ARTISTS} from '../actions/constants'

const initialState = {
    isLoading: false,
    artists_data: null,
    error: false,   
  }

export default function artists(state = initialState, action) {
switch(action.type) {
    case ADD_ARTISTS_DATA: 
    return {
        ...state,
        artists_data: action.payload
    }

    case SEARCH_SUCCESS_ARTISTS:
        return {
            ...state,
            isLoading: false,
            error: false
        }

    case SEARCH_START_ARTISTS:
        return {
                ...state,
                isLoading: true,
                error: false
            }
    
    case SEARCH_FAILURE_ARTISTS:
                return {
                        ...state,
                        error: true,
                        isLoading: false,
                    }
    default: return state;
 }
}