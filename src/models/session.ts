import { z } from "zod";

export const Session = z.object({
	id: z.string(),
	token: z.string(),
});

export type SessionType = z.infer<typeof Session>;
