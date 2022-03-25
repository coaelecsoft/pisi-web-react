import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Web from "./web";
import Contact from "./contact";

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
