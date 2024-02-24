import { PureComponent } from "react";

export class PokemonInfo extends PureComponent{

    state={
        pokemon:'',
        isLoading: 'false',
    }

    componentDidUpdate =(prevProps, prevState)=>{
        if(prevProps !== this.props.pokemonName) {
            this.setState({isLoading: true, pokemon: null})

            setTimeout(()=>{
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
            .then(res => res.json())
            .then(pokemon => {this.setState({pokemon, isLoading: false})})
            }, 1000)
            
        }

    }

    render(){

        const {pokemon} = this.state 

        return(
            <>
            {/* {isLoading.} */}
            {pokemon && <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
            </div>}
            </>
        )
    }
}