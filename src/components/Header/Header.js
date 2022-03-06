import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<>
			<div className="logo-bar">
				<span id="logo">EATR | </span>
				<span id="blurb">Powered by Tasty API</span>
			</div>
			<div className="second-bar">
				<div>
					<Link to="/home">Home</Link>
				</div>
				<div>
					<Link to="/search">Search</Link>
				</div>
				<div>
					<Link to="/myrecipes">MyRecipes</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
