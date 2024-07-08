import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PasswordField } from "@/components/password-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const passwordSchema = z
	.object({
		password: z
			.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres"),
		newPassword: z
			.string()
			.min(8, "La nueva contraseña debe tener al menos 8 caracteres"),
		confirmPassword: z
			.string()
			.min(
				8,
				"La confirmación de la contraseña debe tener al menos 8 caracteres",
			),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

type PasswordSchemaType = z.infer<typeof passwordSchema>;

export function PasswordUpdate() {
	const { toast } = useToast();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<PasswordSchemaType>({
		resolver: zodResolver(passwordSchema),
	});

	const onSubmit: SubmitHandler<PasswordSchemaType> = async (
		passwordSchema,
	) => {
		console.log(passwordSchema);

		return toast({
			title: "Aviso",
			description: "Has cambiado tu contraseña con éxito",
		});
	};

	return (
		<form
			method="post"
			className="w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-4">
				<PasswordField
					id="password"
					labelProps={{
						children: "Actual Contraseña",
					}}
					inputProps={{
						placeholder: "",
						autoComplete: "password",
						...register("password"),
					}}
					errorMessage={errors.password?.message}
				/>
				<PasswordField
					id="newPassword"
					labelProps={{
						children: "Nueva Contraseña",
					}}
					inputProps={{
						autoComplete: "password",
						...register("newPassword"),
					}}
					errorMessage={errors.newPassword?.message}
				/>

				<PasswordField
					id="confirmPassword"
					labelProps={{
						children: "Confirmar Contraseña",
					}}
					inputProps={{
						autoComplete: "password",
						...register("confirmPassword"),
					}}
					errorMessage={errors.confirmPassword?.message}
				/>
				<br />

				<p className="text-sm text-muted-foreground">
					Debe contener al menos 15 carácteres u 8 incluidos números y
					minúsculas.
				</p>
			</div>
			<div className="mb-4 h-6 w-6 w-full">
				<Button disabled={isSubmitting}>
					{isSubmitting ? <Loader2 className="mr-2 animate-spin" /> : null}

					<span>Actualizar</span>
				</Button>
				<Button className="ml-2 mr-2" variant="outline">
					<span>Olvidé mi contraseña</span>
				</Button>
			</div>
		</form>
	);
}
