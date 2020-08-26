import React from 'react'
import SearchField from './SearchField'
import TypeButtons from './TypeButtons'
import LimitButtons from './LimitButtons'
import SearchButton from './SearchButton'

export default function SearchForm() {
    return (
        <div>
            <SearchField />
            <TypeButtons />
            <LimitButtons />
            <SearchButton />
        </div>
    )
}
