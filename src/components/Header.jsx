import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logogris.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as regularLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as solidLightbulb } from '@fortawesome/free-solid-svg-icons';


function Logo_plantilla({ scaleX }) {
  return (
    <img
      src={logo}
      alt=""
      width="30"
      style={{ transform: `scaleX(${scaleX})` }}
    />
  );
}


function Header() {

  useEffect(() => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.querySelector("html");

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        htmlElement.setAttribute("data-bs-theme", newTheme);
      });
    }
  }, []); // El array vacío asegura que este efecto se ejecute una sola vez al montar el componente.

  return (

    <nav className="navbar navbar-expand-sm ">

      <div className='container'>

        <Link to="/" className="navbar-brand"><Logo_plantilla scaleX={1} /></Link>
        <Link to="/" className="navbar-brand">SelraK</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav  pt-3-sm pe-5 ">

            <div className="nav-link text-end">
              <button id="theme-toggle" className="" style={{ border: "none ", background: "transparent" }}>
                <FontAwesomeIcon icon={solidLightbulb} size="xl" />
              </button>
            </div>

            <Link to="/" className='nav-link text-end'> Home</Link>
            <Link to="/photography" className='nav-link text-end'>Photography</Link>
            <Link to="/blender" className='nav-link text-end'>Blender</Link>
            <Link to="https://github.com/carlesmatoses" className='nav-link text-end'>GitHub</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header

