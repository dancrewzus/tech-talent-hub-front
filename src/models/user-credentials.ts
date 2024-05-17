import { z } from "zod";

export const UserCredentials = z.object({
	email: z
		.string()
		.min(1, "Debe ingresar su email")
		.email("Debe ingresar su email con el formato nombre@ejemplo.com"),
	password: z
		.string()
		.min(1, "Debe ingresar su contraseña")
		.min(4, "Debe ingresar una contraseña mayor a 4 caracteres"),
});

export type UserCredentialsType = z.infer<typeof UserCredentials>;
