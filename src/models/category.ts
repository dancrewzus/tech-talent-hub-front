import { z } from "zod";

export const Category = z.object({
	_id: z.string(),
	name: z.string().min(1, "Debe ingresar un nombre"),
});

export type CategoryType = z.infer<typeof Category>;

export const CreateCategory = Category.pick({ name: true });

export type CreateCategoryType = z.infer<typeof CreateCategory>;
