import { z } from "zod";

export const Pagination = z.object({
	limit: z.coerce.number().gt(0),
	offset: z.coerce.number().gt(0),
	filter: z.string().default(""),
});

export type PaginationType = z.infer<typeof Pagination>;
