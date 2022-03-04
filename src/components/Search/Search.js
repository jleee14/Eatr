import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

function Search(props) {
	const [results, setResults] = useState();
	const [searchString, setSearchString] = useState("");

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getRecipes(searchString);
	}
	function getRecipes(searchString) {
		const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchString}`;
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
				setResults(data.results);
				setSearchString("");
				console.log(results);
			})
			.catch(console.error);
	}
	useEffect(() => {
		getRecipes(searchString);
	}, []);
	if (!results) {
		return <p>loading...</p>;
	}
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
						<Link to={`recipe/${result.id}`}>
							<Recipe result={result} key={result.id} />
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Search;
