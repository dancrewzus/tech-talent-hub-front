import { z } from "zod";

export const User = z.object({
	id: z.string(),
	email: z.string(),
	fullname: z.string(),
	name: z.string(),
	surname: z.string(),
	phoneNumber: z.string(),
	profilePicture: z.string().default(""),
	role: z.string().default(""),
});

export type UserType = z.infer<typeof User>;
