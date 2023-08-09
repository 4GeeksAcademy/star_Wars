import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Characters from "../component/characters";
import Planets from "../component/planets";

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container">
			<div className="row mb-4">
				<h2 className="text-danger">Characters</h2>
				<div className="row text-center flex-row flex-nowrap overflow-auto">
					{store.characters.map((character, index) => {
						return (
							<div className="col-12 col-md-3" key={index}>
								<Characters character={character} />
							</div>
						)
					})}
				</div>
			</div>
			<div className="row mb-4">
				<h2 className="text-danger">Planets</h2>
				<div className="row text-center flex-row flex-nowrap overflow-auto">
					{store.planets.map((planet, index) => {
						return (
							<div className="col-12 col-md-3" key={index}>
								<Planets planet={planet} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
};
