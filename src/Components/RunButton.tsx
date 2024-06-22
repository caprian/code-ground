import React from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { CircularProgress } from "@mui/material";
import { useCompilerStoreContext } from "./CompilerStore";
import "./RunButton.css";

interface IRunButton {
	name: string;
	className?: string;
	editorRef: React.RefObject<any>;
}

export default function RunButton(props: IRunButton) {
	const buttonClass = `btn ${props.className || "btn-default"}`;
	const store = useCompilerStoreContext();
	const { runCode, isLoading } = store.getState();
	const setCode = store.getState().setCode;

	const onRunClick = async () => {
		const sourceCode = props.editorRef.current?.getValue();
		if (!sourceCode) return;
		setCode(sourceCode);
		await runCode();
	};
	return (
		<div className="btn-run">
			<Button
				title="Run"
				className={buttonClass}
				onClick={isLoading ? undefined : onRunClick} // disable button while running
				//disabled={isLoading}
				variant="contained">
				{isLoading ? (
					<CircularProgress style={{ color: "white" }} size={24} />
				) : (
					<PlayArrowIcon />
				)}
			</Button>
		</div>
	);
}
