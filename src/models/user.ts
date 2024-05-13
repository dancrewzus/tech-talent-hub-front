import dayjs from "dayjs";
import { phone } from "phone";
import { z } from "zod";

export const User = z.object({
	email: z
		.string()
		.email("Debe ingresar un email con el formato nombre@ejemplo.com")
		.min(1, "Debe ingresar un email")
		.min(4, "Debe ingresar un email mayor o igual a 4 caracteres"),
	password: z
		.string()
		.min(1, "Debe ingresar una contraseña")
		.min(6, "Debe ingresar una contraseña mayor o igual a 6 caracteres")
		.max(50, "Debe ingresar una contraseña menor o igual a 50 caracteres")
		.refine(
			(value) => /[A-Z]{1,}/.test(value),
			"Debe contener al menos una letra mayúscula",
		)
		.refine(
			(value) => /[a-z]{1,}/.test(value),
			"Debe contener al menos una letra minúscula",
		)
		.refine(
			(value) => /[0-9]{1,}/.test(value),
			"Debe contener al menos un número",
		),
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
	birthDate: z
		.string()
		.date("Debe seleccionar una fecha")
		.refine(
			(date) => dayjs().diff(date, "years") >= 16,
			"Debes tener 16 años o más",
		),
	gender: z.enum(["male", "female"], { message: "Debe ingresar un género" }),
	address: z.string().min(1, "Debe ingresar una dirección"),
	phoneNumber: z
		.string()
		.min(1, "Debe ingresar un número de teléfono")
		.refine((value) => phone(value).isValid, {
			message: "Debe ingresar un télefono válido",
		}),
	profilePicture: z.string().default(""),
	role: z.string().default(""),
});

export type UserTyoe = z.infer<typeof User>;
