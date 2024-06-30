import useSWR from "swr";

import { categoriesApi } from "@/api/categories-api";

export function useCategories(
	params?: Parameters<typeof categoriesApi.getAll>[0],
) {
	const { data = [], isLoading } = useSWR("categories", () =>
		categoriesApi.getAll(params),
	);

	return {
		categories: data,
		isLoading,
	};
}
