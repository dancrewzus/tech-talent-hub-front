import { type CreateOfferType, Offer } from "@/models/offer";

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
};
