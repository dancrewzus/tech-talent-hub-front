import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";

import { OfferForm } from "../components/offer-form";

export function EditOfferPage() {
	// const offer = useLoca

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Editar oferta"
				description="Modifica la oferta para ajustar los requerimientos"
			/>

			<OfferForm
				offer={{
					country: "US",
					category: "",
					currency: "VES",
					description: "hOL",
					hiringDate: "2024-08-07",
					keywords: ["TypeScript", "PNPM"],
					position: "Hello",
					remote: true,
					salaryMax: 1200,
					salaryMin: 1000,
					slug: "hey-brother",
					title: "Whatsupp",
					typeOfContract: "permanent",
					yearsOfExperience: 6,
				}}
			/>
		</Main>
	);
}
