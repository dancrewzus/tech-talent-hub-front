import { z } from "zod";

export const ErrorResponse = z.object({
	statusCode: z.number(),
	message: z.union([z.string(), z.array(z.string())]),
	error: z.string(),
});

export type ErrorResponseType = z.infer<typeof ErrorResponse>;

export function isErrorResponse(value: unknown): value is ErrorResponseType {
	return ErrorResponse.safeParse(value).success;
}
