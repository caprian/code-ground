import React from "react";
import ProblemArea from "./ProblemArea";
import CompilerArea from "./CompilerArea";
import "./CodeGround.css";
import {
	CompilerStoreProvider,
	useCompilerStoreContext,
} from "./CompilerStore";
import { Button } from "@mui/material";
import { chapters } from "./chapters";
import { useStore } from "zustand";
import RunButton from "./RunButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function CodeGround() {
	//const [chapter, setChapter] = useState<number>(1);
	const store = useCompilerStoreContext();
	const setChapter = store.getState().setChapter;
	const chapter = useStore(store, (state) => state.chapter);
	const editorRef = useStore(store, (state) => state.editorRef);

	const chaptersLength = Object.keys(chapters).length;
	const handleNextButtonClick = () => {
		setChapter(chapter + 1);
	};

	const handlePrevButtonClick = () => {
		setChapter(chapter - 1);
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
					disabled={chapter === 1}
					className="prev-btn">
					<NavigateBeforeIcon />
				</Button>
				<Button
					onClick={handleNextButtonClick}
					variant="contained"
					disabled={chapter === chaptersLength}
					className="next-btn">
					<NavigateNextIcon />
				</Button>
			</div>
		</div>
	);
}
