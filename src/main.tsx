import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { ProtectedRoute } from "./components/protected-route";
import { Toaster } from "./components/ui/toaster";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { CategoriesPage } from "./features/categories/pages/categories-page";
import { ErrorPage } from "./features/error/error-page";
import { LandingPage } from "./features/landing/landing-page";
import { CreateOfferPage } from "./features/offers/pages/create-offer-page";
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
						path: "/offers/create",
						element: <CreateOfferPage />,
					},
					{
						path: "/categories",
						element: <CategoriesPage />,
						loader: CategoriesPage.loader,
					},
					{
						path: "/support",
						element: <SupportPage />,
					},
				],
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
