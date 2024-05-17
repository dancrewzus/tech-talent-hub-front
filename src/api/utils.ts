import { z } from "zod";

import { ErrorResponse } from "@/models/error-response";

/**
 * Creates an schema of the API Response
 * for the data it should recieve.
 *
 * @param schema The schema of the data the API should return.
 */
export function createApiResponseSchema<TData extends z.ZodTypeAny>(
	schema: TData,
) {
	return z.union([schema, ErrorResponse]);
}
