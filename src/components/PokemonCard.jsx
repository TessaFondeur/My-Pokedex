import PropTypes from "prop-types";

// const card = {
//     width: "500px",
//     padding: "1rem",
//     backgroundColor: "lightgreen",
//     borderRadius: "5px",
//     boxShadow: "0px 0px 5px gray",
//     color: "white",
//     fontSize: "1.6rem",
//     textAlign: "center",
//     textShadow: "0px 0px 5px gray",
// };

function PokemonCard(props) {
    console.log(props);
    return (<figure> {
        props.imgSrc ? (
            <img src={props.imgSrc} alt={props.name} />
        ) : (<p>???</p>)
    }
        <figcaption>{props.name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}

export default PokemonCard;