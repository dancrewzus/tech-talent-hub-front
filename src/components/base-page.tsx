import { cn } from "@/lib/utils";

import { Footer } from "./footer";
import { NavBar } from "./navbar";

export function BasePage({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className="flex min-h-screen flex-col">
			<header>
				<NavBar />
			</header>

			<main className={cn("flex-1", className)}>{children}</main>

			<Footer />
		</div>
	);
}
