import useSWR from "swr";

import { offersApi } from "@/api/offers-api";

import { type PaginationType } from "@/models/pagination";

export function useOffers(params?: PaginationType) {
	const { data, isLoading } = useSWR("offers", () => offersApi.getAll(params));

	return {
		offers: data?.data.offers ?? [],
		pagination: data?.data.pagination,
		isLoading,
	};
}
