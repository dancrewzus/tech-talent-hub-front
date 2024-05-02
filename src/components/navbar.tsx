import { Drawer, DrawerItem } from "./drawer";
import { Button } from "./ui/button";

export function NavBar() {
	return (
		<nav className="w-full bg-card-foreground/5 py-4">
			<div className="container flex items-center justify-between">
				<a href="/">
					<p className="font-medium">Tech Talent Hub</p>
				</a>

				<div className="block md:hidden">
					<Drawer>
						<div className="flex flex-col gap-4">
							<DrawerItem title="Iniciar Sesión" to="/sign-in" />

							<DrawerItem title="Registrarse" to="/sign-up" />
						</div>
					</Drawer>
				</div>

				<div className="hidden space-x-2 md:block">
					<Button variant="outline">Iniciar Sesión</Button>

					<Button>Registrarse</Button>
				</div>
			</div>
		</nav>
	);
}
