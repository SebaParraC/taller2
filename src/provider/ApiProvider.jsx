import { useState, useEffect } from "react";
import { ApiContext } from "./ApiContext";
import { getPokemons } from "../services/apiService";

// Este componente se encarga de traer los Pokémon
// y compartirlos con el resto de la app.
export const ApiProvider = ({ children }) => {

    // Aquí guardo la lista de Pokémon.
    const [pokemons, setPokemons] = useState([]);

    // Función que trae los datos desde la API.
    const cargarPokemons = async () => {
        const datos = await getPokemons();
        setPokemons(datos);
    };

    // Cuando la app inicia, cargamos los Pokémon.
    useEffect(() => {
        cargarPokemons();
    }, []);

    return (
        <ApiContext.Provider value={{ pokemons, cargarDatos: cargarPokemons }}>
            {children}
        </ApiContext.Provider>
    );
};
