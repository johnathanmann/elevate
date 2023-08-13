import cafe from "../assets/images/cafe.jpg";
import "../assets/styles/home.css";
export default function Homepage(){
    return(
        <div id="homepage">
            <section className="container-fluid">
            <header className="row text-center">
                <h1 className="header bely-display black">Elevate</h1>
                <figure id="contain">
                    <img className="img-fluid" src={cafe} />
                </figure>
            </header>
            </section>
            <section className="container-fluid text-center" id="seperator">
                <p>Good Coffee ~ Good Times ~ Good People </p>
            </section>
        </div>
    )
}