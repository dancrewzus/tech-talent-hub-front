import {
	Category,
	CategoryResponseSchema,
	type CategoryType,
	type CategoryResponse,
	type CreateCategoryType,
} from "@/models/category";
import { isErrorResponse } from "@/models/error-response";
import { type PaginationType } from "@/models/pagination";

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
	 * @param pagination - The pagination params.
	 *
	 * @returns A promise that resolves with the categories.
	 */
	async getAll(pagination?: PaginationType): Promise<CategoryResponse | null> {
		const response = await client("v1/categories", {
			method: "GET",
			searchParams: pagination
				? {
						// pagination: JSON.stringify(pagination),
					}
				: undefined,
		});

		try {
			const json = await response?.json();
			const parsed = CategoryResponseSchema.safeParse(json);

			if (!parsed.success || isErrorResponse(parsed.data)) {
				return null;
			}

			return parsed.data;
		} catch (error) {
			return null;
		}
	},
	/**
	 * Returns all the categories.
	 *
	 * @returns A promise that resolves with all the categories.
	 */
	async getAllData(): Promise<CategoryResponse> {
		let offset = 0;
		const limit = 100;
		let hasMoreData = true;

		const allData: CategoryResponse = {
			data: {
				categories: [],
				pagination: {
					totalDocs: 0,
					totalPages: 0,
					page: 1,
					limit: 0,
					hasNextPage: false,
					hasPrevPage: false,
					nextPage: null,
					offset,
					pagingCounter: 0,
					prevPage: null,
				},
			},
		};

		while (hasMoreData) {
			const response = await this.getAll({ filter: "", offset, limit });
			if (!response) break;

			allData.data.categories = [
				...allData.data.categories,
				...response.data.categories,
			];

			allData.data.pagination = response.data.pagination;

			if (response.data.categories.length < limit) {
				hasMoreData = false;
			} else {
				offset += limit;
			}
		}

		return allData;
	},
};
