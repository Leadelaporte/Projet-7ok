import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Logement from "./pages/Logement";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    );
};
export default App;
