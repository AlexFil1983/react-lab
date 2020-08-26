import {ADD_TOKEN, ADD_USER_DATA} from './constants'

export function addToken(token) {
    return {
        type: ADD_TOKEN,
        payload: token
    }
}

export function addUserData(data) {
    return {
        type: ADD_USER_DATA,
        payload: data
    }
}