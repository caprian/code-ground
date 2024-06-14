import React from "react";
import "./Header.css";
import CodeGround from "../Images/CodeGround.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<section className="banner-area">
			<div className="header-bar">
				<div className="logo">
					<a>
						<img className="header-logo" src={CodeGround} alt={"logo"}></img>
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
							<Link to="/codeground">
								<Button className="start-learning_btn" variant="contained">
									{" "}
									Start Learning
								</Button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
