// src/lib/api.js

export async function getPokemon() {
    try {
        // Hacemos la solicitud a la API de Pokémon con un límite de 151 Pokémon
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

        // Verificamos si la respuesta fue exitosa
        if (!res.ok) throw new Error("Network response was not ok");

        // Convertimos la respuesta a formato JSON
        const data = await res.json();

        // Devolvemos la lista de Pokémon con su ID y URL de la imagen
        return data.results.map((pokemon, index) => ({
            id: index + 1, // Generamos un ID basado en el índice
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`, // URL de la imagen
        }));
    } catch (err) {
        console.error("Error al obtener los Pokémon:", err);
        return []; // Si hay un error, devolvemos un array vacío
    }
}
