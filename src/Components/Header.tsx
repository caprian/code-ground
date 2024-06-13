import React from "react";
import "./Header.css";
import javalogo from "../Images/javalogo.jpg";
import { Button } from "@mui/material";

export default function Header() {
	return (
		<section className="banner-area">
			<div className="header-bar">
				<div className="logo">
					<a>
						<img className="header-logo" src={javalogo} alt={"logo"}></img>
					</a>
				</div>
				<div className="nav-bar">
					<ul className="navbar-list">
						<li className="navbar-list_items">
							<a className="navitem-link" href="#">
								Sign in
							</a>
						</li>
						<li className="navbar-list_items">
							<a className="navitem-link" href="#">
								Sign up
							</a>
						</li>
						<li className="navbar-list_items">
							<a className="navitem-link" href="#">
								About
							</a>
						</li>
						<li className="navbar-list_lastitem">
							<Button className="start-learning_btn" variant="contained">
								{" "}
								Start Learning
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
