import React from "react";
import ProblemArea from "./ProblemArea";
import CompilerArea from "./CompilerArea";
import "./CodeGround.css";
import { CompilerStoreProvider, useCompilerStore } from "./CompilerStore";

export default function CodeGround() {
	return (
		<div className="code-ground">
			<div className="problem-area">
				<ProblemArea questionNo={1} questionHeader="Question1" />
			</div>
			<div className="compiler-area">
				<CompilerStoreProvider>
					<CompilerArea />
				</CompilerStoreProvider>
			</div>
		</div>
	);
}
