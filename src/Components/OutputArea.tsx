import React, { useState } from "react";
import RunButton from "./RunButton";
import TextField from "@mui/material/TextField";
import { executeCode } from "./api";
import "./OutputArea.css";

interface OutputAreaProps {
	editorRef: React.RefObject<any>;
	language: string;
}

export default function OutputArea({ editorRef, language }: OutputAreaProps) {
	const [output, setOutput] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onRunClick = async () => {
		const sourceCode = editorRef.current.getValue();
		if (!sourceCode) return;
		try {
			setIsLoading(true);
			const { run: result } = await executeCode(language, sourceCode);
			setOutput(result.output);
			console.log("Run button clicked!");
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="outputarea-container">
			<div className="btn-run">
				<RunButton
					isLoading={isLoading}
					className="run-btn"
					name="Run"
					onClick={onRunClick}
				/>
			</div>
			<TextField
				className="readonly-output-area"
				rows="5"
				size="medium"
				label="Readonly"
				variant="filled"
				defaultValue="click on run"
				value={output}
				disabled={true}
				fullWidth={true}
				color="primary"
				multiline={true}
				// helperText={isLoading ? <CircularProgress size={20} /> : null}
			/>
		</div>
	);
}
