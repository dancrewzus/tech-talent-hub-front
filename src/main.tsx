import { setDefaultOptions } from "date-fns";
import { es } from "date-fns/locale";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "./components/ui/toaster";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { ErrorPage } from "./features/error/error-page";
import { LandingPage } from "./features/landing/landing-page";
import "./index.css";

// Sets the 'es' as locale default for date-fns.
setDefaultOptions({ locale: es });

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/sign-up",
		element: <SignUpPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />

		<Toaster />
	</React.StrictMode>,
);
