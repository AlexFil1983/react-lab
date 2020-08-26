import {ADD_TOKEN, ADD_USER_DATA} from '../redux/actions/constants'



const initialState = {
    token: null,
    userData: null,
   
}

export default function rootReducer(state = initialState, action) {

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
        default:
        return state
    }

    return state
}