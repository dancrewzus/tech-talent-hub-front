import { Briefcase, Earth } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { offersApi } from "@/api/offers-api";

import type { OfferType } from "@/models/offer";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

import { useSession } from "@/hooks/use-session";

function Item({ offer }: { offer: OfferType }) {
	const { session } = useSession();
	if (!session) return;

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
	const [isOpen, setOpen] = useState(false);
	const { toast } = useToast();

	const { session } = useSession();
	if (!session) return;

	if (session.user.role !== "client") {
		return (
			<Link to={offer.id} state={offer}>
				<Item offer={offer} />
			</Link>
		);
	}

	return (
		<Dialog open={isOpen} onOpenChange={(value) => setOpen(value)}>
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

				<Button
					onClick={async () => {
						const didApply = await offersApi.apply(offer.id);

						if (didApply) {
							toast({
								title: "Aplicación enviada con éxito",
							});

							setOpen(false);
							return;
						}

						toast({
							title: "Ha ocurido un error al aplicar",
							description: "Intente más tarde",
						});
					}}
				>
					Aplicar
				</Button>
			</DialogContent>
		</Dialog>
	);
}
