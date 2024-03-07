import React from 'react'
//import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="text-center bg-black rounded-lg p-0 fixed-bottom">
      <div className="text-center bg-black rounded-lg p-4">
        <a href="https://www.linkedin.com/in/daelyn-hiduchick-811a75232/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/dhiduchick" className="text-white" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  )
}


export default Footer