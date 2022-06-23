import React from "react";
//Components/Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styling
import GlobalStyle from "./components/GlobalStyle";
//Routing
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/game/:id" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
