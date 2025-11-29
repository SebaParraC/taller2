import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Implementacion from "../pages/Implementacion";

// Este archivo define las rutas o "pestañas" de la app.
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/implementacion" element={<Implementacion />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
