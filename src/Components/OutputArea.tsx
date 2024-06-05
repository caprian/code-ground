import { Button } from "@mui/material";
import React from "react";

export default function OutputArea() {
	const onRunClick = async () => {
		// const sourcsCode = editorRef.current.getValue();
		// if(!sourcsCode){
		//     return;
		// }
	};
	return (
		<div style={{ height: "100px" }}>
			<Button onClick={() => onRunClick}> Run</Button>
			<textarea></textarea>
		</div>
	);
}
