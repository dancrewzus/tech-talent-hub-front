import useSWR from "swr";

import { offersApi } from "@/api/offers-api";

import type { OfferType } from "@/models/offer";
import { type PaginationType } from "@/models/pagination";

export function useOffers(params?: PaginationType) {
	const { data, isLoading, mutate } = useSWR("offers", () =>
		offersApi.getAll(params),
	);

	const updateOffer = (offer: OfferType) => {
		const aux = data?.data.offers ?? [];
		const index = aux.findIndex((item) => item.id === offer.id);
		if (index === -1) return;

		aux[index] = offer;

		mutate({
			data: {
				offers: aux,
				pagination: data?.data.pagination ?? {
					hasNextPage: false,
					hasPrevPage: false,
					limit: 0,
					nextPage: null,
					offset: 0,
					page: 0,
					pagingCounter: 0,
					prevPage: null,
					totalDocs: 0,
					totalPages: 0,
				},
			},
		});
	};

	const deleteOffer = (offer: OfferType) => {
		mutate({
			data: {
				offers: (data?.data.offers ?? []).filter(
					(item) => item.id !== offer.id,
				),
				pagination: data?.data.pagination ?? {
					hasNextPage: false,
					hasPrevPage: false,
					limit: 0,
					nextPage: null,
					offset: 0,
					page: 0,
					pagingCounter: 0,
					prevPage: null,
					totalDocs: 0,
					totalPages: 0,
				},
			},
		});
	};

	return {
		offers: data?.data.offers ?? [],
		pagination: data?.data.pagination,
		isLoading,
		updateOffer,
		deleteOffer,
	};
}
