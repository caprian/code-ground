import React, { useState } from "react";
import "./CompilerArea.css";
import Editor from "@monaco-editor/react";

export default function CompilerArea() {
	const [language, setLanguage] = useState<string>("javaScript");
	const [theme, setTheme] = useState<string>("vs-dark");
	return (
		<div className="compiler-area-container">
			<div className="compiler-header">CompilerHeader</div>
			<div className="code-header">CodeHeader</div>
			<Editor
				language={language}
				theme={theme}
				height="90vh"
				defaultValue="// some comment"
			/>
		</div>
	);
}
