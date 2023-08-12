import hamburger from "../assets/images/elevate-hamburger.png";
import "../assets/styles/nav.css"
import leftArrow from "../assets/images/left-arrow.png";
export default function Nav(){

    const openMenu = (e) => {
        document.getElementById("nav-menu").classList.add("slide-over")
        document.getElementById("nav-menu").classList.remove("slide-back")
    }

    const closeMenu = (e) => {
        document.getElementById("nav-menu").classList.add("slide-back")
        document.getElementById("nav-menu").classList.remove("slide-over")
    }

    return(
        <div id="nav">
            <nav id="nav" className="container-fluid">
                <h1 className="bely-display">Elevate</h1>
                <img onClick={() => openMenu()} src={hamburger}alt="Hamburger icon, three small horizontal bars indicating a menu"/>
            </nav>
            <div id="nav-menu">
                <header>
                    <img onClick={() => closeMenu()} src={leftArrow} alt="Left pointing cream colored arrow"/>
                    <h1 className="bely-display display-3">Elevate</h1>
                </header>
                <ul>
                    <li className="display-5 kepler cream">Home</li>
                    <li className="display-5 kepler cream">About</li>
                    <li className="display-5 kepler cream">Contact</li>
                </ul>
            </div>
        </div>
    )
}