import React, { useRef, useState } from "react";
import "./CompilerArea.css";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./Constants";
import OutputArea from "./OutputArea";

export default function CompilerArea() {
	const [language, setLanguage] = useState("java");
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
		setValue(CODE_SNIPPETS[language]);
		console.log(language);
	};

	return (
		<div>
			<div className="compiler-area-container">
				<LanguageSelector language={language} onSelect={onSelect} />
				<Editor
					language={language}
					theme={theme}
					height="50vh"
					defaultValue={CODE_SNIPPETS["java"]}
					value={value}
					onChange={handleEditorChange}
					onMount={handleEditorMount}
				/>
			</div>
			<div style={{ marginTop: 10 }}>
				<OutputArea language={language} editorRef={editorRef} />
			</div>
		</div>
	);
}
