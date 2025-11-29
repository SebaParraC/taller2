import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "./provider/ApiProvider";

// Estilos básicos de PrimeReact
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

// Aquí arranca la aplicación y envuelvo todo con el provider,
// para compartir los datos de los Pokémon.
ReactDOM.createRoot(document.getElementById("root")).render(
    <ApiProvider>
        <App />
    </ApiProvider>
);
