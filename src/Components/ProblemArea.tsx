import React from "react";
import "./ProblemArea.css";
import { getChapters } from "./chapters";

interface IProblemArea {
	questionNo?: number;
	questionHeader?: string;
	question?: string;
	examples?: string;
	chapter: number;
}

export default function ProblemArea(props: IProblemArea) {
	const chapterData = getChapters(props.chapter);
	return (
		<div className="problem-area-container">
			<div className="problem-area-header">{chapterData.title}</div>
			<div className="problem-area-example">
				<div>{chapterData.description}</div>
				<div className="problem-area-example">
					<div>{chapterData.exercise.title}</div>
					<div>{chapterData.exercise.description}</div>
					<pre>
						<code className="code-block">
							{chapterData.exercise.code.initial}
						</code>
						<code className="code-block">
							{chapterData.exercise.code.solution}
						</code>
					</pre>
					<div>{chapterData.exercise.instructions}</div>
					<div>{chapterData.exercise.hints}</div>
				</div>
			</div>
		</div>
	);
}
