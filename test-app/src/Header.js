import React, { Component } from 'react'

export default class Header extends Component {
    render(props) {
        return (
            <div>
        <button onClick={() => window.location = this.props.link}>User Profile</button>
            </div>
        )
    }
}
