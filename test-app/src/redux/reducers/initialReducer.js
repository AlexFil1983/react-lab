import {ADD_TOKEN, ADD_USER_DATA, ADD_SEARCH_INPUT, ADD_TYPES, SAVE_TOTAL_QUERY} from '../actions/constants'

const initialState = {
    token: null,
    userData: null,
    searchInput: '',
    totalQuery: '',
    types: {
    album: true,
    artist: true,
    playlist: false,
    track: false,
    },
   
}

export default function initialReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_TOKEN:
            return {
                ...state,
                token: action.payload
            }

        case ADD_USER_DATA:
        return {
            ...state,
            userData: action.payload
        }

        case ADD_SEARCH_INPUT:
        return {
            ...state,
            searchInput: action.payload
        }

        case ADD_TYPES:
            return {
                ...state,
                types: action.payload
            }
        
        case SAVE_TOTAL_QUERY: {
            return {
                ...state,
                totalQuery: action.payload
            }
        }            

        default:
        return state
    }
}