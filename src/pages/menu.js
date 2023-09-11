import { useState, useEffect } from "react";
import "../assets/styles/menu.css";
import menus from "../assets/menu.json";
import sign from "../assets/images/elevate-sign.png";
import coffee from "../assets/images/coffee.jpg";
import teas from "../assets/images/tea.jpg";
import espresso from "../assets/images/espresso.jpg";
import croissant from "../assets/images/croissant.jpg";

export default function Menu(){
    let [activeImg, setActiveImg] =useState(sign);
    let [activeMenu, setactiveMenu] = useState(menus.filter(function(i) {
        return i.name === "Coffee";
      }));
    function changeImg(img){
        setActiveImg(img)
    }

    const setMenu = (menu) => {
        let currentMenu = menus.filter(function(i) {
            return i.name === menu;
          });
        setactiveMenu(currentMenu)
    }

    const openMenu = (menu) => {
        setMenu(menu)
        document.getElementById("second-menu").classList.add("open-menu")
        document.getElementById("menu").classList.remove("menu-initial")
        document.getElementById("menu").classList.add("menu-open")
        document.getElementById("menu-items").classList.remove("d-none")
        document.getElementById("menu-items").classList.add("d-block")
        if (window.innerWidth <= 576) {
            var clientHeight = document.getElementById('menu-items').clientHeight / 2;
        document.getElementById("footer").style.marginTop=clientHeight+"px";
          }
    }

    return(
        <main id="menu" className="container-fluid menu-initial">
            <div className="d-inline-flex">
                <section className="row" id="first-menu">
                <article className="col-lg-6 col-md-6 col-sm-12 height-55" >
                    <ul className="bely-display display-3 black">
                        <li  data-aos="fade-up" onMouseOver={() => changeImg(coffee)} onClick={() => openMenu("Coffee")}>Coffee</li>
                        <li  data-aos="fade-up" onMouseOver={() => changeImg(espresso)} onClick={() => openMenu("Espresso")}>Espresso</li>
                        <li  data-aos="fade-up" onMouseOver={() => changeImg(teas)} onClick={() => openMenu("Teas")}>Teas</li>
                        <li  data-aos="fade-up" onMouseOver={() => changeImg(croissant)} onClick={() => openMenu("Eats")}>Eats</li>
                    </ul>
                </article>
                <figure className="col-lg-6 col-md-6 col-sm-12 height-55" id="img-container">
                    <img  data-aos="fade-up" id="menu-img" src={activeImg} />
                </figure>
            </section>
            <section className="row closed-menu" id="second-menu">  
                <figure className="col-lg-6 col-md-6 col-sm-12 height-55" id="img-container">
                    <img  data-aos="fade-up" id="menu-img" src={activeImg} />
                </figure>
                <article className="col-lg-6 col-md-6 col-sm-12 d-none" id="menu-items">
                <h1  data-aos="fade-up" className="bely-display display-3 black">{activeMenu[0].name}</h1>
                <p  data-aos="fade-up" className="kepler-italic black">{activeMenu[0].tagline}</p>
                <ul className="p-text black kepler">
                {activeMenu[0].items.map((item, index)=>{
                    console.log(item.name)
                return <li>{item.name}<span>$ {item.price}</span></li>
                })}
                </ul>
                </article>
            </section>
            </div>
        </main>
    )
}