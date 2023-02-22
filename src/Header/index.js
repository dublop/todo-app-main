import React from "react";
import './Header.css';
import moonIcon from  "../assets/icon-moon.svg";
import sunIcon from  "../assets/icon-sun.svg";
import bgDesImgL from "../assets/images/bg-desktop-light.jpg";
import bgDesImgD from "../assets/images/bg-desktop-dark.jpg";

function Header() {
    let rootStyles = document.querySelector(':root');
    let bodyStyles = document.querySelector('body');
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');
    let viewport_width = window.innerWidth;
    
    
    const toggleIcon = () => {
        moon.classList.toggle('hidden');
        sun.classList.toggle('hidden');

        if(sun.classList.contains('hidden')) {
            rootStyles.style.setProperty('--bg', 'hsl(236, 33%, 92%)');
            rootStyles.style.setProperty('--font', 'hsl(235, 19%, 35%)');
            rootStyles.style.setProperty('--input-div', 'hsl(0, 0%, 98%)');
            rootStyles.style.setProperty('--border', 'hsl(236, 9%, 61%)');
            rootStyles.style.setProperty('--border-bottom', 'hsl(236, 9%, 61%)');
            bodyStyles.style.setProperty ('background-image', `url(${bgDesImgL})`);



        } else {
            rootStyles.style.setProperty('--bg', 'hsl(235, 21%, 11%)');
            rootStyles.style.setProperty('--font', 'hsl(236, 33%, 92%)');
            rootStyles.style.setProperty('--input-div', 'hsl(235, 24%, 19%)');
            rootStyles.style.setProperty('--border', ' hsl(237, 14%, 26%)');
            rootStyles.style.setProperty('--border-bottom', 'hsl(233, 14%, 35%)');
            bodyStyles.style.setProperty ('background-image', `url(${bgDesImgD})`);
        }
    }
    
    return (
        <div className="Header">
            <h1 >TODO</h1>
            <img src={moonIcon} id="moon" className="hidden" onClick={toggleIcon}/>
            <img src={sunIcon} id="sun" className="" onClick={toggleIcon}/>
        </div>
        
    );
}

export { Header };