import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<>
			<h3>Placeholder Header</h3>
			<div>
				<Link to="/home">Home</Link>
			</div>
			<div>
				<Link to="/search">Search</Link>
			</div>
		</>
	);
}

export default Header;
