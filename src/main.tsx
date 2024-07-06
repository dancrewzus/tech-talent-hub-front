import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { Toaster } from "./components/ui/toaster";
import { ErrorPage } from "./features/error/error-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <BasePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				async lazy() {
					const { LandingPage } = await import(
						"./features/landing/landing-page"
					);

					return { Component: LandingPage };
				},
			},
			{
				path: "/sign-up",
				async lazy() {
					const { SignUpPage } = await import(
						"./features/auth/pages/sign-up-page"
					);

					return { Component: SignUpPage };
				},
			},
			{
				path: "/login",
				async lazy() {
					const { LoginPage } = await import(
						"./features/auth/pages/login-page"
					);

					return { Component: LoginPage };
				},
			},
			{
				async lazy() {
					const { ProtectedRoute } = await import(
						"./components/protected-route"
					);

					return { Component: ProtectedRoute };
				},

				children: [
					{
						path: "/offers",
						async lazy() {
							const { OffersPage } = await import(
								"./features/offers/pages/offers-page"
							);

							return { Component: OffersPage };
						},
					},
					{
						path: "/offers/create",
						async lazy() {
							const { CreateOfferPage } = await import(
								"./features/offers/pages/create-offer-page"
							);

							return { Component: CreateOfferPage };
						},
					},
					{
						path: "/categories",
						async lazy() {
							const { CategoriesPage } = await import(
								"./features/categories/pages/categories-page"
							);

							return {
								Component: CategoriesPage,
							};
						},
					},
					{
						path: "/support",
						async lazy() {
							const { SupportPage } = await import(
								"./features/support/pages/support-page"
							);

							return {
								Component: SupportPage,
							};
						},
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
