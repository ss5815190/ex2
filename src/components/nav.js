import "./nav.css";
//import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {useState} from'react';

const Nav = () => {

  const [NavSwitch,setNavSwitch]=useState(0)
  const displayNav=()=>{
    NavSwitch===0?setNavSwitch(NavSwitch+1):setNavSwitch(NavSwitch-1)
    console.log(NavSwitch);
    
  }

  return (
    <div className="nav">
      <ul className={`${NavSwitch===0?'nav-Close':'nav-Open'}`}>
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
      <button onClick={displayNav}className={`navButton ${NavSwitch===0?'':'navButton-Close'}`}>
        
          <p >{`${NavSwitch===0?'Menu':'X'}`}</p>
        
        </button>
    </div>
  );
};

export default Nav;
