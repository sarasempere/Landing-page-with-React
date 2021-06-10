import React from "react";

import { Jumbotron } from "../component/jumbotron.js";
import { Card } from "../component/card.js";
import "../../styles/index.scss";

export function Container() {
	return (
		<div className="container">
			<Jumbotron></Jumbotron>
			<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</div>
	);
}
