import { isErrorResponse } from "@/models/error-response";
import { type CreateOfferType, Offer, type OfferType } from "@/models/offer";
import { type QueryParamsType } from "@/models/query-params";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const offersApi = {
	/**
	 * Attempts to log an user into the hub.
	 *
	 * @param userCredentials - The user credentials to log in.
	 *
	 * @returns A promise that resolves to a session if login is successful.
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
	 * Returns the categories.
	 *
	 * @param query - The category query params.
	 *
	 * @returns A promise that resolves with the categories.
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
