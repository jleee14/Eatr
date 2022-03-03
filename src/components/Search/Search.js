import React from "react";
import { Link } from "react-router-dom";

function Search(props) {
	return (
		<>
			<div>Search Placeholder</div>
			<Link to="/recipe/:id">
				<div className="recipe">Recipe</div>
			</Link>
		</>
	);
}

export default Search;
