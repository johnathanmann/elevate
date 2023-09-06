import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import hamburger from "../assets/images/elevate-hamburger.png";
import "../assets/styles/nav.css"
import leftArrow from "../assets/images/left-arrow.png";
export default function Nav(){

    const openMenu = (e) => {
        document.getElementById("nav-menu").classList.add("slide-over")
        document.getElementById("nav-menu").classList.remove("slide-back")
        document.getElementById("hamburger").classList.add("remove-hamburger")
        document.getElementById("hamburger").classList.remove("add-hamburger")
    }

    const closeMenu = (e) => {
        document.getElementById("nav-menu").classList.add("slide-back")
        document.getElementById("nav-menu").classList.remove("slide-over")
        document.getElementById("hamburger").classList.remove("remove-hamburger")
        document.getElementById("hamburger").classList.add("add-hamburger")
    }
    const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location]);

    return(
        <div id="nav" >
            <nav data-aos="fade-up" id="nav" className="container-fluid">
                <h1 className="bely-display">Elevate</h1>
                <img id="hamburger"onClick={() => openMenu()} src={hamburger}alt="Hamburger icon, three small horizontal bars indicating a menu"/>
            </nav>
            <div id="nav-menu">
                <header>
                    <img onClick={() => closeMenu()} src={leftArrow} alt="Left pointing cream colored arrow"/>
                    <h1 className="bely-display display-3">Elevate</h1>
                </header>
                <ul>
                    <NavLink style={{textDecoration: 'none'}} to="/"><li className="display-5 kepler cream">Home</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/about"><li className="display-5 kepler cream">About</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/menu"><li className="display-5 kepler cream">Menu</li></NavLink>
                </ul>
            </div>
        </div>
    )
}