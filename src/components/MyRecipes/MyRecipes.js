import React, { useState, useEffect } from "react";
import "./MyRecipes.css";

function MyRecipes(props) {
	const [recipeArr, setRecipeArr] = useState([]);
	// const [recipe, setRecipe] = useState();
	// use function to fetch data, set null for savedRecipe.
	const [savedRecipes, setSavedRecipes] = useState(() => {
		for (let recipe in localStorage) {
			const object = localStorage.getItem(recipe);
			const newObject = JSON.parse(object);
			console.log(newObject);
			setRecipeArr((recipeArr) => [newObject, ...recipeArr]);
			console.log(recipeArr);
		}
		return recipeArr;
	});
	console.log(savedRecipes);
	// function retrieveRecipes(event) {
	// 	for (recipe in window.localStorage) {
	// 		JSON.parse(recipe);
	// 		setRecipe(recipe);
	// 		setSavedRceipes(...savedRecipes, recipe);
	// 	}
	// }
	// useEffect(() => {
	// 	retrieveRecipes()
	// }, [[add in recipe array]]);
	// look up cleanup function for useEffect
	return (
		<div className="myrecipes-container">
			<button></button>
			<div className="savedrecipes-container">Placeholder</div>
			<div className="graph-container">Graph</div>
		</div>
	);
}

export default MyRecipes;
