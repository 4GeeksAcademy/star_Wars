import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

const insertedData = Inserted => {
	const updateStore = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.loadCharacters();
			state.actions.loadPlanets();
		}, []);

		return (
			<Context.Provider value={state}>
				<Inserted {...props} />
			</Context.Provider>
		);
	};
	return updateStore;
};

export default insertedData;
