import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#a3d092', position: 'sticky', top: '0', zIndex: '100' }}>
            <div className="container" style={{ backgroundColor: '#a3d092' }}>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ backgroundColor: '#a3d092', borderColor: '#a3d092' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: '#a3d092' }} to="/">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: '#a3d092' }} to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: '#a3d092' }} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: '#a3d092' }} to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation