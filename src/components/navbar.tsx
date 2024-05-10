import { LifeBuoy, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

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

export function NavBar() {
	return (
		<nav className="w-full">
			<div className="container flex items-center justify-between">
				<a href="/">
					<p className="font-medium">Tech Talent Hub</p>
				</a>

				<div className="flex gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<User className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>John Doe</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuGroup>
								<DropdownMenuItem>
									<LifeBuoy className="mr-2 h-4 w-4" />
									<span>Soporte</span>
								</DropdownMenuItem>

								<DropdownMenuItem>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Cerrar sesión</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>

					<div className="block md:hidden">
						<Drawer>
							<DrawerItem title="Iniciar Sesión" to="/login" />

							<DrawerItem title="Registrarse" to="/sign-up" />
						</Drawer>
					</div>

					<div className="hidden space-x-2 md:block">
						<Button variant="ghost" asChild>
							<Link to="/login">Iniciar Sesión</Link>
						</Button>

						<Button asChild>
							<Link to="/sign-up">Registrarse</Link>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
