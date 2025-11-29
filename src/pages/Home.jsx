import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Taller 2 – React + API Externa</h1>

            <p>
                Este proyecto muestra cómo consumir la API de PokéAPI usando React,
                PrimeReact y un Provider para manejar datos globales.
            </p>

            <h3>Integrantes:</h3>
            <ul>
                <li>Sebastián Parra</li>
                <li>Patricio Oyarzo</li>
            </ul>

            {/* Botón para ir a la implementación */}
            <Link to="/implementacion">
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Ir a la Implementación
                </button>
            </Link>
        </div>
    );
};

export default Home;
