import React from 'react'
import SearchField from './SearchField'
import TypeButtons from './TypeButtons'
import LimitButtons from './LimitButtons'
import SearchButton from './SearchButton'

export default function SearchForm(props) {
    console.log('searchForm token', props.token)
    return (
        <div>
            <SearchField token={props.token} />
            {/* <TypeButtons />
            <LimitButtons />
            <SearchButton /> */}
        </div>
    )
}
