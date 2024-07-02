import {
	Category,
	type CategoryType,
	type CreateCategoryType,
} from "@/models/category";
import { isErrorResponse } from "@/models/error-response";
import { type QueryParamsType } from "@/models/query-params";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const categoriesApi = {
	/**
	 * Creates a category.
	 *
	 * @param category - The category to create.
	 *
	 * @returns A promise that resolves to a category if successful.
	 * Otherwise an error response or null.
	 */
	async create(category: CreateCategoryType) {
		const response = await client("v1/categories", {
			method: "POST",
			body: category,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Category).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Updates a category.
	 *
	 * @param category - The category to create.
	 *
	 * @returns A promise that resolves to a category if successful.
	 * Otherwise an error response or null.
	 */
	async update({ _id, name }: CategoryType) {
		const response = await client(`v1/categories/${_id}`, {
			method: "PATCH",
			body: { name },
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Category).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Deletes the category.
	 *
	 * @param categoryId - The category id to delete.
	 *
	 * @returns A promise that resolves with a boolean indicating the status.
	 */
	async delete(categoryId: string) {
		const response = await client(`v1/categories/${categoryId}`, {
			method: "DELETE",
		});

		return response?.status === 200;
	},
	/**
	 * Returns the categories.
	 *
	 * @param query - The category query params.
	 *
	 * @returns A promise that resolves with the categories.
	 */
	async getAll(query?: QueryParamsType): Promise<Array<CategoryType>> {
		const response = await client("v1/categories", {
			method: "GET",
			searchParams: query
				? {
						offset: `${query.offset}`,
						limit: `${query.limit}`,
						filter: `${query.filter}`,
					}
				: undefined,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Category.array()).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) return [];

		return parsed.data;
	},
};
