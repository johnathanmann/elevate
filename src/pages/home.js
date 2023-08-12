import cafe from "../assets/images/cafe.jpg";
import "../assets/styles/home.css";
export default function Homepage(){
    return(
        <main className="container-fluid" id="homepage">
            <header className="text-center">
                <h1 className="header bely-display black">Elevate</h1>
                <div id="contain">
                <img className="img-fluid" src={cafe} />
                </div>
            </header>
        </main>
    )
}