import hamburger from "../assets/images/elevate-hamburger.png";
import "../assets/styles/nav.css"
export default function Nav(){

    const openMenu = (e) => {
        document.getElementById("nav-menu").classList.add("slide-over")
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
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}