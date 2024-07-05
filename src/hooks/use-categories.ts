import useSWR from "swr";

import { categoriesApi } from "@/api/categories-api";

export function useCategories() {
	const { data, isLoading } = useSWR("categories", () =>
		categoriesApi.getAllData(),
	);

	return {
		categories: data,
		isLoading,
	};
}
