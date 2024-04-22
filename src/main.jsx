import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./i18n.js";

import { App } from "./App.jsx";
import { NavbarComponent } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Studies } from "./pages/Studies.jsx";
import { Experience } from "./pages/Experience.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/estudios",
		element: <Studies />,
	},
	{
		path: "/experiencia",
		element: <Experience />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div id="wrapper">
			<NavbarComponent />
			<RouterProvider router={router} />
		</div>
		<div style={{height: "68px"}}></div>
		<Footer />
	</React.StrictMode>
);
