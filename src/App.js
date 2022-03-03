import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

function App() {
	return (
		<>
			<nav className="header">
				<Header />
			</nav>
			<main>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/search/:query" element={<Search />} />
					<Route path="/recipe/:id" element={<RecipeDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
