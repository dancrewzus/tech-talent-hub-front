import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { ProtectedRoute } from "./components/protected-route";
import { Toaster } from "./components/ui/toaster";
import { ArticlesCreate } from "./features/articles/pages/articles-create";
import { ArticlesPage } from "./features/articles/pages/articles-page";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { ErrorPage } from "./features/error/error-page";
import { LandingPage } from "./features/landing/landing-page";
import { OffersPage } from "./features/offers/pages/offers-page";
import { SupportPage } from "./features/support/pages/support-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <BasePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},

			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "/offers",
						element: <OffersPage />,
					},
					{
						path: "/articles",
						element: <ArticlesPage />,
					},
					{
						path: "/support",
						element: <SupportPage />,
					},
				],
			},
			{
				path: "/article-create",
				element: <ArticlesCreate />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />

		<Toaster />
	</React.StrictMode>,
);
