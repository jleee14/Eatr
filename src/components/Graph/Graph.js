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

export default function Graph({ tasteData, index, setCount }) {
	const initialGraphState = {
		recipeName: "",
		ratings: "",
	};
	const [graphValue1, setGraphValue1] = useState(initialGraphState);
	const [graphValue2, setGraphValue2] = useState(initialGraphState);

	function updateGraphData(tasteData, index) {
		if (index === 0) {
			setGraphValue1({
				...graphValue1,
				recipeName: tasteData.recipeName,
				ratings: tasteData.ratings,
			});
		} else if (index === 1) {
			setGraphValue2({
				...graphValue2,
				recipeName: tasteData.recipeName,
				ratings: tasteData.ratings,
			});
		} else {
			return;
		}
	}

	function clearGraphData() {
		setGraphValue1(initialGraphState);
		setGraphValue2(initialGraphState);
		setCount(-1);
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
				backgroundColor: "rgba(81, 171, 36, 0.2)",
				borderColor: "rgba(81, 171, 36, 1)",
				borderWidth: 1,
			},
			// empty dataset to keep the scale of the radar axes at 10
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
		updateGraphData(tasteData, index);
		setGraphData(data);
	}, [tasteData, index]);

	const [graphData, setGraphData] = useState(data);

	return (
		<>
			<Radar data={graphData} />
			<button id="clear-recipes" onClick={clearGraphData}>
				Clear all recipes
			</button>
		</>
	);
}
