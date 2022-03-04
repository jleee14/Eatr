import React from "react";
import { Link } from "react-router-dom";

function Recipe({ result }) {
	return (
		<div className="recipe-container">
			<h3>{result.name}</h3>
		</div>
	);
}

export default Recipe;
