import './App.css';
import Pokemon from './components/Pokemon.jsx';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [pokemon, setPokemon] = useState([])
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        const controller = new AbortController();

        async function fetchData() {
            setLoading(true)
            setError(null)

            try {
                const response = await axios.get(endpoint, {signal: controller.signal})
                console.log(response.data)
                setPokemon(response.data)
            } catch (error) {
                setError(error)
                console.error('The request is canceled')
            }

            setLoading(false)
        }

        void fetchData()

        return () => {
            controller.abort()
        }

    }, [endpoint]);

    return (
        <>
            <div className="page-container">
                {loading && <div>Loading...</div>}
                <h1>Gotta catch em all!</h1>
                <button type="button" disabled={!pokemon.previous} onClick={() => setEndpoint(pokemon.previous)}>Vorige</button>
                <button type="button" disabled={!pokemon.next} onClick={() => setEndpoint(pokemon.next)}>Volgende</button>
                <div className="pokedeck">
                    <Pokemon endpoint='https://pokeapi.co/api/v2/pokemon/ditto'/>

                    {pokemon.results && pokemon.results.map((poke) => {
                        return <Pokemon key={poke.name} endpoint={poke.url}/>
                    })}
                    {error && <div>{error}</div>}
                </div>
            </div>
        </>
    )
}

export default App
