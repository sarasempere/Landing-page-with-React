import React from "react";

export function Card() {
	return (
		<div class="feature col">
			<div class="feature-icon bg-primary bg-gradient">
				<svg class="bi" width="1em" height="1em">
					<use xlinkHref="#people-circle"></use>
				</svg>
			</div>
			<h2>Featured title</h2>
			<p>
				Paragraph of text beneath the heading to explain the heading.
				We'll add onto it with another sentence and probably just keep
				going until we run out of words.
			</p>
			<a href="#" class="icon-link">
				Call to action
				<svg class="bi" width="1em" height="1em">
					<use xlinkHref="#chevron-right"></use>
				</svg>
			</a>
		</div>
	);
}
