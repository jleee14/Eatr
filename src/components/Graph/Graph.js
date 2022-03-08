import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { isCompositeComponentWithType } from "react-dom/test-utils";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export default function Graph({ tasteData, index }) {
	const initialGraphState = {
		recipeName: "",
		ratings: "",
	};
	const [graphValue1, setGraphValue1] = useState(initialGraphState);
	const [graphValue2, setGraphValue2] = useState(initialGraphState);
	// const [ratingsArray, setRatingsArray] = useState([]);

	// function buildData(tasteData) {
	// 	if (ratingsArray.length === 0) {
	// 		for (let taste in tasteData.ratings) {
	// 			console.log("i am looping");
	// 			setRatingsArray((ratingsArray) => [
	// 				...ratingsArray,
	// 				tasteData.ratings[taste],
	// 			]);
	// 		}
	// 	} else {
	// 		setRatingsArray([]);
	// 		for (let taste in tasteData.ratings) {
	// 			console.log("i am overwriting");
	// 			setRatingsArray((ratingsArray) => [
	// 				...ratingsArray,
	// 				tasteData.ratings[taste],
	// 			]);
	// 		}
	// 	}
	// }
	function updateGraphData(tasteData, index) {
		if (index === 0) {
			setGraphValue1({
				...graphValue1,
				recipeName: tasteData.recipeName,
				ratings: tasteData.ratings,
			});
			console.log("set graphvalue1");
		} else if (index === 1) {
			setGraphValue2({
				...graphValue2,
				recipeName: tasteData.recipeName,
				ratings: tasteData.ratings,
			});
			console.log("set graphvalue2");
		} else {
			console.log("else");
			return;
		}
	}

	const data = {
		labels: ["Sweet", "Salty", "Rich/Umami", "Spicy", "Sour/Bitter"],
		datasets: [
			{
				label: graphValue1.recipeName,
				data: [
					graphValue1.ratings.sweet,
					graphValue1.ratings.salty,
					graphValue1.ratings.rich,
					graphValue1.ratings.spicy,
					graphValue1.ratings.sour,
				],
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: graphValue2.recipeName,
				data: [
					graphValue2.ratings.sweet,
					graphValue2.ratings.salty,
					graphValue2.ratings.rich,
					graphValue2.ratings.spicy,
					graphValue2.ratings.sour,
				],
				backgroundColor: "rgba(55, 99, 2, 0.2)",
				borderColor: "rgba(55, 99, 2, 1)",
				borderWidth: 1,
			},
			{
				label: "",
				data: [10, 0, 0, 0, 0],
				backgroundColor: "rgba(0, 0, 0, 0)",
				borderColor: "rgba(0, 0, 0, 0)",
				borderWidth: 1,
			},
		],
	};
	useEffect(() => {
		// buildData(tasteData);
		updateGraphData(tasteData, index);
		setGraphData(data);
	}, [tasteData]);

	const [graphData, setGraphData] = useState(data);

	return <Radar data={graphData} />;
}

// data.datasets

// recipeArr[i].ratings

// filter, get accurate array.

// for in Loops ==> get ratings
