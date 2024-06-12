import React, { useState } from "react";
import "./ProblemArea.css";
import { chapter1, chapter2 } from "./chapters";

interface IProblemArea {
	questionNo?: number;
	questionHeader?: string;
	question?: string;
	examples?: string;
}

export default function ProblemArea(props: IProblemArea) {
	const chapter1Data = chapter1();
	return (
		<div className="problem-area-container">
			<div className="problem-area-header">{chapter1Data.title}</div>
			<div className="problem-area-example">
				<p>{chapter1Data.description}</p>
				<p className="problem-area-example">
					<p>{chapter1Data.exercise.title}</p>
					<p>{chapter1Data.exercise.description}</p>
					<p>{chapter1Data.exercise.code.initial}</p>
					<p>{chapter1Data.exercise.code.solution}</p>
					<p>{chapter1Data.exercise.instructions}</p>
					<p>{chapter1Data.exercise.hints}</p>
				</p>
			</div>
		</div>
	);
}
