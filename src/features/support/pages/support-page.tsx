import { Link } from "react-router-dom";

import { Main } from "../../../components/main.tsx";
import { Button } from "../../../components/ui/button.tsx";
import { AccordionSupport } from "../components/support-page-accordion.tsx";

export function SupportPage() {
	return (
		<Main className="flex flex-col">
			<div>
				<section className="text-center">
					<h1 className="text-3xl font-semibold md:text-center">
						Preguntas Frecuentes
					</h1>
					<span className="text-muted-foreground md:text-center">
						¿Cómo podemos ayudarte?
					</span>
					<div>
						<form className="p-8 ">
							<input
								type="text"
								placeholder=""
								className="w-500 mr-2 w-full flex-1 rounded-l-md border border-gray-300 p-1 md:w-1/3 lg:w-1/3"
							/>
							<Button variant="ghost" asChild>
								<Link to="#">Buscar</Link>
							</Button>
						</form>
					</div>
				</section>
				<div className="flex flex-col items-center gap-5 rounded-lg bg-white py-5">
					<section className="flex w-full justify-center">
						<div className="w-full items-center md:w-1/4 lg:w-1/3">
							<AccordionSupport />
						</div>
					</section>
					<div>
						<Button asChild>
							<Link to="#">Reportar un problema</Link>
						</Button>
					</div>
				</div>
			</div>
		</Main>
	);
}
