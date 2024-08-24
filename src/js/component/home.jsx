import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Tareas from "./Tareas";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Tareas />
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">Alba</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
