

export default function Home() {

    async function fetchPokemon() {
        const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await pokemon.json()
        console.log(data)
    }

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the world of Pokemon!</p>
            <p>Click the button below to fetch a Pokemon!</p>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <h1 id={"pokemon-name"}>{fetchPokemon().name}</h1>
        </div>
    )
}