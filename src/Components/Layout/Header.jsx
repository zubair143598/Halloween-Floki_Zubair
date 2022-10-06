import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
    <nav className="navbar header  sticky-top navbar-expand-lg bg-dark">
      <div className="container">
        <a className=" nav-link active" aria-current="page" href="#">
          <img src="./Assists/FLOH_Logo-removebg-preview.png " alt="" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Home">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="OurTeam">
                Tokennomics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Swap">
                Roadmap
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Documents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className=" border border-light rounded-5 nav-link" href="#">
                MINT FLOH RAFFLE NFT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
