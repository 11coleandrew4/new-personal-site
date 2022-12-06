import React from 'react';
import './styles/Header.css';

export default function Header() {
  return (
    <div id="header-container">
      <div id="name-tag">
        <img src="../../myPic.png" id="my-picture" alt="my beautiful face" />
        <p>Cole Berman</p>
      </div>
      <div id="contact-me">
        <p>Contact Me</p>
      </div>
    </div>
  );
}
