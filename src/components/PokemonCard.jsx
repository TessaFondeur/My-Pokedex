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

// const pokemonList = [

//     {
//         name: "bulbasaur",
//         imgSrc:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//         name: "mew",
//     },
// ];

function PokemonCard(props) {
    console.log(props);
    return (<figure style={card}> {
        props.imgSrc ? (
            <img src={props.imgSrc} alt={props.name} />
        ) : (<p>???</p>)
    }



        <figcaption>{props.name}</figcaption>
    </figure>
    );
}

export default PokemonCard;