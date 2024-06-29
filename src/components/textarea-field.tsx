import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Props {
	id: string;
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	textareaProps?: Omit<
		React.InputHTMLAttributes<HTMLTextAreaElement>,
		"className" | "id" | "name"
	>;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

export function TextareaField({
	id,
	labelProps,
	description,
	textareaProps,
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

			<Textarea
				id={id}
				name={id}
				aria-invalid={Boolean(errorMessage)}
				{...textareaProps}
			/>

			<FormError message={errorMessage} />
		</div>
	);
}
