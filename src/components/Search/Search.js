import React, { useState, useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import "./Search.css";

function Search(props) {
	const initialState = {
		loading: false,
		result: null,
		error: "",
	};
	const [state, dispatch] = useReducer(apiStateReducer, initialState);
	const { loading, result, error } = state;
	const [results, setResults] = useState([]);

	const { term } = useParams();
	const [searchString, setSearchString] = useState(term);

	function apiStateReducer(state, action) {
		switch (action.type) {
			case "loading": {
				return { ...initialState, loading: true };
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

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getRecipes(searchString);
	}
	function getRecipes(searchString) {
		dispatch({ type: "loading" });
		const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&q=${searchString}`;
		fetch(url, {
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
						error: `No recipes found for ${searchString}. Please try another search!`,
					});
				} else if (res.status === 200) {
					return res.json();
				}
			})
			.then((data) => {
				console.log("logging data", data);
				// API does not return 404 error if no search queries found.
				if (data.count === 0 && searchString === undefined) {
					return dispatch({
						type: "error",
						error: "Please search for a recipe in the search box above!",
					});
				} else if (data.count === 0) {
					return dispatch({
						type: "error",
						error: `No recipes found for ${searchString}. Please try another search!`,
					});
				} else {
					dispatch({
						type: "success",
						data,
					});
				}
				// clear out compilation recipe results (results without instructions key)
				const resArray = data.results;
				const newRes = resArray.filter((recipe) => {
					if (recipe.instructions) return true;
				});
				setSearchString("");
				setResults(newRes);
				console.log(newRes);
			})
			.catch((err) => {
				dispatch({
					type: "error",
					error: "Oops, something went wrong! Please try again later.",
				});
				console.log(err);
			});
	}
	useEffect(() => {
		getRecipes(searchString);
	}, []);

	return (
		//  left below as 1 return instead of individual components to reduce need for further component nesting
		<div className="search-home-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleChange}
					value={searchString}
					required
				/>
				<button>Search</button>
			</form>
			<div className="link-container">
				{result &&
					results.map((recipe) => {
						return (
							<Link to={`../recipe/${recipe.id}`} key={recipe.id}>
								<Recipe recipe={recipe} key={recipe.id} />
							</Link>
						);
					})}
				{loading && "Loading results..."}
				{error && error}
			</div>
		</div>
	);
}

export default Search;
