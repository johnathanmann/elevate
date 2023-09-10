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
    }

    return(
        <main id="menu" className="container-fluid">
            <div className="d-inline-flex">
                <section className="row" id="first-menu">
                <article className="col-lg-6 col-md-6 col-sm-12" >
                    <ul>
                        <li onMouseOver={() => changeImg(coffee)} onClick={() => openMenu("Coffee")} className="bely-display display-1 black">Coffee</li>
                        <li onMouseOver={() => changeImg(espresso)} onClick={() => openMenu("Espresso")} className="bely-display display-1 black">Espresso</li>
                        <li onMouseOver={() => changeImg(teas)} onClick={() => openMenu("Teas")} className="bely-display display-1 black">Teas</li>
                        <li onMouseOver={() => changeImg(croissant)} onClick={() => openMenu("Eats")} className="bely-display display-1 black">Eats</li>
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
                <article className="col-lg-6 col-md-6 col-sm-12" id="menu-items">
                <h1 className="bely-display display-1 black">{activeMenu[0].name}</h1>
                {activeMenu[0].items.map((item, index)=>{
                    console.log(item.name)
                return <li className="p-text black kepler">{item.name}<span>$ {item.price}</span></li>
                })}
                </article>
            </section>
            </div>
        </main>
    )
}