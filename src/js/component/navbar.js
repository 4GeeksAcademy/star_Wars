import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="navbar_img ms-5" src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-black-and-white.png" width={100} height={100}></img>
			</Link>
			<div class="dropdown me-5 pe-5">
				<button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos ({store.favorites.length})
				</button>
				<ul className="dropdown-menu">
					{store.favorites.length === 0 ? (
						<li>(empty)</li>
					) : (
						store.favorites.map((element, index) => {
							return (
								<li key={index}>
									{element.name}
									<div className="col-2">
										<span>
											<i className="fas fa-trash-alt"
												onClick={(event) => {
													event.stopPropagation(); 
													actions.deleteFavorite(index);
												}}></i>
										</span>
									</div>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</nav>
	);
};
