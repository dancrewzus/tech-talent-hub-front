import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props {
	id: string;
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	inputProps: Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"className" | "id" | "name"
	>;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

export function TextField({
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

			<Input
				id={id}
				name={id}
				aria-invalid={Boolean(errorMessage)}
				{...inputProps}
			/>

			<FormError message={errorMessage} />
		</div>
	);
}
