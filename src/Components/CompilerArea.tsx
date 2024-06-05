import React, { useRef, useState } from "react";
import "./CompilerArea.css";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";

export default function CompilerArea() {
	const [language, setLanguage] = useState("");
	const [theme, setTheme] = useState("vs-dark");
	const [value, setValue] = useState("");
	const editorRef = useRef(null);

	const handleEditorChange = (newValue: string | undefined) => {
		if (newValue !== undefined) {
			setValue(newValue);
		}
	};

	const handleEditorMount = (editor: any) => {
		editorRef.current = editor;
		editor.focus();
		console.log(editor);
	};

	const onSelect = (language: string) => {
		setLanguage(language);
		console.log(language);
	};

	return (
		<div className="compiler-area-container">
			<LanguageSelector language={language} onSelect={onSelect} />
			<Editor
				language={language}
				theme={theme}
				height="50vh"
				defaultValue="// some comment"
				value={value}
				onChange={handleEditorChange}
				onMount={handleEditorMount}
			/>
		</div>
	);
}
