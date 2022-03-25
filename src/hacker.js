//import Nav from './nav'
import './hacker.css';
function Hacker() {
    return (
        <>
            <article className="blur-container anim-start-header" id="layout-100vh">
                <header className="left">
                    <figure>
                        <img src="https://izrada-sajta.rs/frontend/web/240-240.png" alt="Aleksandar Gavric Web Developer" width="100" height="100" />
                    </figure>
                    <h2>Web developer</h2>
                    <h2 id="dev-name">Aleksandar Gavric</h2>
                </header>
                <section className="right">
                    <h1 >Web Development</h1>
                    <h2>Front End</h2>
                    <ul>
                        <li>
                            <h3>HTML5, CSS, SASS, JS,</h3>
                        </li>
                        
                    </ul>
                    <h2>BackEnd End</h2>
                    <ul>
                        <li>
                            <h4>PHP&amp;MySQL</h4>
                        </li>
                    </ul>
                   
                </section>
            </article>
        </>
    );
}

export default Hacker;