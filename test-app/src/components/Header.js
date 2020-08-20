import React, { Component } from 'react'
import './css/Header.css'

export default class Header extends Component {
    render(props) {
        return (
            <div className="header">
        <button onClick={() => window.location = this.props.link}>User Profile</button>
            </div>
        )
    }
}
