import { z } from "zod";

export const CategoryQuery = z.object({
	limit: z.coerce.number().gt(0),
	offset: z.coerce.number().gt(0),
	query: z.string().default(""),
});

export type CategoryQueryType = z.infer<typeof CategoryQuery>;
