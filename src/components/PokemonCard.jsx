const card = {
    width: "500px",
    padding: "1rem",
    backgroundColor: "lightgreen",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
};

const pokemonList = [

    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[0];

    return <figure style={card}> {
        pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (<p>???</p>)
    }



        <figcaption>{pokemon.name}</figcaption>
    </figure>;
}

export default PokemonCard;