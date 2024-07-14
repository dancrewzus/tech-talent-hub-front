import {
	Link,
	useLocation,
	useNavigate,
	type Location,
} from "react-router-dom";

import { offersApi } from "@/api/offers-api";

import { type OfferType } from "@/models/offer";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

import { useOffers } from "@/hooks/use-offers";

export function OfferPage() {
	const navigate = useNavigate();
	const { deleteOffer } = useOffers();
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

						<Button
							variant="destructive"
							onClick={async () => {
								const deleted = await offersApi.delete(offer.id);

								if (deleted) {
									deleteOffer(offer);
									navigate("/offers");
								}
							}}
						>
							Eliminar oferta
						</Button>
					</div>
				}
			/>
		</Main>
	);
}
