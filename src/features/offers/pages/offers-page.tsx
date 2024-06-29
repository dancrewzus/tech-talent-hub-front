import { Link } from "react-router-dom";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export function OffersPage() {
	return (
		<Main className="container py-8">
			<SectionHeader
				title="Ofertas"
				actions={
					<Button asChild>
						<Link to="create">Crear oferta</Link>
					</Button>
				}
			/>
		</Main>
	);
}
