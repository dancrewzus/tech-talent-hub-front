import { z } from "zod";

export const User = z.object({
	id: z.string(),
	email: z.string(),
	fullname: z.string(),
	name: z.string(),
	surname: z.string(),
	profilePicture: z.string().default(""),
	phoneNumber: z.string(),
	role: z.enum(["root", "admin", "client"]).default("client"),
	gender: z.enum(["male", "female"]).default("male"),
	isLogged: z.boolean().default(false),
});

export type UserType = z.infer<typeof User>;
