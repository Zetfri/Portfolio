import React, {useEffect} from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "./component/page/home.jsx";
import About from "./component/page/about.jsx";
import Contact from "./component/page/contact.jsx";
import Portfolio from "./component/page/portfolio.jsx";
import Sckils from "./component/page/sckils.jsx";
import Nav from "./component/page/nav.jsx";
import "./App.css"
import aos from "aos"
import Coffee from './component/sites/cofee.jsx';
function App(props) {
    useEffect(() => {
        aos.init()

    })
    return (
        <div >
            <Nav/>
<Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/About"  element={<About/>} />
    <Route path="/Contact"  element={<Contact/>} />
    <Route path="/Portfolio"  element={<Portfolio/>} />
    <Route path="/Sckils"  element={<Sckils/>} />
    <Route path="/Coffee" element={<Coffee/>} />
</Routes>

        </div>
    );
}

export default App;