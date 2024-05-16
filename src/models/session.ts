import { z } from "zod";

import { User } from "./user";

export const Session = z.object({
	token: z.string(),
	user: User,
});

export type SessionType = z.infer<typeof Session>;
