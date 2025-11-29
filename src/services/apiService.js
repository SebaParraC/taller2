// Aquí guardo funciones que hablan con la API de Pokémons.
// Así mantengo el código ordenado y fácil de leer.

// Función para obtener la lista principal de Pokémon.
export const getPokemons = async () => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const datos = await respuesta.json();
    return datos.results; // devuelve nombres y URLs
};

// Función para obtener detalles de un Pokémon.
export const getPokemonDetails = async (url) => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
};
