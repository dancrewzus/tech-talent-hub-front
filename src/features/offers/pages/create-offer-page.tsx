import { useNavigate } from "react-router-dom";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";

import { OfferForm } from "../components/offer-form";

export function CreateOfferPage() {
	const navigate = useNavigate();

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Crear oferta"
				description="Crea una oferta para reclutar nuevos empleados"
			/>

			<OfferForm
				onSuccess={() => {
					return navigate("/offers");
				}}
			/>
		</Main>
	);
}
