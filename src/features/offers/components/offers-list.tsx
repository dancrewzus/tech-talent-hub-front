import { Briefcase } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

import { useOffers } from "@/hooks/use-offers";

import { OfferItem } from "./offer-item";

export function OffersList() {
	const { offers, isLoading } = useOffers();

	if (!offers.length && !isLoading) {
		return (
			<p className="flex flex-col items-center gap-2 p-8">
				<Briefcase className="h-10 w-10 text-muted-foreground/40" />

				<span className="text-center font-medium">
					No hay ofertas disponibles
				</span>
			</p>
		);
	}

	return (
		<ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{isLoading ? (
				<OffersSkeleton length={6} />
			) : (
				offers.map((offer) => (
					<li key={offer.slug}>
						<OfferItem offer={offer} />
					</li>
				))
			)}
		</ul>
	);
}

/**
 * The skeleton to display on offers loading.
 */
function OffersSkeleton({ length }: { length: number }) {
	const items = Array(length).fill(0);

	return items.map((_, index) => {
		return (
			<li key={index}>
				<div className="space-y-1 rounded-md border p-6 shadow-sm">
					<Skeleton className="h-6 w-full" />

					<Skeleton className="h-5 w-full" />

					<Skeleton className="h-5 w-full" />
				</div>
			</li>
		);
	});
}
