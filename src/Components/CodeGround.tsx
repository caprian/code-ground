import React from "react";
import ProblemArea from "./ProblemArea";
import CompilerArea from "./CompilerArea";
import "./CodeGround.css";
import { CompilerStoreProvider, useCompilerStore } from "./CompilerStore";
import { Button } from "@mui/material";

export default function CodeGround() {
	return (
		<div className="code-ground_container">
			<div className="code-ground">
				<div className="problem-area">
					<ProblemArea />
				</div>
				<div className="compiler-area">
					<CompilerStoreProvider>
						<CompilerArea />
					</CompilerStoreProvider>
				</div>
				<Button variant="contained" className="next-btn">
					Next Chapter
				</Button>
			</div>
		</div>
	);
}
