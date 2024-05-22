import { Link } from "react-router-dom";

import { Main } from "@/components/main.tsx";
import { Button } from "@/components/ui/button.tsx";

import { AccordionSupport } from "../components/support-page-accordion.tsx";

export function SupportPage() {
	return (
		<Main className="flex flex-col items-center space-y-4 px-6 py-12">
			<h1 className="text-3xl font-semibold md:text-center">Soporte</h1>
			<span className="text-muted-foreground md:text-center">
				¿Cómo podemos ayudarte?
			</span>

			<div className="w-full md:w-1/4 lg:w-1/3">
				<AccordionSupport />
			</div>
			<div>
				<Button asChild>
					<Link to="#">Reportar un problema</Link>
				</Button>
			</div>
		</Main>
	);
}
