import { Link } from "react-router-dom";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

import { useOffers } from "@/hooks/use-offers";

export function OffersPage() {
	const { offers } = useOffers();

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Ofertas"
				actions={
					<Button asChild>
						<Link to="create">Crear oferta</Link>
					</Button>
				}
			/>

			<pre>{JSON.stringify(offers, null, 2)}</pre>
		</Main>
	);
}
