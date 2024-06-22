import React from "react";
import "./Dashboard.css";
import Home from "./Home";
import Header from "./Header";
import { CompilerStoreProvider } from "./CompilerStore";

export default function Dashboard() {
	return (
		<div>
			<CompilerStoreProvider>
				<Header isCodeGroundArea={false} />
				<Home />
			</CompilerStoreProvider>
		</div>
	);
}
