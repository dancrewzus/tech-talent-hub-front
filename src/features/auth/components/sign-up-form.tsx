import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { type Value } from "react-phone-number-input";
import { Navigate, useLocation } from "react-router-dom";

import { authApi } from "@/api/auth-api";

import { isErrorResponse } from "@/models/error-response";
import { UserRegister, type UserRegisterType } from "@/models/user-register";

import { PasswordField } from "@/components/password-field";
import { PhoneInputField } from "@/components/phone-input-field";
import { RadioGroupField } from "@/components/radio-group-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useSession } from "@/hooks/use-session";

export function SignUpForm() {
	const { session, update } = useSession();
	const location = useLocation();
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<UserRegisterType>({
		resolver: zodResolver(UserRegister),
		values: {
			address: "",
			birthDate: "",
			email: "",
			name: "",
			gender: "male",
			password: "",
			surname: "",
			profilePicture: "",
			phoneNumber: "",
			role: "",
		},
	});

	/// Navigate to other route because the user has an active session.
	if (session) {
		const search: string = location.state?.from?.search || "";
		const from: string = location.state?.from?.pathname || "/offers";

		return <Navigate to={from.concat(search)} />;
	}

	const onSubmit: SubmitHandler<UserRegisterType> = async (user) => {
		const response = await authApi.register(user);

		if (response === null || isErrorResponse(response)) {
			const messages: { [key: number]: string } = {
				400: "Ha ocurrido un error de validación",
				404: "Rol no encontrado",
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
			description: "Te has registrado con éxito",
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
						placeholder: "ej: johndoe@gmail.com",
						autoComplete: "email",
						type: "email",
						...register("email"),
					}}
					errorMessage={errors.email?.message}
				/>

				<Controller
					control={control}
					name="password"
					render={({ field }) => {
						return (
							<PasswordField
								id="password"
								labelProps={{
									children: "Contraseña",
								}}
								inputProps={{
									autoComplete: "new-password",
									value: field.value,
									onChange: field.onChange,
								}}
								errorMessage={errors.password?.message}
								showRequirements
							/>
						);
					}}
				/>

				<TextField
					id="name"
					labelProps={{
						children: "Nombre",
					}}
					inputProps={{
						placeholder: "ej: John",
						autoComplete: "given-name",
						type: "text",
						...register("name"),
					}}
					errorMessage={errors.name?.message}
				/>

				<TextField
					id="lastname"
					labelProps={{
						children: "Apellido",
					}}
					inputProps={{
						placeholder: "ej: Doe",
						autoComplete: "family-name",
						type: "text",
						...register("surname"),
					}}
					errorMessage={errors.surname?.message}
				/>

				<TextField
					id="bday"
					labelProps={{
						children: "Fecha de nacimiento",
					}}
					inputProps={{
						autoComplete: "bday",
						type: "date",
						max: dayjs().format("YYYY-MM-DD"),
						...register("birthDate"),
					}}
					errorMessage={errors.birthDate?.message}
				/>

				<Controller
					control={control}
					name="gender"
					render={({ field }) => {
						return (
							<RadioGroupField<UserRegisterType["gender"]>
								id="gender"
								legendProps={{
									children: "Género",
								}}
								options={[
									{
										label: "Masculino",
										value: "male",
									},
									{
										label: "Femenino",
										value: "female",
									},
								]}
								value={field.value}
								onValueChange={field.onChange}
								errorMessage={errors.gender?.message}
							/>
						);
					}}
				/>

				<Controller
					control={control}
					name="phoneNumber"
					render={({ field }) => {
						return (
							<PhoneInputField
								id="phone"
								labelProps={{ children: "Número de teléfono" }}
								inputProps={{
									value: field.value as Value,
									onChange: field.onChange,
									defaultCountry: "VE",
									placeholder: "",
									international: true,
								}}
								errorMessage={errors.phoneNumber?.message}
							/>
						);
					}}
				/>

				<TextField
					id="address"
					labelProps={{
						children: "Dirección",
					}}
					inputProps={{
						placeholder: "ej: Venezuela, Estado Bolívar",
						autoComplete: "address-level1",
						type: "text",
						...register("address"),
					}}
					errorMessage={errors.address?.message}
				/>
			</div>

			<Button className="w-full" disabled={isSubmitting}>
				{isSubmitting ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : null}

				<span>Registrarse</span>
			</Button>
		</form>
	);
}
