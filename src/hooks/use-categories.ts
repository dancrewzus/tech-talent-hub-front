import useSWR from "swr";

import { categoriesApi } from "@/api/categories-api";

import { type QueryParamsType } from "@/models/query-params";

export function useCategories(params?: QueryParamsType) {
	const { data = [], isLoading } = useSWR("categories", () =>
		categoriesApi.getAll(params),
	);

	return {
		categories: data,
		isLoading,
	};
}
