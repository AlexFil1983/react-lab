import React from 'react'
import SearchField from './SearchField2'
import TypeButtons from './TypeButtons'
import LimitButtons from './LimitButtons'

export default function SearchForm(props) {
    return (
        <div>
            <div>
            <SearchField search={props.search} />
            </div>
          
            <TypeButtons />
            <LimitButtons />
           
        </div>
    )
}
