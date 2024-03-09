import React from 'react';
import Navigation from './Nav';


function Header() {
  return (
    <header className="text-white py-3" /*style={{ backgroundColor: 'black' }}*/  style={{ backgroundColor: '#a3d092', color: 'black', padding: '10px', position: 'sticky', top: '0', zIndex: '100' }}>
      <div className="container d-flex justify-content-between align-items-center" style={{ backgroundColor: '#a3d092' }} >
        <h1>Daelyn Hiduchick's Portfolio</h1>
        <Navigation />
      </div>
    </header>
  )
}


export default Header;