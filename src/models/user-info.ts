import { phone } from "phone";
import { z } from "zod";

const ProjectSchema = z.object({
	title: z
		.string()
		.min(1, "Debe ingresar un título")
		.max(100, "Debe ingresar un título menor o igual a 100 caracteres"),
	description: z
		.string()
		.min(1, "Debe ingresar un título")
		.max(500, "Debe ingresar un título menor o igual a 500 caracteres"),
});

const TagSchema = z.object({
	title: z
		.string()
		.min(1, "Debe ingresar un título")
		.max(20, "Debe ingresar un título menor o igual a 20 caracteres"),
});

const StudiesSchema = z.object({
	title: z
		.string()
		.min(1, "Debe ingresar un título")
		.max(100, "Debe ingresar un título menor o igual a 100 caracteres"),
	description: z
		.string()
		.min(1, "Debe ingresar un título")
		.max(500, "Debe ingresar un título menor o igual a 500 caracteres"),
});

const PasswordSchema = z
	.object({
		LogicPassword: z
			.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres"),
		confirmPassword: z
			.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres"),
	})
	.refine((data) => data.LogicPassword === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export const UserInfo = z.object({
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
	headline: z
		.string()
		.min(1, "Debe ingresar una línea de trabajo")
		.min(1, "Debe ingresar un texto mayor o igual a 1 caracter")
		.max(100, "Debe ingresar un nombre menor o igual a 100 caracteres"),
	bio: z
		.string()
		.min(1, "Debe ingresar una biografía")
		.min(45, "Debe ingresar mínimo 45 caracteres")
		.max(500, "Debe ingresar máximo 500 caracteres"),
	address: z.string().min(1, "Debe ingresar una dirección"),
	phoneNumber: z
		.string()
		.min(1, "Debe ingresar un número de teléfono")
		.refine((value) => phone(value).isValid, {
			message: "Debe ingresar un télefono válido",
		}),
	profilePicture: z.string().default(""),
	projects: z.array(ProjectSchema).default([]),
	tags: z.array(TagSchema).default([]),
	studies: z.array(StudiesSchema).default([]),
	newPassword: z.array(PasswordSchema).default([]),
	curriculum: z.string().default(""),
	role: z.string().default(""),
});

export type UserInfoType = z.infer<typeof UserInfo>;
