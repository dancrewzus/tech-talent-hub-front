import { useState } from "react";

import { CheckboxField } from "@/components/checkbox-field";
import { CountryDropdown } from "@/components/country-dropdown";
import { CurrencyDropdown } from "@/components/currency-dropdown";
import { CurrencyInputField } from "@/components/currency-input-field";
import { SelectField } from "@/components/select-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

export function OfferForm() {
	const [country, setCountry] = useState("");
	const [currency, setCurrency] = useState("");

	return (
		<form className="space-y-6">
			<div className="space-y-4">
				<TextField
					id="title"
					labelProps={{
						children: "Título",
					}}
					inputProps={{
						placeholder: "ej: Frontend Developer",
					}}
				/>

				<TextField
					id="description"
					labelProps={{
						children: "Descripción",
					}}
					inputProps={{
						placeholder:
							"ej: Requerimos un frontend con habilidades técnicas en...",
					}}
				/>

				<TextField
					id="position"
					labelProps={{
						children: "Puesto",
					}}
					inputProps={{
						placeholder: "ej: Software Engineer",
					}}
				/>

				<div className="flex items-end gap-2">
					<SelectField
						id="area"
						className="w-full"
						labelProps={{
							children: "Área",
						}}
						options={[]}
						placeholder="Selecciona un área"
						selectProps={{}}
					/>

					<Button type="button" variant="outline">
						Administrar áreas
					</Button>
				</div>

				<TextField
					id="keywords"
					labelProps={{
						children: "Palabras clave",
					}}
					inputProps={{
						placeholder: "ej: JavaScript, React, Node.js",
					}}
				/>

				<TextField
					id="expirience"
					labelProps={{
						children: "Años de experiencia",
					}}
					inputProps={{
						type: "number",
						placeholder: "ej: 1",
					}}
				/>

				<CurrencyDropdown
					id="currency"
					labelProps={{
						children: "Moneda",
					}}
					description="Moneda usada para pagar al candidato"
					value={currency}
					onSelect={(value) => setCurrency(value)}
				/>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<CurrencyInputField
						id="salary_min"
						labelProps={{
							children: "Salario mínimo",
						}}
						inputProps={{
							defaultValue: "",
							decimalsLimit: 2,
							step: 1,
							placeholder: "ej: 400",
						}}
					/>

					<CurrencyInputField
						id="salary_max"
						labelProps={{
							children: "Salario máximo",
						}}
						inputProps={{
							defaultValue: "",
							placeholder: "ej: 600",
						}}
					/>
				</div>

				<TextField
					id="hiring_date"
					labelProps={{
						children: "Fecha de contratación",
					}}
					inputProps={{
						type: "date",
					}}
				/>

				<CountryDropdown
					id="country"
					labelProps={{
						children: "Pais",
					}}
					value={country}
					onSelect={(value) => setCountry(value)}
				/>

				<CheckboxField id="remote" labelProps={{ children: "Remoto" }} />
			</div>

			<Button type="submit">Crear oferta</Button>
		</form>
	);
}
