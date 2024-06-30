import type { ScrollAreaProps } from "@radix-ui/react-scroll-area";
import type { SelectProps } from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface Props {
	id: string;
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	selectProps: Omit<SelectProps, "className" | "name">;
	options: {
		label: React.ReactNode | React.ReactNode[];
		value: string;
	}[];
	placeholder?: string;
	errorMessage?: string;
	className?: string;
	scrollAreaProps?: ScrollAreaProps;
}

export function SelectField({
	className,
	id,
	selectProps,
	labelProps,
	placeholder = "Seleccione una opción",
	options,
	errorMessage,
	scrollAreaProps,
}: Props) {
	return (
		<div className={cn("space-y-2", className)}>
			<Label htmlFor={id} {...labelProps} />

			<Select name={id} {...selectProps}>
				<SelectTrigger id={id} aria-label={placeholder}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>

				<SelectContent>
					<ScrollArea
						{...scrollAreaProps}
						className={cn("max-h-[250px]", scrollAreaProps?.className)}
					>
						{options.map(({ label, value }) => (
							<SelectItem key={value} value={value}>
								{label}
							</SelectItem>
						))}
					</ScrollArea>
				</SelectContent>
			</Select>

			<FormError message={errorMessage} />
		</div>
	);
}
