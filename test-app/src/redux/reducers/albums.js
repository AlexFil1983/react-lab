import {ADD_ALBUMS_DATA, SEARCH_SUCCESS_ALBUMS, SEARCH_START_ALBUMS, SEARCH_FAILURE_ALBUMS} from '../actions/constants'

const initialState = {
    isLoading: false,
    albums_data: null,
    error: false,   
  }

export default function albums(state = initialState, action) {
switch(action.type) {
    case ADD_ALBUMS_DATA: 
    return {
        ...state,
        albums_data: action.payload,
        error: false
    }

    case SEARCH_SUCCESS_ALBUMS:
        return {
            ...state,
            isLoading: false,
            error: false
        }

    case SEARCH_START_ALBUMS:
        return {
                ...state,
                isLoading: true,
                error: false
            }
    
    case SEARCH_FAILURE_ALBUMS:
                return {
                        ...state,
                        error: true,
                        isLoading: false,
                    }
    default: return state;
}
}