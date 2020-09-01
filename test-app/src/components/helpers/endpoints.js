import { typeOptions } from '../helpers/searchTypes';
export const userDataEndpoint = "https://api.spotify.com/v1/me";

export function userSearchEndpoint(searchInput, type, limit) {
    console.log(`https://api.spotify.com/v1/search?q=${searchInput}&type=${type}&limit=${limit}`)
    return `https://api.spotify.com/v1/search?q=${searchInput}&type=${type}&limit=${limit}`;
}

export function userSearchQuery(searchInput, types, limit) {
    return `https://api.spotify.com/v1/search?q=${searchInput}&type=${typeOptions(types)}&limit=${limit}`;
}