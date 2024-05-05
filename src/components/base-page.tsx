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
		<div className="relative flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 flex w-full items-center border-b border-border/40 bg-background/95 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<NavBar />
			</header>

			<main className={cn("flex-1", className)}>{children}</main>

			<Footer />
		</div>
	);
}
