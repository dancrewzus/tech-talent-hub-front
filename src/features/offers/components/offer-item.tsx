import type { OfferType } from "@/models/offer";

export function OfferItem({ offer }: { offer: OfferType }) {
	return (
		<div className="space-y-1 rounded-md border p-6 shadow-sm">
			<h2 className="font-medium">{offer.title}</h2>

			<p className="text-sm text-muted-foreground">
				{`${offer.country} ${offer.remote ? "(En remoto)" : ""}`.trim()}
			</p>

			<p className="text-sm text-muted-foreground">
				{offer.salaryMin} - {offer.salaryMax}
			</p>
		</div>
	);
}
