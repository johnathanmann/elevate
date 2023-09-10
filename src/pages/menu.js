import { useState, useEffect } from "react";
import "../assets/styles/menu.css";
import sign from "../assets/images/elevate-sign.png";
import coffee from "../assets/images/coffee.jpg";
import teas from "../assets/images/tea.jpg";
import espresso from "../assets/images/espresso.jpg";
import croissant from "../assets/images/croissant.jpg";

export default function Menu(){
    let [activeImg, setActiveImg] =useState(sign);

    function changeImg(img){
        setActiveImg(img)
    }

    const openMenu = (e) => {
        console.log("click")
        document.getElementById("second-menu").classList.add("open-menu")
    }


    return(
        <main id="menu" className="container-fluid">
            <div className="d-inline-flex">
                <section className="row" id="first-menu">
                <article className="col-lg-6 col-md-6 col-sm-12" >
                    <ul>
                        <li onMouseOver={() => changeImg(coffee)}  onClick={() => openMenu()} className="bely-display display-1 black">Coffee</li>
                        <li onMouseOver={() => changeImg(espresso)} className="bely-display display-1 black">Espresso</li>
                        <li onMouseOver={() => changeImg(teas)} className="bely-display display-1 black">Teas</li>
                        <li onMouseOver={() => changeImg(croissant)} className="bely-display display-1 black">Eats</li>
                    </ul>
                </article>
                <figure className="col-lg-6 col-md-6 col-sm-12" id="img-container">
                    <img id="menu-img" src={activeImg} />
                </figure>
            </section>
            <section className="row closed-menu" id="second-menu">  
                <figure className="col-lg-6 col-md-6 col-sm-12" id="img-container">
                    <img id="menu-img" src={activeImg} />
                </figure>
                <article className="col-lg-6 col-md-6 col-sm-12" >
                    <h1>hi</h1>
                </article>
            </section>
            </div>
        </main>
    )
}