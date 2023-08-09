import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = (props) => {
    const { store, actions } = useContext(Context);

    // Check if the character is already a favorite
    const isFavorite = store.favorites.some(fav => fav.name === props.character.name);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}/>
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <p>Gender: {props.character.gender}</p>
                <Link
                    to={`/character/${props.character.uid}`}
                    className="btn btn-outline-primary">Learn more!
                </Link>
                <button className="btn btn-outline-warning ms-3"
                    onClick={() => {
                        isFavorite
                            ? actions.deleteFavorite(store.favorites.findIndex(fav => fav.name === props.character.name))
                            : actions.setFavorite(props.character);
                    }}>
                    <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
            </div>
        </div>
    );
};

export default Characters;
