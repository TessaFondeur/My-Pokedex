import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;