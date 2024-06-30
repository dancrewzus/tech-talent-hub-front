import { z } from "zod";

export const ImageUpload = z.object({
	imageUrl: z.string().url(),
	publicId: z.string(),
	width: z.number(),
	height: z.number(),
});

export type ImageUploadType = z.infer<typeof ImageUpload>;
