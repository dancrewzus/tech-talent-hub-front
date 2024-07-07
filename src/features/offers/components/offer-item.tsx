import { Briefcase, Earth } from "lucide-react";
import { Link } from "react-router-dom";

import type { OfferType } from "@/models/offer";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { useSession } from "@/hooks/use-session";

function Item({ offer }: { offer: OfferType }) {
	return (
		<div className="space-y-1 rounded-md border p-6 text-left shadow-sm">
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

export function OfferItem({ offer }: { offer: OfferType }) {
	const { session } = useSession();
	if (!session) return;

	if (session.user.role !== "client") {
		return (
			<Link to={offer.slug} state={offer}>
				<Item offer={offer} />
			</Link>
		);
	}

	return (
		<Dialog>
			<DialogTrigger className="w-full">
				<Item offer={offer} />
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">{offer.title}</DialogTitle>
				</DialogHeader>

				<section>
					<p className="flex items-center text-muted-foreground">
						<Earth className="mr-2 h-4 w-4" /> {offer.country}
					</p>

					<p className="flex items-center text-muted-foreground">
						<Briefcase className="mr-2 h-4 w-4" />

						<span>
							{offer.salaryMin} - {offer.salaryMax}{" "}
							{!offer.remote ? "· (En remoto)" : ""}
						</span>
					</p>
				</section>

				<section>
					<h3 className="text-lg font-medium">Acerca del empleo</h3>

					<p>{offer.description}</p>
				</section>

				<Button>Aplicar</Button>
			</DialogContent>
		</Dialog>
	);
}
