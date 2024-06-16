import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useCompilerStoreContext } from "./CompilerStore";
import { Button } from "@mui/material";
import { useStore } from "zustand";
import CloseIcon from "@mui/icons-material/Close";
import "./SignInDialog.css";

export default function SignInDialog() {
	const store = useCompilerStoreContext();
	const openSignInDialog = useStore(store, (state) => state.openSignInDialog);
	const SetOpenSignInDialog = store.getState().SetOpenSignInDialog;
	const SetUserLogged = store.getState().setUserLogged;

	const handleClose = () => {
		SetOpenSignInDialog(false);
	};

	const handleLogIn = () => {
		SetUserLogged(true);
		SetOpenSignInDialog(false);
	};
	return (
		<div className="signin-dialog_container">
			<Dialog
				className="signin-dialog"
				style={{ alignItems: "center" }}
				onClose={handleClose}
				open={openSignInDialog}>
				<CloseIcon className="signin-close_btn" onClick={handleClose} />
				<form className="signin-form">
					<div className="signin-header">
						<DialogTitle className="signin-title">Log In</DialogTitle>
					</div>
					<div className="signin-form_container">
						<label className="signin-label" htmlFor="email">
							Email
						</label>

						<input
							className="signin-input"
							type="email"
							name="email"
							id="email"
						/>

						<label className="signin-label">Password</label>
						<input className="signin-input" type="password" />
					</div>
					<div className="dialog-checkbox_container">
						<input
							className="signin-checkbox"
							type="checkbox"
							value=""
							id="form2Example3cg"
						/>
						<label className="signin-checkbox_label" htmlFor="form2Example3g">
							Remember Me !
						</label>
					</div>
					<Button
						onClick={handleLogIn}
						variant="contained"
						className="signin-confirm_btn">
						Log In
					</Button>
				</form>
			</Dialog>
		</div>
	);
}
