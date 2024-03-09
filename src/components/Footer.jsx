import React from 'react';

function Footer() {
  return (
    <footer className="text-center rounded-lg p-0" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', paddingTop:10 }}>
      <div className="text-center rounded-lg p-0" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%'}}>
        <a href="https://www.linkedin.com/in/daelyn-hiduchick-811a75232/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="Linkedin Icon" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://github.com/dhiduchick" className="text-white" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub Icon" style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


