import React from "react";
import './Header.css';
import moonIcon from  "../icons/icon-moon.svg";

function Header() {
    return (
        <div className="Header">
            <h1 >TODO</h1>
            <img src={moonIcon}/>
        </div>
        
    );
}

export { Header };