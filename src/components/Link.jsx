// components/Link.jsx
import React from 'react';
import './Link.css';

const LinkPage = () => {
  const links = [
    { name: "My Portfolio", url: "https://harmanssainisportfolio.netlify.app/" },
    { name: "NEXAURA – Elevating Experiences", url: "https://nexaurapvtltd.netlify.app/" },
    { name: "Astro-Watch By Harman Saini", url: "https://astrowatchbyharmansaini.netlify.app/" },
    { name: "MERI RASOI – Hospitality & Caterers", url: "https://merirasoi.netlify.app/" },
  ];

  return (
    <div className="link-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/bglink.mp4" type="video/mp4" />
      </video>

      <div className="glass-box">
        <div className="header">
          <img src="/zentara-logo1.png" alt="Zentara Logo" className="logo" />
          <h1 className="main-title">@ZENTARA VENTURES</h1>

          <div className="subtitle-block">
            <p className="subtitle">
              Crafting Tomorrow’s Brands with Calm, Clarity,<br />
              and a Heartbeat of Legacy.
            </p>
            <div className="welcome">
              <h2 className="welcome-title">Welcome to</h2>
              <h2 className="welcome-title">Zentara Ventures</h2>
              <p className="welcome-text">
                Here you will explore my work parts and upcoming global projects!
              </p>
            </div>
          </div>
        </div>

        <div className="link-buttons">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
