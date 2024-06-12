import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import "./LanguageSelector.css";

interface LanguageSelectorProps {
	language: string;
	onSelect: (language: string) => void;
}

export default function LanguageSelector({
	language,
	onSelect,
}: LanguageSelectorProps) {
	const LANGUAGE_VERSIONS = {
		javascript: "18.15.0",
		java: "15.0.2",
	};

	const languages = Object.entries(LANGUAGE_VERSIONS);

	const handleChange = (event: SelectChangeEvent) => {
		onSelect(event.target.value as string);
	};

	return (
		<div>
			<Select
				disabled={true}
				labelId="simple-select-label"
				id="simple-select"
				className="language-selector"
				value={language}
				label="Select Language"
				onChange={handleChange}>
				{languages.map(([language, version]) => (
					<MenuItem key={language} value={language}>
						{language}
					</MenuItem>
				))}
			</Select>
		</div>
	);
}
