import React from "react";
import { BrowserRouter  ,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Event from "./pages/Event";
const App = () => {
	return (
<BrowserRouter>
<NavBar />
<Routes className="">
        <Route path="/" element={<Home/>} />
        <Route path="/event/:id" element={<Event/>} />
		</Routes>
</BrowserRouter>
	);
};

export default App;
