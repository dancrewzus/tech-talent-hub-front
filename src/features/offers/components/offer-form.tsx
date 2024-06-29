import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import { offersApi } from "@/api/offers-api";

import { isErrorResponse } from "@/models/error-response";
import { CreateOffer, type CreateOfferType } from "@/models/offer";

import { CheckboxField } from "@/components/checkbox-field";
import { CountryDropdown } from "@/components/country-dropdown";
import { CurrencyDropdown } from "@/components/currency-dropdown";
import { CurrencyInputField } from "@/components/currency-input-field";
import { SelectField } from "@/components/select-field";
import { TextField } from "@/components/text-field";
import { TextareaField } from "@/components/textarea-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function OfferForm() {
	const { toast } = useToast();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateOfferType>({
		resolver: zodResolver(CreateOffer),
		defaultValues: {
			category: "",
			country: "VEN",
			currency: "USD",
			description: "",
			hiringDate: "",
			keywords: [],
			position: "",
			remote: true,
			title: "",
			typeOfContract: "",
		},
	});

	// Creates an offer.
	const onSubmit: SubmitHandler<CreateOfferType> = async (offer) => {
		const response = await offersApi.create(offer);

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
			title: "Oferta publicada",
		});
	};

	return (
		<form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-4">
				<TextField
					id="title"
					labelProps={{
						children: "Título",
					}}
					errorMessage={errors.title?.message}
					inputProps={{
						placeholder: "ej: Frontend Developer",
						...register("title"),
					}}
				/>

				<TextareaField
					id="description"
					labelProps={{
						children: "Descripción",
					}}
					errorMessage={errors.description?.message}
					textareaProps={{
						placeholder:
							"ej: Requerimos un frontend con habilidades técnicas en...",
						...register("description"),
					}}
				/>

				<TextField
					id="position"
					labelProps={{
						children: "Puesto",
					}}
					errorMessage={errors.position?.message}
					inputProps={{
						placeholder: "ej: Software Engineer",
						...register("position"),
					}}
				/>

				<Controller
					control={control}
					name="category"
					render={({ field, fieldState: { error } }) => {
						return (
							<SelectField
								id="area"
								className="w-full"
								labelProps={{
									children: "Área",
								}}
								options={[
									{
										label: "Hola",
										value: "hello",
									},
								]}
								placeholder="Selecciona un área"
								errorMessage={error?.message}
								selectProps={{
									value: field.value,
									onValueChange: field.onChange,
								}}
							/>
						);
					}}
				/>

				<Controller
					control={control}
					name="typeOfContract"
					render={({ field, fieldState: { error } }) => {
						return (
							<SelectField
								id="contract_type"
								className="w-full"
								labelProps={{
									children: "Tipo de contrato",
								}}
								errorMessage={error?.message}
								options={[
									{
										label: "Tiempo completo",
										value: "complete",
									},
									{
										label: "Tiempo parcial",
										value: "partial",
									},
									{
										label: "Plazo fijo",
										value: "fixed",
									},
									{
										label: "Freelancer",
										value: "freelance",
									},
								]}
								placeholder="Selecciona un área"
								selectProps={{
									value: field.value,
									onValueChange: field.onChange,
								}}
							/>
						);
					}}
				/>

				<TextField
					id="keywords"
					labelProps={{
						children: "Palabras clave",
					}}
					errorMessage={errors.keywords?.message}
					inputProps={{
						placeholder: "ej: JavaScript, React, Node.js",
						...register("keywords"),
					}}
				/>

				<TextField
					id="expirience"
					labelProps={{
						children: "Años de experiencia",
					}}
					errorMessage={errors.yearsOfExperience?.message}
					inputProps={{
						type: "number",
						placeholder: "ej: 1",
						...register("yearsOfExperience"),
					}}
				/>

				<Controller
					control={control}
					name="currency"
					render={({ field, fieldState: { error } }) => {
						return (
							<CurrencyDropdown
								id="currency"
								labelProps={{
									children: "Moneda",
								}}
								errorMessage={error?.message}
								description="Moneda usada para pagar al candidato"
								value={field.value}
								onSelect={(value) => field.onChange(value)}
							/>
						);
					}}
				/>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Controller
						control={control}
						name="salaryMin"
						render={({ field, fieldState: { error } }) => {
							return (
								<CurrencyInputField
									id="salary_min"
									labelProps={{
										children: "Salario mínimo",
									}}
									errorMessage={error?.message}
									inputProps={{
										defaultValue: "",
										decimalsLimit: 2,
										step: 1,
										placeholder: "ej: 400",
										value: field.value,
										onValueChange: field.onChange,
									}}
								/>
							);
						}}
					/>

					<Controller
						control={control}
						name="salaryMax"
						render={({ field, fieldState: { error } }) => {
							return (
								<CurrencyInputField
									id="salary_max"
									labelProps={{
										children: "Salario máximo",
									}}
									errorMessage={error?.message}
									inputProps={{
										defaultValue: "",
										decimalsLimit: 2,
										step: 1,
										placeholder: "ej: 600",
										value: field.value,
										onValueChange: field.onChange,
									}}
								/>
							);
						}}
					/>
				</div>

				<TextField
					id="hiring_date"
					labelProps={{
						children: "Fecha de contratación",
					}}
					errorMessage={errors.hiringDate?.message}
					inputProps={{
						type: "date",
						...register("hiringDate"),
					}}
				/>

				<Controller
					control={control}
					name="country"
					render={({ field, fieldState: { error } }) => {
						return (
							<CountryDropdown
								id="country"
								labelProps={{
									children: "Pais",
								}}
								errorMessage={error?.message}
								value={field.value}
								onSelect={(value) => field.onChange(value)}
							/>
						);
					}}
				/>

				<CheckboxField
					id="remote"
					labelProps={{
						children: "¿Es una oferta en remoto?",
						...register("remote"),
					}}
				/>
			</div>

			<Button type="submit">Crear oferta</Button>
		</form>
	);
}
