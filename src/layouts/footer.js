import "../assets/styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <section className="container-fluid p-5 cream" id="footer">
            <div className="row">
            <section className="col-md-6 order-md-1 col-sm-12 order-sm-2">
                <p className="p-text kepler">Stay up to date</p>
                <input className="kepler p-text" placeholder="Your Email" /><button className="px-3 mx-3">Submit</button>
                <h1 className="bely-display header">Elevate</h1>
            </section>
            <section className="col-md-6 order-md-2 col-sm-12 order-sm-1">
                <p className="p-text kepler mt-5">4209 SW Nomad Ave Kansas City, MO <br/>(480) 555 - 1972 <br/><br/> Open Daily 7 AM - 7 PM</p>
                <div className="d-flex mb-5">
                    <FontAwesomeIcon className="me-2" size="2xl" icon={faTwitterSquare} color="#f5f2e7"/>
                    <FontAwesomeIcon className="mx-2" size="2xl" icon={faInstagram} color="#f5f2e7"/>
                    <FontAwesomeIcon className="ms-2" size="2xl" icon={faTiktok} color="#f5f2e7"/>
                </div>
            </section>
            </div>
        </section>
    )
}