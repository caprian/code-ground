import create, { StoreApi } from "zustand";
import { createContext, useContext } from "react";

interface ICompilerStore {
	code: string;
	output: string;
	theme: string;
	setCode: (code: string) => void;
	setOutput: (output: string) => void;
	setTheme: (theme: string) => void;
	runCode: () => Promise<void>;
}

const compilerStore = create<ICompilerStore>((set) => ({
	code: "// some comment",
	output: "",
	theme: "vs-dark",
	setCode: (code) => set((state) => ({ ...state, code })),
	setOutput: (output) => set((state) => ({ ...state, output })),
	setTheme: (theme) => set((state) => ({ ...state, theme })),
	runCode: async () => {
		const { code } = compilerStore.getState();
		const language_id = 62; // Language ID for Java in Judge0

		const response = await fetch(
			"https://api.judge0.com/submissions?base64_encoded=false&wait=true",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					source_code: code,
					language_id: language_id,
				}),
			}
		);

		const resultData = await response.json();

		set((state) => ({
			...state,
			output: resultData.stdout || resultData.stderr || "Error executing code",
		}));
	},
}));

const CompilerStoreContext = createContext<StoreApi<ICompilerStore> | null>(
	null
);

export const useCompilerStore = () => useContext(CompilerStoreContext);

export const CompilerStoreProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<CompilerStoreContext.Provider value={compilerStore}>
			{children}
		</CompilerStoreContext.Provider>
	);
};
