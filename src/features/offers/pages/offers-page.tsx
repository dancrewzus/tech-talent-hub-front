import { Link } from "react-router-dom";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

import { OffersList } from "../components/offers-list";

export function OffersPage() {
	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Ofertas"
				description="Encuentra una oferta en función a tu perfil"
				actions={
					<Button asChild>
						<Link to="create">Crear oferta</Link>
					</Button>
				}
			/>

			<OffersList />
		</Main>
	);
}
