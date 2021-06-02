import { useEffect, useState } from "react"


function App() {

  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = res.json()
  
    setLoadMore(data.next)
  
    function createPokemonObject(result){
      result.forEach(async (pokemon) =>{
        await console.log(pokemon)
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.name}')
       const data = await res.json()

       //allPokemons.push(data)
       setAllPokemons(currentList => [...currentList, data])
       await console.log(allPokemons)
    })
    }
   
    createPokemonObject(data.result)
  
  }

  useEffect(() =>{
    getAllPokemons()
    }, [])

  return (
    <div className="app-container">
      <h1>Pokemon App</h1>
      <div className="pokemon-container">
      <div className="all-container">
        

      </div>
      <button className="load-more">load-more</button>
      </div>
    </div>
  );
}

export default App;