import { z } from "zod";

export const Offer = z.object({
	title: z.string().min(1, "Debe ingresar el titulo"),
	slug: z.string().default(""),
	description: z.string().min(1, "Debe ingresar la descripción"),
	position: z.string().min(1, "Debe ingresar el puesto"),
	yearsOfExperience: z.coerce
		.number({ message: "Debe ingresar un número válido" })
		.gte(0, "Debe ser mayor o igual a cero"),
	keywords: z.array(
		z.string().min(1, "Una palabra clave no puede estar vacía"),
	),
	hiringDate: z.string().date("Debe seleccionar una fecha"),
	typeOfContract: z.string().min(1, "Debe seleccionar un tipo de contrato"),
	salaryMin: z.coerce
		.number({ message: "Debe ingresar un salario mínimo" })
		.gt(0, "Debe ser mayor a cero"),
	salaryMax: z.coerce
		.number({ message: "Debe ingresar un salario máximo" })
		.gt(0, "Debe ser mayor a cero"),
	currency: z.string().min(1, "Debe seleccionar la moneda"),
	country: z.string().min(1, "Debe seleccionar un pais"),
	category: z.string().min(1, "Debe seleccionar un área"),
	remote: z.boolean().default(false),
});

export const CreateOffer = Offer.extend({
	keywords: z.preprocess(
		(value) => {
			if (typeof value !== "string") return [];

			return value.split(",").map((word) => word.trim());
		},
		z.array(z.string().min(1, "Las palabras claves no puede estar vacías")),
	),
}).refine(
	(schema) => {
		return schema.salaryMax >= schema.salaryMin;
	},
	{
		path: ["salaryMin"],
		message: "El salario mínimo debe ser menor al máximo",
	},
);

export type OfferType = z.infer<typeof Offer>;

export type CreateOfferType = z.infer<typeof CreateOffer>;
