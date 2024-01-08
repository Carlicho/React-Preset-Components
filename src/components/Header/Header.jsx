import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React Preset Components</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-success" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">link 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Nav-link(disabled)</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header