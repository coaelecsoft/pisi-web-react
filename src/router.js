import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Nav from './nav'
import Home from './home';
import About from './about';
import Web from './web';
import Contact from './contact';
//import Maps from './maps';
import './App.css'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/web" element={<Web />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
