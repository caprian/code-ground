import React from "react";
import CodeGround from "../Components/CodeGround";
import Header from "../Components/Header";
import { CompilerStoreProvider } from "../Components/CompilerStore";

export default function HomePage() {
	return (
		<div>
			<CompilerStoreProvider>
				<Header isCodeGroundArea={true} />
				<CodeGround />
			</CompilerStoreProvider>
		</div>
	);
}
