import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { categoriesApi } from "@/api/categories-api";

import { CreateCategory, type CreateCategoryType } from "@/models/category";
import { isErrorResponse } from "@/models/error-response";

import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function CategoryForm() {
	const { toast } = useToast();

	const {
		register,
		formState: { isSubmitting, errors },
		handleSubmit,
	} = useForm<CreateCategoryType>({
		resolver: zodResolver(CreateCategory),
		values: {
			name: "",
		},
	});

	// Create a category.
	const onSubmit: SubmitHandler<CreateCategoryType> = async (category) => {
		const response = await categoriesApi.create(category);

		if (!response || isErrorResponse(response)) {
			const messages: { [key: number]: string } = {};

			return toast({
				title: "Ha ocurrido un error",
				description:
					response && messages[response.statusCode]
						? messages[response.statusCode]!
						: "Intente más tarde",
			});
		}

		toast({
			title: "Categoría creada",
		});
	};

	return (
		<form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
			<TextField
				id="name"
				labelProps={{
					children: "Nombre",
				}}
				errorMessage={errors.name?.message}
				inputProps={{
					placeholder: "ej: Desarrollo",
					...register("name"),
				}}
			/>

			<Button disabled={isSubmitting} className="w-full">
				{isSubmitting ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : null}

				<span>Crear categoría</span>
			</Button>
		</form>
	);
}
