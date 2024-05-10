import { z } from "zod";

import { UserRegister } from "./user-register";

export const User = UserRegister.omit({
	password: true,
}).extend({
	role: z.string().min(1, "Debe tener un rol asignado"),
});

export type UserType = z.infer<typeof User>;
