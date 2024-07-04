import { z } from "zod";

export const DataPagination = z.object({
	totalDocs: z.number().int().default(0),
	offset: z.number().int().default(0),
	limit: z.number().int().default(0),
	totalPages: z.number().int().default(0),
	page: z.number().int().default(0),
	pagingCounter: z.number().int().default(0),
	hasPrevPage: z.boolean().default(false),
	hasNextPage: z.boolean().default(false),
	prevPage: z.nullable(z.number().int()),
	nextPage: z.nullable(z.number().int()),
});

export type DataPaginationType = z.infer<typeof DataPagination>;
