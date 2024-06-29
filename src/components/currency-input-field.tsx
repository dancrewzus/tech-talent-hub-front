import CurrencyInput, {
	type CurrencyInputProps,
} from "react-currency-input-field";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";

interface Props {
	id: string;
	labelProps?: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	inputProps?: Omit<CurrencyInputProps, "className" | "id" | "name">;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

export function CurrencyInputField({
	id,
	labelProps,
	description,
	inputProps,
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

			<CurrencyInput
				id={id}
				name={id}
				aria-invalid={Boolean(errorMessage)}
				className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				step={1}
				decimalsLimit={2}
				prefix="$"
				decimalSeparator=","
				groupSeparator="."
				{...inputProps}
			/>

			<FormError message={errorMessage} />
		</div>
	);
}
