import { LifeBuoy, LogOut, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { useSession } from "@/hooks/use-session";

import { cn } from "@/lib/utils";

import { Drawer, DrawerItem } from "./drawer";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const routes: Array<{
	title: string;
	to: string;
	isProtected: boolean;
}> = [
	{
		title: "Ofertas",
		to: "/offers",
		isProtected: true,
	},
	{
		title: "Inicio de Sesión",
		to: "/login",
		isProtected: false,
	},
	{
		title: "Registro",
		to: "/sign-up",
		isProtected: false,
	},
];

export function NavBar() {
	const { session, logout } = useSession();

	return (
		<nav className="w-full">
			<div
				className={cn(
					"container flex items-center justify-between",
					session && "md:grid md:grid-cols-3",
				)}
			>
				<Link to="/">
					<p className="font-medium">Tech Talent Hub</p>
				</Link>

				{session ? (
					<ul className="hidden md:flex md:justify-center md:gap-2">
						{routes
							.filter((route) =>
								session ? route.isProtected : !route.isProtected,
							)
							.map((route) => (
								<NavLink
									key={route.to}
									to={route.to}
									className="font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary"
								>
									{route.title}
								</NavLink>
							))}
					</ul>
				) : null}

				<div className="flex gap-2 md:justify-end">
					{session ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon">
									<User className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>

							<DropdownMenuContent className="w-56">
								<DropdownMenuLabel>{session.user.fullname}</DropdownMenuLabel>

								<DropdownMenuSeparator />

								<DropdownMenuGroup>
									<DropdownMenuItem>
										<LifeBuoy className="mr-2 h-4 w-4" />
										<span>Soporte</span>
									</DropdownMenuItem>

									<DropdownMenuItem onClick={() => logout()}>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Cerrar sesión</span>
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div className="hidden space-x-2 md:block">
							<Button variant="ghost" asChild>
								<Link to="/login">Iniciar Sesión</Link>
							</Button>

							<Button asChild>
								<Link to="/sign-up">Registrarse</Link>
							</Button>
						</div>
					)}

					<div className="block md:hidden">
						<Drawer>
							{routes
								.filter((route) =>
									session ? route.isProtected : !route.isProtected,
								)
								.map((route) => (
									<DrawerItem
										key={route.to}
										title={route.title}
										to={route.to}
									/>
								))}
						</Drawer>
					</div>
				</div>
			</div>
		</nav>
	);
}
