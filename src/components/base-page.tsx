import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer } from "./footer";
import { NavBar } from "./navbar";

export function BasePage({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<div className="relative flex min-h-screen flex-col">
				<header className="sticky top-0 z-50 flex w-full items-center border-b border-border/40 bg-background/95 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<NavBar />
				</header>

				{children ?? <Outlet />}

				<Footer />
			</div>

			<ScrollRestoration />
		</>
	);
}
