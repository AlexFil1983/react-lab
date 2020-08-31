import React from 'react'

export default function SearchButton(props) {
    return (
        <div>
            <button onClick={props.search}>Search</button>
        </div>
    )
}
