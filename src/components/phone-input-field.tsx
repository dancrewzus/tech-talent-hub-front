import es from "react-phone-number-input/locale/es";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { PhoneInput, type PhoneInputProps } from "./ui/phone-input";

interface Props {
	id: string;
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	inputProps: Omit<PhoneInputProps, "className" | "id" | "name">;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

export function PhoneInputField({
	id,
	labelProps,
	description,
	inputProps: { countrySelectProps, ...customInputProps },
	errorMessage,
	className,
	isOptional = false,
}: Props) {
	return (
		<div className={cn("space-y-2", className)}>
			<div className="flex items-center justify-between">
				<Label htmlFor={id} {...labelProps}></Label>

				{isOptional ? (
					<span className="text-sm text-muted-foreground">Opcional</span>
				) : null}
			</div>

			{description ? (
				<p className="text-sm text-muted-foreground">{description}</p>
			) : null}

			<PhoneInput
				id={id}
				name={id}
				aria-invalid={Boolean(errorMessage)}
				autoComplete="tel"
				labels={es}
				countrySelectProps={
					countrySelectProps ?? {
						emptyText: "No se encontró ningun país",
						inputPlaceholder: "Buscar país...",
					}
				}
				{...customInputProps}
			/>

			<FormError message={errorMessage} />
		</div>
	);
}
