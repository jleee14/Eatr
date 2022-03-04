import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

function Search(props) {
	const [results, setResults] = useState();

	const { term } = useParams();
	const [searchString, setSearchString] = useState(term);

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getRecipes(searchString);
	}
	function getRecipes(searchString) {
		const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&q=${searchString}`;
		fetch(url, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "tasty.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_TASTY_KEY,
			},
		})
			.then((res) => {
				return res.json();
				// console.log(res);
			})
			.then((data) => {
				// clear out compilation recipe results (results without instructions key)
				const resArray = data.results;
				const newRes = resArray.filter((recipe) => {
					if (recipe.instructions) return true;
				});
				setSearchString("");
				setResults(newRes);
			})
			.catch(console.error);
	}
	useEffect(() => {
		getRecipes(searchString);
	}, []);
	if (!results) {
		return <p>loading...</p>;
	} else {
		return (
			<>
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
					{results.map((result) => {
						return (
							<Link to={`../recipe/${result.id}`} key={result.id}>
								<Recipe result={result} key={result.id} />
							</Link>
						);
					})}
				</div>
			</>
		);
	}
}

export default Search;
