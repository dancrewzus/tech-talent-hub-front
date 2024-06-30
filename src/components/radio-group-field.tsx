import type { RadioGroupProps } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface Props<T extends string> extends RadioGroupProps {
	legendProps: Omit<React.LabelHTMLAttributes<HTMLLegendElement>, "className">;
	options: {
		label: string;
		value: T;
	}[];
	errorMessage?: string;
	className?: string;
	description?: string;
	isOptional?: boolean;
	value?: T;
	id: string;
	onValueChange?: (value: T) => void;
}

export function RadioGroupField<T extends string>({
	id,
	legendProps,
	description,
	errorMessage,
	className,
	options,
	isOptional = false,
	...radioGroupProps
}: Props<T>) {
	return (
		<fieldset className={cn("space-y-3", className)}>
			<div className="flex items-center justify-between">
				<Label asChild>
					<legend {...legendProps} />
				</Label>

				{isOptional ? (
					<span className="text-xs text-muted-foreground">Opcional</span>
				) : null}
			</div>

			{description ? (
				<p className="text-sm text-muted-foreground">{description}</p>
			) : null}

			<RadioGroup
				id={id}
				name={id}
				aria-invalid={Boolean(errorMessage)}
				{...radioGroupProps}
			>
				{options.map((option) => (
					<div className="flex items-center space-x-2" key={option.value}>
						<RadioGroupItem
							value={option.value}
							id={option.value}
							aria-label={option.label}
						/>

						<Label htmlFor={option.value}>{option.label}</Label>
					</div>
				))}
			</RadioGroup>

			<FormError message={errorMessage} />
		</fieldset>
	);
}
