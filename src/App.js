import React from "react";
import "./App.css";
import Sky from "./Components/Sky/Sky";
import Earth from "./Components/Earth/Earth";
import Scenery from "./Components/Scenery/Scenery";

function App() {
	return (
		<div className="container">
			<Sky />
			<Earth />
			<Scenery />
		</div>
	);
}

export default App;
