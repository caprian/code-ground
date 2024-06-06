import React from "react";
import Button from "@mui/material/Button";

interface IHeaderButton {
	name: string;
	onClick: () => void;
	className?: string;
}

export default function HeaderButton(props: IHeaderButton) {
	const buttonClass = `btn ${props.className || "btn-default"}`;
	return (
		<div>
			<Button
				className={buttonClass}
				onClick={props.onClick}
				variant="contained">
				{props.name}
			</Button>
		</div>
	);
}
