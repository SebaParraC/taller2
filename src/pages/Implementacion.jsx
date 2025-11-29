import { useContext, useState } from "react";
import { ApiContext } from "../provider/ApiContext";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import PokemonTable from "../components/PokemonTable";
import { getPokemonDetails } from "../services/apiService";

const Implementacion = () => {
    const { pokemons, cargarDatos } = useContext(ApiContext);

    // Guardamos el Pokémon seleccionado y sus detalles
    const [detalles, setDetalles] = useState(null);

    const navigate = useNavigate();

    // Cuando seleccionamos un Pokémon desde la tabla
    const obtenerDetalles = async (pokemon) => {
        const info = await getPokemonDetails(pokemon.url);
        setDetalles(info);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Implementación</h1>
            <p>Esta página muestra datos obtenidos desde la API de PokéAPI.</p>

            {/* Botón volver */}
            <Button
                label="Volver al Home"
                icon="pi pi-arrow-left"
                className="p-button-secondary p-button-sm"
                onClick={() => navigate("/")}
                style={{ marginRight: "10px" }}
            />

            {/* Botón recargar */}
            <Button
                label="Recargar Pokémons"
                icon="pi pi-refresh"
                className="p-button-sm"
                onClick={cargarDatos}
                style={{ marginLeft: "10px" }}
            />

            {/* Tabla separada en componente */}
            <PokemonTable lista={pokemons} onSelect={obtenerDetalles} />

            {/* Detalles del Pokémon seleccionado */}
            {detalles && (
                <div
                    style={{
                        marginTop: "2rem",
                        padding: "1.2rem",
                        border: "1px solid gray",
                        borderRadius: "10px",
                        width: "350px",
                    }}
                >
                    <h2 style={{ textTransform: "capitalize" }}>
                        {detalles.name}
                    </h2>

                    <img
                        src={detalles.sprites.front_default}
                        alt="pokemon"
                        style={{ width: "120px" }}
                    />

                    <p><strong>Altura:</strong> {detalles.height}</p>
                    <p><strong>Peso:</strong> {detalles.weight}</p>

                    <p><strong>Tipo(s):</strong></p>
                    <ul>
                        {detalles.types.map((t) => (
                            <li key={t.type.name}>{t.type.name}</li>
                        ))}
                    </ul>

                    <p><strong>Habilidades:</strong></p>
                    <ul>
                        {detalles.abilities.map((h) => (
                            <li key={h.ability.name}>{h.ability.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Implementacion;
