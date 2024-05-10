import { zodResolver } from "@hookform/resolvers/zod";
import { formatISO } from "date-fns";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UserRegister, UserRegisterType } from "@/models/user-register";

import { DatePickerField } from "@/components/date-picker-field";
import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

export function SignUpForm() {
	const {
		register,
		handleSubmit,
		setValue,
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
		console.log(user);
	};

	return (
		<form
			method="post"
			className="w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-4">
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

				<DatePickerField
					id="bday"
					labelProps={{
						children: "Fecha de nacimiento",
					}}
					onSelect={(date) =>
						setValue(
							"birthDate",
							date ? formatISO(date, { representation: "date" }) : "",
						)
					}
					disabled={(date) =>
						date > new Date() || date < new Date("1900-01-01")
					}
					errorMessage={errors.birthDate?.message}
				/>

				<TextField
					id="address"
					labelProps={{
						children: "Dirección",
					}}
					inputProps={{
						placeholder: "",
						autoComplete: "address-level1",
						type: "text",
						...register("address"),
					}}
					errorMessage={errors.address?.message}
				/>

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
