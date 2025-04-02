import "./App.css";
import Loader from './components/loader';
import PokemonProfile from "./components/pokemonProfile";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const {date, isLoading, isError} = useGetPokemonByNameQuery("ditto")

  if(isError){
    return <p> Error loading pokemon character</p>
  }
  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>REDUX</h1>
      </header>
      <PokemonProfile/>

    </div>
  );
}

export default App;
