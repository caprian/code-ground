import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

interface LanguageSelectorProps {
	language: string;
	onSelect: (language: string) => void;
}

export default function LanguageSelector({
	language,
	onSelect,
}: LanguageSelectorProps) {
	const LANGUAGE_VERSIONS = {
		javaScript: "18.15.0",
		java: "15.0.2",
	};

	const languages = Object.entries(LANGUAGE_VERSIONS);

	const handleChange = (event: SelectChangeEvent) => {
		onSelect(event.target.value as string);
	};

	return (
		<div>
			<InputLabel id="demo-simple-select-label">Select Language</InputLabel>
			<Select
				labelId="simple-select-label"
				id="simple-select"
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
