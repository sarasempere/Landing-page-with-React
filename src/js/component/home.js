import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello People!</h1>
			<p>
				Made by{" "}
				<a href="https://github.com/sarasempere">Sara Sempere</a>, with
				love!
			</p>
		</div>
	);
}
