import useSWR, { mutate } from "swr";

import { categoriesApi } from "@/api/categories-api";

export function useCategories() {
	const { data, isLoading } = useSWR("categories", () =>
		categoriesApi.getAllData(),
	);

	const refetchCategories = () => {
		mutate("categories");
	};

	return {
		categories: data,
		isLoading,
		refetchCategories,
	};
}
