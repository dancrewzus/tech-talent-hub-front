import { ImageUpload } from "@/models/image-upload";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const imagesApi = {
	/**
	 * Uploads the encoded image.
	 *
	 * @param image - The base64 image.
	 *
	 * @returns A promise that resolves to an uploaded image on success.
	 */
	async upload(image: string) {
		const response = await client("v1/images", {
			method: "POST",
			body: {
				base64: image,
				type: "client",
			},
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(ImageUpload).safeParse(json);

		return parsed.success ? parsed.data : null;
	},
};
