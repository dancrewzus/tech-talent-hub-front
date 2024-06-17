import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { ProtectedRoute } from "./components/protected-route";
import { Toaster } from "./components/ui/toaster";
import ArticlesPage from "./features/articles/ArticlePage";
import type Article from "./features/articles/components/Article";
import ArticleView from "./features/articles/components/ArticleView";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { ErrorPage } from "./features/error/error-page";
import { LandingPage } from "./features/landing/landing-page";
import { OffersPage } from "./features/offers/pages/offers-page";
import { SupportPage } from "./features/support/pages/support-page";
import "./index.css";

const newArticle: Article = {
	url: "",
	title: "New Article",
	tags: ["new-tag", "another-tag"],
	area: "New Area",
	releaseDate: new Date("2023-06-01"),
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa iure voluptates quidem obcaecati cumque! Molestias ea fugit laudantium earum nesciunt, itaque consequuntur quis ducimus ipsa. Nesciunt minima placeat corporis facilis blanditiis eveniet neque repudiandae quod inventore eaque, itaque quis dolorem saepe nihil odit facere temporibus voluptas aperiam nemo porro nulla fugiat doloribus enim. Neque sit aliquam modi dolore ipsum commodi recusandae quod, aliquid perspiciatis perferendis amet voluptatum, mollitia earum.",
};

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
				path: "/articles",
				element: <ArticlesPage />,
			},
			{
				path: "/article",
				element: <ArticleView article={newArticle} />,
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "/offers",
						element: <OffersPage />,
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
