import { useLocation, type Location } from "react-router-dom";

import { type OfferType } from "@/models/offer";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";

import { OfferForm } from "../components/offer-form";

export function EditOfferPage() {
	const { state: offer } = useLocation() as Location<OfferType>;

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Editar oferta"
				description="Modifica la oferta para ajustar los requerimientos"
			/>

			<OfferForm offer={offer} />
		</Main>
	);
}
