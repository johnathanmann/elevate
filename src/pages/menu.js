import "../assets/styles/menu.css";

export default function Menu(){
    let activeImg;
    return(
        <main id="menu">
            <section className="row">
                <article className="col-md-6">
                    <ul>
                        <li>Coffee</li>
                        <li>Espresso</li>
                        <li>Other</li>
                        <li>Food</li>
                    </ul>
                </article>
                <figure className="col-md-6">
                    <img src={activeImg} />
                </figure>
            </section>
        </main>
    )
}