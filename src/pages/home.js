import cafe from "../assets/images/cafe.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";
import darkColdbrew from "../assets/images/dark-coldbrew.png";
import lightColdbrew from "../assets/images/light-coldbrew.png";
import "../assets/styles/home.css";
export default function Homepage(){
    return(
        <div id="homepage">
            <section className="container-fluid">
            <header className="row text-center">
                <h1 className="header bely-display black">Elevate</h1>
                <figure id="cafe-contain">
                    <img className="img-fluid" src={cafe} />
                </figure>
            </header>
            </section>
            <section className="container-fluid text-center" id="seperator">
            <h1 className="kepler-italic black my-2">Where coffee meets elegance</h1>
            </section>
            <section div className="container-fluid">
                <div className="row text-center">
                    <h1 className="sub-header header bely black py-2">Who are we?</h1>
                </div>
                <section className="container">
                <div className="row" id="home-about">
                    <div className="col-md-7 my-auto">
                        <p className="kepler black p-text p-3">Est 2023<br/><br />Elevate Café is your destination for a coffee experience beyond compare. With a focus on excellence and a touch of sophistication, we bring you a selection of premium coffees sourced from around the world. Our expert baristas craft each cup with precision, ensuring a symphony of flavors that delight your palate.</p>
                    </div>
                    <div className="col-md-5 text-center mb-5">
                    <figure id="coffee-contain">
                        <img src={cappuccino} alt="Capuccino in white cup with greenary in the background"/>
                    </figure>
                    </div>
                </div>
                </section>
            </section>
            <section className="container-fluid" id="coldbrew">
                <div className="row text-center">
                    <h1 className="sub-header header bely black py-2">Why you're here</h1>
                </div>
                <div className="row">
                    <div className="col-md-5 text-center mt-2">
                        <figure>
                            <img src={darkColdbrew} alt="Glass of black cold brew" id="dark" className="mx-2 mt-5"/>
                            <img src={lightColdbrew} alt="Glass of cold brew with cream" id="light" className=" mx-5"/>
                        </figure>
                    </div>
                    <div className="col-md-5 my-auto">
                        <p className="kepler black p-text p-3">At Elevate Café, we take great pride in presenting our most cherished creation our beloved Cold Brew. Crafted with meticulous attention to detail and a passion for exceptional coffee, our cold brew is the epitome of coffee perfection, designed to elevate your coffee experience to new heights. <br/> <br/> <span className="kepler-italic black">Brew of the year 2023 - Global Coffee Academy</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}