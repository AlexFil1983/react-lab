import * as consts from './constants'
import { userSearchEndpoint } from '../../components/helpers/endpoints'
import { userDataEndpoint } from '../../components/helpers/endpoints'

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

export function addSearchInput(input) {
    return {
        type: consts.ADD_SEARCH_INPUT,
        payload: input
    }
}


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
    console.log(startType)
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

export function saveTotalQuery(query) {
    return {
        type: consts.SAVE_TOTAL_QUERY,
        payload: query,
    }
}




  
    // switch(type) {
    //     case "albums": {
    //         return (dispatch) => {
    //             fetch(userDataEndpoint(searchInput, type), {
    //                      headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //             }).then(respone => response.json())
    //             .then(data => {
    //                 dispatch({
    //                     type: ADD_ALBUMS_DATA,
    //                     payload: data,
    //                     }) 
    //             })
    //         } 
    //         // {
    //         //     type: ADD_ALBUMS_DATA,
    //         //     payload: data.albums
    //         // }
    //     }

        // fetch(userSearchEndpoint(this.props), {
        //     headers: {
        //         'Authorization': 'Bearer ' + this.props.token
        //     }
        // }).then((response) => response.json())
        // .then(data => {
        //     for (let type in data) {
        //         if (data[type]) {
        //             this.props.addSearchData(data, type)
        //         } 
        //     }
        //  })

//         case "artists": {
//             return {
//                 type: ADD_ARTISTS_DATA,
//                 payload: data.artists
//             }
//         }

//         case "playlists": {
//             return {
//                 type: ADD_PLAYLISTS_DATA,
//                 payload: data.playlists
//             }
//         }

//         case "tracks": {
//             return {
//                 type: ADD_TRACKS_DATA,
//                 payload: data.tracks
//             }
//         }
//         default: return 
//     }
//   }


//   export function searchUserInput() {
//     fetch(userSearchEndpoint(this.props), {
//         headers: {
//             'Authorization': 'Bearer ' + this.props.token
//         }
//     }).then((response) => response.json())
//     .then(data => {
//         for (let type in data) {
//             if (data[type]) {
//                 this.props.addSearchData(data, type)
//             } 
//         }
//      })
