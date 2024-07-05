import { isErrorResponse } from "@/models/error-response";
import { type CreateOfferType, Offer, OffersResponse } from "@/models/offer";
import { type PaginationType } from "@/models/pagination";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const offersApi = {
	/**
	 * Creates an offer.
	 *
	 * @param offer - The offer to create.
	 *
	 * @returns A promise that resolves to an offer if successful.
	 * Otherwise an error response or null.
	 */
	async create(offer: CreateOfferType) {
		const response = await client("v1/offers", {
			method: "POST",
			body: offer,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Offer).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Updates an offer.
	 *
	 * @param offer - The offer to update.
	 *
	 * @returns A promise that resolves to an offer if successful.
	 * Otherwise an error response or null.
	 */
	async update({ slug, ...offer }: CreateOfferType) {
		const response = await client(`v1/offers/${slug}`, {
			method: "PATCH",
			body: offer,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Offer).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Deletes the offer.
	 *
	 * @param offerSlug - The offer slug to delete.
	 *
	 * @returns A promise that resolves with a boolean indicating the status.
	 */
	async delete(offerSlug: string) {
		const response = await client(`v1/offers/${offerSlug}`, {
			method: "DELETE",
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Offer).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Returns the offers.
	 *
	 * @param pagination - The pagination params.
	 *
	 * @returns A promise that resolves with the offers.
	 */
	async getAll(pagination?: PaginationType) {
		const response = await client("v1/offers", {
			method: "GET",
			searchParams: pagination
				? {
						pagination: JSON.stringify(pagination),
					}
				: undefined,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(OffersResponse).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) return null;

		return parsed.data;
	},
};
