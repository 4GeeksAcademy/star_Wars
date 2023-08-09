const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],

			character: null,
			planet: null,

			favorites: [],

		},
		actions: {

			colorChange: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {

				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((res) => res.json())
					.then((response) => {
						console.log(response);
						setStore({ characters: response.results })
					});
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then((response) => {
						console.log(response);
						const planetsStartingFromSecond = response.results.slice(1);
						setStore({ planets: planetsStartingFromSecond });
					});
			},


			getCharacter: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then((response) => {
						console.log(response);
						setStore({ character: response.result.properties })
					});
			},

			getPlanet: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then((response) => {
						console.log(response);
						setStore({ planet: response.result.properties })
					});
			},


			setFavorite: (element) => {
				const store = getStore();
				if (!store.favorites.includes(element)) {
					setStore({ favorites: [...store.favorites, element] })
				}

			},

			deleteFavorite: (index) => {
				const store = getStore();
				const filtered = store.favorites.filter((_, currentIndex) => currentIndex !== index);
				setStore({ favorites: filtered });
			}


		},
	};
};

export default getState;
