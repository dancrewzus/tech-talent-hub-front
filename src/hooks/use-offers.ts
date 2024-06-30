import useSWR from "swr";

import { offersApi } from "@/api/offers-api";

import { type QueryParamsType } from "@/models/query-params";

export function useOffers(params?: QueryParamsType) {
	const { data = [], isLoading } = useSWR("offers", () =>
		offersApi.getAll(params),
	);

	return {
		offers: data,
		isLoading,
	};
}
