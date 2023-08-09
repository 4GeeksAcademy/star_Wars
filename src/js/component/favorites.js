import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            {store.favorites.length === 0 ? (
                <span>(empty)</span>
            ) : (
                store.favorites.map((element, index) => {
                    return (
                        <li key={index}>
                            {element.name}
                            <div className="col-4">
                                <span>
                                    <i className="fa-solid fa-trash"
                                        onClick={() => {
                                            actions.deleteFavorite(index);
                                        }}></i>
                                </span>
                            </div>
                        </li>
                    );
                })
            )}
        </>
    );
};
