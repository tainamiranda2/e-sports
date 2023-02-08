import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export const Navbar=()=>{

    return(
<navbar>
<ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/Time">Time</Link>
    </li>
    <li>
    <Link to="/Jogador">Jogador</Link>
    </li>
  
</ul>
</navbar>
    )
}