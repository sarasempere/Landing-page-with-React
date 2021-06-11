import React from "react";

export function Card() {
	return (
		<div className="feature col">
			<div className="feature-icon bg-primary bg-gradient">
				<svg className="bi" width="1em" height="1em">
					<use xlinkHref="#people-circle"></use>
				</svg>
			</div>
			<h2>Featured title</h2>
			<p>
				Paragraph of text beneath the heading to explain the heading.
				Well add onto it with another sentence and probably just keep
				going until we run out of words.
			</p>
			<a href="#" className="icon-link">
				Call to action
				<svg className="bi" width="1em" height="1em">
					<use xlinkHref="#chevron-right"></use>
				</svg>
			</a>
		</div>
	);
}
