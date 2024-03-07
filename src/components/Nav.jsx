import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black', position: 'sticky', top: '0', zIndex: '100' }}>
            <div className="container" style={{ backgroundColor: 'black' }}>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ backgroundColor: 'black', borderColor: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation