import { z } from "zod";

import { DataPagination } from "./data-pagination";

/**
 * An offer application.
 */
export const OfferApply = z.object({
	_id: z.string(),
	email: z.string().email(),
	name: z.string(),
	surname: z.string(),
});

/**
 * A job offer.
 */
export const Offer = z.object({
	id: z.string().min(1, "Debe tener un id").optional().default(""),
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
	category: z.string().min(1, "Debe seleccionar una categoría"),
	remote: z.coerce.boolean().default(false),
	applies: z.union([z.number(), z.array(OfferApply)]),
});

export type OfferType = z.infer<typeof Offer>;

/**
 * The create offer model.
 */
export const CreateOffer = Offer.omit({
	id: true,
	applies: true,
	slug: true,
})
	.extend({
		keywords: z.preprocess(
			(value) => {
				if (Array.isArray(value)) return value;

				if (typeof value !== "string") return [];

				return value.split(",").map((word) => word.trim());
			},
			z.array(z.string().min(1, "Las palabras claves no puede estar vacías")),
		),
	})
	.refine(
		(schema) => {
			return schema.salaryMax >= schema.salaryMin;
		},
		{
			path: ["salaryMin"],
			message: "El salario mínimo debe ser menor al máximo",
		},
	);

/**
 * The edit offer response.
 */
export const ManageOfferResponse = Offer.omit({
	id: true,
	applies: true,
}).extend({
	_id: z.string().min(1, "Debe tener un id").default(""),
});

export type CreateOfferType = z.infer<typeof CreateOffer>;

export type EditOfferType = z.infer<typeof CreateOffer> & { id: string };

/**
 * The offers response.
 */
export const OffersResponse = z.object({
	data: z.object({
		pagination: DataPagination,
		offers: Offer.array(),
	}),
});

export type OffersResponseType = z.infer<typeof OffersResponse>;
