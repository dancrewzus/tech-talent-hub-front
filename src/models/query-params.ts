import { z } from "zod";

export const QueryParams = z.object({
	limit: z.coerce.number().gt(0),
	offset: z.coerce.number().gt(0),
	filter: z.string().default(""),
});

export type QueryParamsType = z.infer<typeof QueryParams>;
