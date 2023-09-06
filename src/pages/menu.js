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

    function resetImg(){
        setActiveImg(sign)
    }

    return(
        <main id="menu" className="container-fluid">
            <section className="row">
                <article className="col-md-6 col-sm-12">
                    <ul>
                        <li onMouseOver={() => changeImg(coffee)} onMouseLeave={() => resetImg()} className="bely-display display-1 black">Coffee</li>
                        <li onMouseOver={() => changeImg(espresso)} onMouseLeave={() => resetImg()} className="bely-display display-1 black">Espresso</li>
                        <li onMouseOver={() => changeImg(teas)} onMouseLeave={() => resetImg()} className="bely-display display-1 black">Teas</li>
                        <li onMouseOver={() => changeImg(croissant)} onMouseLeave={() => resetImg()} className="bely-display display-1 black">Eats</li>
                    </ul>
                </article>
                <figure className="col-md-6 col-sm-12">
                    <img className="img-fluid" id="menu-img" src={activeImg} />
                </figure>
            </section>
        </main>
    )
}