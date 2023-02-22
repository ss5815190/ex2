import "./nav.css";
//import React,{useState} from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/Collection">Collection</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/About">About</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/Explore">Explore</Link>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
