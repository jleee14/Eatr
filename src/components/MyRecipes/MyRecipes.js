import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyRecipes.css";
import Recipe from "../Recipe/Recipe";
import Graph from "../Graph/Graph";

function MyRecipes(props) {
	const [recipeArr, setRecipeArr] = useState([]);
	// const [recipe, setRecipe] = useState();
	function retrieveRecipes(event) {
		for (let recipe in localStorage) {
			const object = localStorage.getItem(recipe);
			const newObject = JSON.parse(object);
			setRecipeArr((recipeArr) => [...recipeArr, newObject]);
		}
	}
	useEffect(() => {
		retrieveRecipes();
	}, []);
	// look up cleanup function for useEffect
	return (
		<div className="myrecipes-container">
			<div className="link-container">
				{/* for loop returns null values into state, filter necessary to filter them out */}
				{recipeArr
					.filter((fullRecipe) => fullRecipe)
					.map((recipe) => {
						return (
							<Link to={`../recipe/${recipe.id}`} key={recipe.id}>
								<Recipe recipe={recipe} key={recipe.id} />
							</Link>
						);
					})}
			</div>
			<div className="graph-container">
				<Graph />
			</div>
		</div>
	);
}

export default MyRecipes;
