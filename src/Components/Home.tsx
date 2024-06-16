import React from "react";
import "./Home.css";
import SignInDialog from "./SignInDialog";
import { useCompilerStoreContext } from "./CompilerStore";
import { useStore } from "zustand";
import SignUpDialog from "./SignUpDialog";

export default function Home() {
	const store = useCompilerStoreContext();
	const openSignInDialog = useStore(store, (state) => state.openSignInDialog);
	const openSignUpDialog = useStore(store, (state) => state.openSignUpDialog);

	return (
		<section className="home-contents">
			<div className="home-container">
				<div className="featured-courses">Featured Java Course</div>
				{openSignInDialog && <SignInDialog />}
				{openSignUpDialog && <SignUpDialog />}
			</div>
		</section>
	);
}
