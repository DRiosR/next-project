import { getPokemon } from "../lib/api";
import PokemonList from "../components/Pokemonlist";

export default async function PokemonPage() {
    const pokemonList = await getPokemon(); // Obtener Pokémon de la API

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Lista de Pokémon</h1>
            <PokemonList pokemonList={pokemonList || []} /> {/* Evita undefined */}
        </main>
    );
}
