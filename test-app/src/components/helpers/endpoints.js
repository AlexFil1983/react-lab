import { typeOptions } from '../helpers/searchTypes';
export const userDataEndpoint = "https://api.spotify.com/v1/me";

export function userSearchEndpoint(searchInput, type) {
    return `https://api.spotify.com/v1/search?q=${searchInput}&type=${type}`;
}

export function userSearchQuery(searchInput, types) {
    return `https://api.spotify.com/v1/search?q=${searchInput}&type=${typeOptions(types)}`;
}