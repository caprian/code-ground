import React from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { CircularProgress } from "@mui/material";

interface IRunButton {
	name: string;
	onClick: () => void;
	className?: string;
	isLoading: boolean;
}

export default function RunButton(props: IRunButton) {
	const buttonClass = `btn ${props.className || "btn-default"}`;
	return (
		<div>
			<Button
				title="Run"
				className={buttonClass}
				onClick={props.onClick}
				variant="contained">
				{props.isLoading ? (
					<CircularProgress style={{ color: "white" }} size={24} />
				) : (
					<PlayArrowIcon />
				)}
			</Button>
		</div>
	);
}
