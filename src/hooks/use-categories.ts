import useSWR, { mutate } from "swr";

import { categoriesApi } from "@/api/categories-api";

export function useCategories() {
	const { data, isLoading } = useSWR(
		"categories",
		() => categoriesApi.getAllData(),
		{
			revalidateOnFocus: false,
		},
	);

	const refetchCategories = () => {
		mutate("categories");
	};

	return {
		categories: data?.data.categories ?? [],
		pagination: data?.data.pagination,
		isLoading,
		refetchCategories,
	};
}
