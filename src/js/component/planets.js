import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = (props) => {
    const { store, actions } = useContext(Context);

    // Check if the planet is already a favorite
    const isFavorite = store.favorites.some(fav => fav.name === props.planet.name);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`} />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <Link
                    to={`/planet/${props.planet.uid}`}
                    className="btn btn-outline-primary">Learn more!
                </Link>
                <button className="btn btn-outline-warning ms-3"
                    onClick={() => {
                        isFavorite
                            ? actions.deleteFavorite(store.favorites.findIndex(fav => fav.name === props.planet.name))
                            : actions.setFavorite(props.planet);
                    }}>
                    <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
            </div>
        </div>
    );
};

export default Planets;
