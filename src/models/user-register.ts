import { z } from "zod";

export const UserRegister = z.object({
	email: z
		.string()
		.email("Debe ingresar un email con el formato nombre@ejemplo.com")
		.min(1, "Debe ingresar un email")
		.min(4, "Debe ingresar un email mayor o igual a 4 caracteres"),
	password: z
		.string()
		.min(1, "Debe ingresar una contraseña")
		.min(4, "Debe ingresar una contraseña mayor o igual a 4 caracteres")
		.max(50, "Debe ingresar una contraseña menor o igual a 50 caracteres"),
	firstName: z
		.string()
		.min(1, "Debe ingresar un nombre")
		.min(2, "Debe ingresar un nombre mayor o igual a 2 caracteres")
		.max(50, "Debe ingresar un nombre menor o igual a 50 caracteres"),
	paternalSurname: z
		.string()
		.min(1, "Debe ingresar un apellido")
		.min(2, "Debe ingresar un apellido mayor o igual a 2 caracteres")
		.max(50, "Debe ingresar un apellido menor o igual a 50 caracteres"),
	birthDate: z.string().date("Debe seleccionar una fecha"),
	gender: z.enum(["male", "female"], { message: "Debe ingresar un género" }),
	address: z.string().min(1, "Debe ingresar una dirección"),
	profilePicture: z.string().default(""),
});

export type UserRegisterType = z.infer<typeof UserRegister>;
