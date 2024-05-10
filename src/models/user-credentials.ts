import { z } from "zod";

import { UserRegister } from "./user-register";

export const UserCredentials = UserRegister.pick({
	email: true,
	password: true,
});

export type UserCredentialsType = z.infer<typeof UserCredentials>;
