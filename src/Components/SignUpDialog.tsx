import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useCompilerStoreContext } from "./CompilerStore";
import { Button } from "@mui/material";
import { useStore } from "zustand";
import CloseIcon from "@mui/icons-material/Close";
import "./SignUpDialog.css";

export default function SignUpDialog() {
	const store = useCompilerStoreContext();
	const openSignUpDialog = useStore(store, (state) => state.openSignUpDialog);
	const SetOpenSignUpDialog = store.getState().SetOpenSignUpDialog;
	const SetUserLogged = store.getState().setUserLogged;

	const handleClose = () => {
		SetOpenSignUpDialog(false);
	};

	const handleSignUp = (e: any) => {
		e.preventDefault();
		SetUserLogged(true);
		SetOpenSignUpDialog(false);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleSignUp(e);
	};
	return (
		<div className="signup-dialog_container">
			<Dialog
				style={{ alignItems: "center" }}
				className="signup-dialog"
				onClose={handleClose}
				open={openSignUpDialog}>
				<CloseIcon className="signup-close_btn" onClick={handleClose} />
				<form onSubmit={handleSubmit} className="signup-form">
					<div className="signup-header">
						<DialogTitle className="signup-title">Register</DialogTitle>
					</div>

					<div className="signup-form_container">
						<label className="signup-label" htmlFor="email">
							Email
						</label>

						<input
							className="signup-input"
							type="email"
							name="email"
							id="email"
							required
						/>

						<label className="signup-label">Password</label>
						<input className="signup-input" type="password" required />

						<label className="signup-label">Re-Enter Password</label>
						<input className="signup-input" type="password" required />
					</div>
					<div className="dialog-checkbox_container">
						<input
							className="signup-checkbox"
							type="checkbox"
							value=""
							id="form2Example3cg"
							required
						/>
						<label className="signup-checkbox_label" htmlFor="form2Example3g">
							I agree all statements in{" "}
							<a href="#!" className="text-body">
								<u>Terms of service</u>
							</a>
						</label>
					</div>
					<Button
						onClick={handleSignUp}
						variant="contained"
						className="signup-confirm_btn">
						Sign Up
					</Button>
				</form>
			</Dialog>
		</div>
	);
}
