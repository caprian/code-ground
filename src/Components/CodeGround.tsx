import React, { useState } from "react";
import ProblemArea from "./ProblemArea";
import CompilerArea from "./CompilerArea";
import "./CodeGround.css";
import { CompilerStoreProvider, useCompilerStore } from "./CompilerStore";
import { Button } from "@mui/material";

export default function CodeGround() {
	const [chapter, setChapter] = useState<number>(1);
	const handleNextButtonClick = () => {
		if (chapter >= 1 && chapter != 2) {
			setChapter(chapter + 1);
		}
	};

	const handlePrevButtonClick = () => {
		if (chapter > 1) {
			setChapter(chapter - 1);
		}
	};
	return (
		<div className="code-ground_container">
			<div className="code-ground">
				<div className="problem-area">
					<ProblemArea chapter={chapter} />
				</div>
				<div className="compiler-area">
					<CompilerStoreProvider>
						<CompilerArea />
					</CompilerStoreProvider>
				</div>
			</div>
			<div className="button-container">
				<Button
					onClick={handlePrevButtonClick}
					variant="contained"
					className="prev-btn">
					Prev Chapter
				</Button>
				<Button
					onClick={handleNextButtonClick}
					variant="contained"
					className="next-btn">
					Next Chapter
				</Button>
			</div>
		</div>
	);
}
