import { Main } from "@/components/main.tsx";

import { AccordionSupport } from "../components/accordion-support";

export function SupportPage() {
	return (
		<Main className="flex flex-col items-center space-y-4 px-6 py-12">
			<h1 className="text-3xl font-semibold md:text-center">Soporte</h1>
			<span className="text-muted-foreground md:text-center">
				¿Cómo podemos ayudarte?
			</span>

			<div className="w-full max-w-lg">
				<AccordionSupport />
			</div>
		</Main>
	);
}
