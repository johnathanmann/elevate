import hamburger from "../assets/images/elevate-hamburger.png";
import "../assets/styles/nav.css"
export default function Nav(){
    return(
        <nav id="nav" className="container-fluid"><span className="bely-display"><h1>Elevate</h1></span> <img src={hamburger}alt="Hamburger icon, three small horizontal bars indicating a menu"/></nav>
    )
}