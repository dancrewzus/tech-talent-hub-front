import { Link } from "react-router-dom";

import { Drawer, DrawerItem } from "./drawer";
import { Button } from "./ui/button";

export function NavBar() {
	return (
		<nav className="w-full">
			<div className="container flex items-center justify-between">
				<a href="/">
					<p className="font-medium">Tech Talent Hub</p>
				</a>

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
		</nav>
	);
}
