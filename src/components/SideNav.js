import React from 'react';
import './styles/SideNav.css';

export default function SideNav() {
  const options = ['Projects', 'About Me', 'Fun Stuff'];

  return (
    <div id="side-nav-container">
      {options.map((elem, idx) => {
        return (
          <div key={idx} className="option">
            {elem}
          </div>
        );
      })}
    </div>
  );
}
