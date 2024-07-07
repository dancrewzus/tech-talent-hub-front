import { z } from "zod";

export const Pagination = z.object({
	offset: z.coerce.number().gte(0),
	limit: z.coerce.number().gt(0),
	filter: z.string().default(""),
});

export type PaginationType = z.infer<typeof Pagination>;
