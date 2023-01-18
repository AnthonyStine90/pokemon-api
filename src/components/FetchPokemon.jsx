import { useState } from "react";

const FetchPokemon = () => {
    const [allPokemon, setAllPokemon] = useState();

    const getPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")  // api call. set limit to 50
            .then(res => {
                console.log(res); // checking if we are getting a response from the api
                return res.json() // another async function
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setAllPokemon(jsonResponse.results)
                // res.json returns an array of objects marked results: [array of pokemon]. want to set results in your variable to access later


            })
            .catch(err => console.log(err))
    }

    return (

        <div className="container">
            <button onClick={getPokemon} className='btn btn-secondary mt-5'>Fetch Pokemon</button>
            <div className="pokemon-list mt-5">
                <ul>
                    {
                        allPokemon &&
                        allPokemon.map((pokemon, index) => {
                            return (
                                <li key={index}>{pokemon.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default FetchPokemon