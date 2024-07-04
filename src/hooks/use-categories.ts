import useSWR from "swr";

import { categoriesApi } from "@/api/categories-api";

import { type PaginationType } from "@/models/pagination";

export function useCategories(params?: PaginationType) {
	const { data, isLoading } = useSWR("categories", () =>
		categoriesApi.getAll(params),
	);

	return {
		categories: data?.data.categories ?? [],
		pagination: data?.data.pagination,
		isLoading,
	};
}
