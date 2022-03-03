import React from "react";

function Recipe({ result }) {
	return (
		<div className="recipe-container">
			<h3>{result.name}</h3>
		</div>
	);
}

export default RecipeDetails;
