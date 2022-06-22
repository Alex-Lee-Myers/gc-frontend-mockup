import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/game/:id" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
