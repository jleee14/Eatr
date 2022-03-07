import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";
import RatingModal from "../RatingModal/RatingModal.js";

function RecipeDetails(props) {
	const initialReducerState = {
		loading: true,
		result: null,
		error: "",
	};
	const [state, dispatch] = useReducer(apiStateReducer, initialReducerState);
	const { loading, result, error } = state;

	function apiStateReducer(state, action) {
		switch (action.type) {
			case "loading": {
				return { ...initialReducerState, loading: true };
			}
			case "success": {
				return { ...state, loading: false, result: action.data };
			}
			case "error": {
				return { ...state, loading: false, error: action.error };
			}
			default: {
				return state;
			}
		}
	}

	const [recipe, setRecipe] = useState(null);
	const [instructions, setInstructions] = useState([]);
	const [ingredientSections, setIngredientSections] = useState([]);
	const [modalToggle, setModalToggle] = useState(false);
	const { id } = useParams();
	function modalVisible(event) {
		setModalToggle(!modalToggle);
	}
	useEffect(() => {
		fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "tasty.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_TASTY_KEY,
			},
		})
			.then((res) => {
				if (res.status === 404) {
					return dispatch({
						type: "error",
						error: `Please enter a valid recipe ID!`,
					});
				} else if (res.status === 200) {
					return res.json();
				}
			})
			.then((data) => {
				dispatch({
					type: "success",
				});
				console.log(data);
				setRecipe(data);
				setIngredientSections(data.sections);
				setInstructions(data.instructions);
			})
			.catch((err) => {
				dispatch({
					type: "error",
					error: "Oops, something went wrong! Please try again later.",
				});
				console.log(err);
			});
	}, []);
	if (loading) {
		return <div>"loading data"</div>;
	} else if (error) {
		return <div>{error}</div>;
	}
	return (
		<div className="recipe-details-container">
			<div className="name-details-container">
				<h2>{recipe?.name}</h2>
				{recipe?.total_time_minutes && (
					<p>Time to prepare: {recipe?.total_time_minutes} minutes</p>
				)}
				{recipe?.yields && <p>{recipe?.yields}</p>}
			</div>
			<div className="media-container">
				{recipe?.original_video_url ? (
					<video controls width="450">
						<source src={recipe?.original_video_url} type="video/mp4"></source>
					</video>
				) : (
					<img
						src={recipe?.thumbnail_url}
						alt={recipe?.name}
						id="recipe-image"
					/>
				)}
			</div>
			<div className="description-container">
				<p>{recipe?.description}</p>
			</div>
			<div className="ingredients-container">
				<h4>Ingredients</h4>
				{ingredientSections.map((ingredient) => {
					return (
						<ul key={ingredient.name}>
							<span>{ingredient.name}</span>

							{ingredient.components.map((item) => {
								return <li key={item.id}>{item.raw_text}</li>;
							})}
						</ul>
					);
				})}
			</div>
			<div className="instructions-container">
				<ol>
					{instructions.map((step) => {
						return <li key={step.id}>{step.display_text}</li>;
					})}
				</ol>
			</div>
			<button id="add-myrecipes" onClick={modalVisible}>
				Add to MyRecipes
			</button>
			{modalToggle && (
				<>
					<RatingModal
						recipe={recipe}
						modalToggle={modalToggle}
						modalVisible={modalVisible}
					/>
				</>
			)}
		</div>
	);
}

export default RecipeDetails;
