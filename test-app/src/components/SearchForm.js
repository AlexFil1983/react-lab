import React from 'react'
import SearchField from './SearchField'
import TypeButtons from './TypeButtons'
import LimitButtons from './LimitButtons'

export default function SearchForm(props) {
    return (
        <div>
            <div>
            <SearchField />
            </div>
          
            <TypeButtons />
            <LimitButtons />
           
        </div>
    )
}
