import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Character = () => {
    const params = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacter(params.characterId);
    }, []);

    return (
        <div className="col-12">
            {store.character ? (
                <div className="row">
                    <div className="col-md-4 col-sm-2">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`}style={{ marginLeft: '20px' }}/>
                    </div>
                    <div className="card-body col-md-8" style={{ marginLeft: '-150px' }}>
                        <h5 className="card-title">{store.character.name}</h5>
                        <ul>
                            <li>Birth year: {store.character.birth_year}</li>
                            <li>Height: {store.character.height}</li>
                            <li>Mass: {store.character.mass}</li>
                            <li>Gender: {store.character.gender}</li>
                            <li>Hair color: {store.character.hair_color}</li>
                            <li>Skin color: {store.character.skin_color}</li>
                            <li>Eye color: {store.character.eye_color}</li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
