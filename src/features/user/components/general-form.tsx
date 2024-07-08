import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { type Value } from "react-phone-number-input";

import { UserInfo, type UserInfoType } from "@/models/user-info";

import { PhoneInputField } from "@/components/phone-input-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import AddItem from "./add-item";

export function GeneralForm() {
	const [avatar, setAvatar] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		//watch,
	} = useForm<UserInfoType>({
		resolver: zodResolver(UserInfo),
		values: {
			address: "",
			email: "",
			firstName: "",
			password: "",
			paternalSurname: "",
			profilePicture: "",
			curriculum: "",
			phoneNumber: "",
			headline: "",
			role: "",
			bio: "",
			projects: [{ title: "", description: "" }],
			tags: [{ title: "" }],
			studies: [{ title: "", description: "" }],
			newPassword: [],
		},
	});

	const onSubmit: SubmitHandler<UserInfoType> = async () => {};

	//In case of avatar was not an image, then could be initials of the name
	/*
	const firstName = watch("firstName") || "";
	const paternalSurname = watch("paternalSurname") || "";

	const initials =
		`${firstName.charAt(0)}${paternalSurname.charAt(0)}`.toUpperCase();
	*/

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setAvatar(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<form
			method="post"
			className="w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-4">
				<div className="flex items-center justify-center">
					<Avatar>
						<AvatarImage
							className="gap-10px mb-0.5 h-20 w-20 rounded-full object-cover shadow-md"
							src={
								avatar ||
								"https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo-thumbnail.png"
							}
						/>
						{/*Just in case of avatar was not an image*/}
						{/*<AvatarFallback>{initials}</AvatarFallback>*/}
					</Avatar>
				</div>
				<div className="mb-5 flex items-center justify-center">
					<Input
						id="picture"
						type="file"
						onChange={handleAvatarChange}
						className="gap-10px w-45 mb-0.5 h-10 rounded-lg"
					/>
				</div>

				<br />

				<div className="flex flex-row">
					<TextField
						id="name"
						className="mr-2 w-full"
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
						className="ml-2 w-full"
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
				</div>
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
					id="headline"
					labelProps={{
						children: "Línea de trabajo",
					}}
					inputProps={{
						placeholder: "",
						autoComplete: "given-name",
						type: "text",
						...register("headline"),
					}}
					errorMessage={errors.headline?.message}
				/>
				<div key="bio" className="grid w-full gap-1.5">
					<Label
						htmlFor="bio"
						className="peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
					>
						Bio
					</Label>
					<Textarea placeholder="" id="bio" {...register("bio")} />
				</div>
			</div>

			<Label
				htmlFor="tag"
				className="peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
			>
				Etiquetas
			</Label>
			<AddItem />

			<div className="h-6 w-6 w-full">
				<Button disabled={isSubmitting}>
					{isSubmitting ? <Loader2 className="mr-2 animate-spin" /> : null}

					<span>Guardar cambios</span>
				</Button>
			</div>
		</form>
	);
}
