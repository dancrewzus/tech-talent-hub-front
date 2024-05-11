import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import { authApi } from "@/api/auth-api";

import { isErrorResponse } from "@/models/error-response";
import { UserRegister, type UserRegisterType } from "@/models/user-register";

import { PasswordField } from "@/components/password-field";
import { RadioGroupField } from "@/components/radio-group-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function SignUpForm() {
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
			firstName: "",
			gender: "male",
			password: "",
			paternalSurname: "",
			profilePicture: "",
		},
	});

	const onSubmit: SubmitHandler<UserRegisterType> = async (user) => {
		const response = await authApi.register(user);

		if (response === null || isErrorResponse(response)) {
			return toast({
				title: "Ha ocurrido un error",
				description: "Intente más tarde",
			});
		}

		// Logged in.
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

				<PasswordField
					id="password"
					labelProps={{
						children: "Contraseña",
					}}
					inputProps={{
						autoComplete: "new-password",
						...register("password"),
					}}
					errorMessage={errors.password?.message}
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
						...register("firstName"),
					}}
					errorMessage={errors.firstName?.message}
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
						...register("paternalSurname"),
					}}
					errorMessage={errors.paternalSurname?.message}
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
