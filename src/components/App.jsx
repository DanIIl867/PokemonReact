import { PureComponent } from "react";
import { PokemonForm } from "./PokemonForm/PokemonForm";
import { PokemonInfo } from "./PokemonInfo/PokemonInfo"

export class App extends PureComponent{ 

  state = {
    pokemonName: '',
  }

//   async componentDidMount(){
//     try{
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//       const pokemon = await res.json()
//       this.setState({pokemon})
//     } catch (error) {
//   }
// }

onNameChange = (name) => {
  this.setState({
    pokemonName:name
  })
}

  render(){
    return (
      <div>
        <PokemonForm onNameChange={this.onNameChange}/>
        <PokemonInfo pokemonName={this.state.pokemonName}/>
      </div>
    );
  }
};
