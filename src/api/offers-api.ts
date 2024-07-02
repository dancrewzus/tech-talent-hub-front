import { isErrorResponse } from "@/models/error-response";
import { type CreateOfferType, Offer, type OfferType } from "@/models/offer";
import { type QueryParamsType } from "@/models/query-params";

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
	 * @param query - The offers query params.
	 *
	 * @returns A promise that resolves with the offers.
	 */
	async getAll(query?: QueryParamsType): Promise<Array<OfferType>> {
		const response = await client("v1/offers", {
			method: "GET",
			searchParams: query
				? {
						offset: `${query.offset}`,
						limit: `${query.limit}`,
						filter: `${query.filter}`,
					}
				: undefined,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Offer.array()).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) return [];

		return parsed.data;
	},
};
