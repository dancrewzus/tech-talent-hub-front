import { z } from "zod";

import { DataPagination } from "./data-pagination";

/**
 * A job category.
 */
export const Category = z.object({
	_id: z.string(),
	name: z.string().min(1, "Debe ingresar un nombre"),
});

export type CategoryType = z.infer<typeof Category>;

export const CategoryResponseSchema = z.object({
	data: z.object({
		pagination: z.object({
			totalDocs: z.number(),
			offset: z.number(),
			limit: z.number(),
			totalPages: z.number(),
			page: z.number(),
			pagingCounter: z.number(),
			hasPrevPage: z.boolean(),
			hasNextPage: z.boolean(),
			prevPage: z.nullable(z.number()),
			nextPage: z.nullable(z.number()),
		}),
		categories: z.array(Category),
	}),
});

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

/**
 * The create category model.
 */
export const CreateCategory = Category.pick({ name: true });

export type CreateCategoryType = z.infer<typeof CreateCategory>;

/**
 * The categories response.
 */
export const CategoriesResponse = z.object({
	data: z.object({
		pagination: DataPagination,
		categories: Category.array(),
	}),
});

export type CategoriesResponseType = z.infer<typeof CategoriesResponse>;
