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
				<p>{chapterData.description}</p>
				<p className="problem-area-example">
					<p>{chapterData.exercise.title}</p>
					<p>{chapterData.exercise.description}</p>
					<pre>
						<code className="code-block">
							{chapterData.exercise.code.initial}
						</code>
						<code className="code-block">
							{chapterData.exercise.code.solution}
						</code>
					</pre>
					<p>{chapterData.exercise.instructions}</p>
					<p>{chapterData.exercise.hints}</p>
				</p>
			</div>
		</div>
	);
}
