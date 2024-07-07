import { Link, useLocation, type Location } from "react-router-dom";

import { type OfferType } from "@/models/offer";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export function OfferPage() {
	const { state: offer } = useLocation() as Location<OfferType>;

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title={offer.title}
				description="Administra la oferta publicada"
				actions={
					<div className="flex items-center gap-2">
						<Button asChild variant="outline">
							<Link to="edit" state={offer}>
								Editar oferta
							</Link>
						</Button>

						<Button variant="destructive">Eliminar oferta</Button>
					</div>
				}
			/>
		</Main>
	);
}
