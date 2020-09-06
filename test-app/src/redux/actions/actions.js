import * as consts from './constants'
import { userSearchEndpoint } from '../../components/helpers/endpoints'


export function addToken(token) {
    return {
        type: consts.ADD_TOKEN,
        payload: token
    }
}

export function addUserData(data) {
    return {
        type: consts.ADD_USER_DATA,
        payload: data
    }
}

// export function addSearchInput(input) {
//     return {
//         type: consts.ADD_SEARCH_INPUT,
//         payload: input
//     }
// }


export function addTypes(types) {
    return {
        type: consts.ADD_TYPES,
        payload: types,
    }
}

export function addSearchData(searchInput, type, token, limit) {

let searchType = null;
let successType = null;
let startType = null;
let searchFailureType = null;

if (type === 'album') {
searchType = consts.ADD_ALBUMS_DATA
successType = consts.SEARCH_SUCCESS_ALBUMS
startType = consts.SEARCH_START_ALBUMS
searchFailureType = consts.SEARCH_FAILURE_ALBUMS

}

if (type === 'artist') {
    searchType = consts.ADD_ARTISTS_DATA
    successType = consts.SEARCH_SUCCESS_ARTISTS
    startType = consts.SEARCH_START_ARTISTS
    searchFailureType = consts.SEARCH_FAILURE_TRACKS
    }

if (type === 'playlist') {
        searchType = consts.ADD_PLAYLISTS_DATA
        successType = consts.SEARCH_SUCCESS_PLAYLISTS
        startType = consts.SEARCH_START_PLAYLISTS
        searchFailureType = consts.SEARCH_FAILURE_PLAYLISTS
        }  
        
if (type === 'track') {
            searchType = consts.ADD_TRACKS_DATA
            successType = consts.SEARCH_SUCCESS_TRACKS
            startType = consts.SEARCH_START_TRACKS
            searchFailureType = consts.SEARCH_FAILURE_TRACKS
            }  

return (dispatch) => {

    dispatch({type: startType})
    fetch(userSearchEndpoint(searchInput, type, limit), {
                headers: {
   'Authorization': 'Bearer ' + token
}})
.then(response => response.json())
.then(data => {
                dispatch({
                            type: searchType,
                            payload: data,
                            });
                setTimeout(() => {
                    dispatch({type: successType})
                }, 3000)
                    })
.catch(error => {dispatch({type: searchFailureType})})            
}
}

export function submitLimits(limit) {
    return {
        type: consts.SUBMIT_LIMIT,
        payload: limit
    }
}
