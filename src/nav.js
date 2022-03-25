import { Link } from "react-router-dom";
import './nav.css'
import './function.js'
export default function Nav() {
    function openMenu() {
        var animenu = document.getElementById('anav');
        if (animenu.classList.contains('opened-menu')) {
            animenu.classList.remove('opened-menu');
        } else {
            animenu.classList.add('opened-menu');
        }
    }
    function goToTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <>
        <nav id='anav' class='nav-animated'>
            <a onClick={openMenu} title="Glavni meni" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
            </a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/web">Web</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>
            <nav id="go-to-top" className="go-to-top show-up">
                <svg onClick={goToTop} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                    <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"></path>
                </svg>
            </nav>
            </>        
    );
}