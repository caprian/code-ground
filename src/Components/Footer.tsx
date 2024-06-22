import React from "react";
import "./Footer.css";
import CodeGround from "../Images/CodeGround.png";

export default function Footer() {
	return (
		<section className="footer-section">
			<div className="footer-logo-container">
				<img className="footer-logo" src={CodeGround} alt={"logo"}></img>
				<p className="footer-logo-text">Learn Java the CodeGround way</p>
			</div>
		</section>
	);
}
