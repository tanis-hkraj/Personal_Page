import React, { useEffect, useRef } from 'react';
import my from './images/my.jpeg';
import './hero.css';
import Typed from 'typed.js';
import Resume from './documents/Resume.pdf';

export default function Hero() {
  const onButtonClick = () => {
    const pdfUrl = Resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'Machine Learning Engineer.'],
      typeSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container hero'>
      <div className='row d-flex align-items-center' id='HeroRow'>
        <div className='col-lg-6 mx-auto' id='summary'>
          <h1>
            Hi, I am <span id='spanele'>Tanishk</span>
            <br /> and I am a Passionate
            <br />
            <span ref={el} id='spanele' />
          </h1>
          <button onClick={onButtonClick} className='resume'>
            Resume &nbsp;<i class='fa-solid fa-download'></i>
          </button>
        </div>
        <div className='col-lg-6 mx-auto' id='profile'>
          <img src={my} id='myImage' />
        </div>
      </div>
    </div>
  );
}
