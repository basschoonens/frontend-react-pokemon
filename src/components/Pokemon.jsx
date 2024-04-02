import {useEffect, useState} from "react";
import axios from "axios";
import "./Pokemon.css";


export default function Pokemon({endpoint}) {

    const [pokemon, setPokemon] = useState({})


    useEffect(() => {
        async function fetchData() {

            try {
                const response = await axios.get(endpoint)
                console.log(response.data)
                setPokemon(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        void fetchData()

    }, [endpoint]);

    return (
        <>
            {Object.keys(pokemon).length > 0 &&
                <div className="single-pokemon-card">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p>{pokemon.moves.length}</p>
                    <p>{pokemon.weight}</p>
                    <ul>
                        {pokemon.abilities.map((ability, index) => {
                            return <li key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>}
        </>
    );
}
