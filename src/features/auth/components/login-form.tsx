import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useLocation } from "react-router-dom";

import { authApi } from "@/api/auth-api";

import { isErrorResponse } from "@/models/error-response";
import {
	UserCredentials,
	type UserCredentialsType,
} from "@/models/user-credentials";

import { CheckboxField } from "@/components/checkbox-field";
import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useSession } from "@/hooks/use-session";

export function LoginForm() {
	const { session, update } = useSession();
	const location = useLocation();
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<UserCredentialsType>({
		resolver: zodResolver(UserCredentials),
		values: {
			email: "",
			password: "",
		},
	});

	/// Navigate to other route because the user has an active session.
	if (session) {
		const search: string = location.state?.from?.search || "";
		const from: string = location.state?.from?.pathname || "/offers";

		return <Navigate to={from.concat(search)} />;
	}

	const onSubmit: SubmitHandler<UserCredentialsType> = async (
		loginCredentials,
	) => {
		const response = await authApi.login(loginCredentials);

		if (response === null || isErrorResponse(response)) {
			const messages: { [key: number]: string } = {
				400: "Email o contraseña invalidos",
				401: "Email o contraseña incorrectos",
				500: "Error interno",
			};

			return toast({
				title: "Ha ocurrido un error",
				description:
					response && messages[response.statusCode]
						? messages[response.statusCode]!
						: "Intente más tarde",
			});
		}

		// Logged in.
		update(response);

		return toast({
			title: "Bienvenido",
			description: "Has ingresado con éxito",
		});
	};

	return (
		<form
			method="post"
			className="w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-4">
				<TextField
					id="email"
					labelProps={{
						children: "Email",
					}}
					inputProps={{
						autoComplete: "email",
						placeholder: "ej: johndoe@gmail.com",
						type: "email",
						...register("email"),
					}}
					errorMessage={errors.email?.message}
				/>

				<PasswordField
					id="password"
					labelProps={{
						children: "Contraseña",
					}}
					inputProps={{
						autoComplete: "current-password",
						...register("password"),
					}}
					errorMessage={errors.password?.message}
				/>

				<div className="flex justify-between">
					<CheckboxField id="remember_me" title="Recuérdame" />

					<Button variant="ghost">¿Olvidaste tu contraseña?</Button>
				</div>
			</div>

			<Button className="w-full" disabled={isSubmitting}>
				{isSubmitting ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : null}

				<span>Iniciar Sesión</span>
			</Button>
		</form>
	);
}
