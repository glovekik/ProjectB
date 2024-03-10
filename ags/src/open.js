import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './open.css';

const HS3 = { "float": "left", "height": "45px", "margin-top": "6px" };
const HS2 = { "float": "right", "padding-right": "15px", "cursor": "pointer" };
const HS1 = { "float": "right", "padding-right": "5px", "cursor": "pointer" };
const HS4 = { "float": "left", "height": "45px", "margin-left": "40px", "margin-top": "200px", "font-size": "40px" };
const HS5 = { "float": "right", "padding-right": "15px", "margin-top": "250px", "margin-right": "-150px" };
const HS6 = { "float": "right", "padding-right": "15px", "margin-top": "150px", "margin-right": "165px", "font-size": "25px" };

const BUBBLE_COUNT = 10;

function Open() {
  useEffect(() => {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    document.body.appendChild(bubbleContainer);

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 2 + 1}s`;
      bubbleContainer.appendChild(bubble);
    }

    return () => {
      document.body.removeChild(bubbleContainer);
    };
  }, []);

  const handleLogin = async () => {
    window.location.href = '/login';
  };

  return (
    <div className="full-height">
      <div className='header'>
        <label style={HS3}>Art Gallery</label>
        <div className="left-side">
          <Link to="contact" smooth={true} duration={500} style={HS1}>
            Contact Us
          </Link>
          <Link to="about" smooth={true} duration={500} style={HS2}>
            About Us
          </Link>
        </div>
      </div>
      <div className='content'>
        <h1 style={HS4}>Welcome to the art gallery</h1>
        <h4 style={HS6}>Get Started</h4>
        <h2 style={HS5}>
          <div className='button-login'>
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className='button-register'>
            <button>Register</button>
          </div>
        </h2>
      </div>
      <div className='footer1'>Copyright @ART GALLERY. All Rights Reserved.</div>
      <div className='footer' name="contact">
        <h2 >Contact Us: </h2>
        <p>Contact Email: info@artgallery.com</p>
        <p>Phone: +1 (123) 456-7890</p>      </div>

      <div className='footer' name="about">
        <h2>About Us: </h2>
        <p>Welcome to the Art Gallery, a space dedicated to showcasing
          and promoting diverse and talented artists</p>
      </div>
    </div>
  );
}

export default Open;
