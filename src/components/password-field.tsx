import { Check, EyeIcon, EyeOffIcon, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Button } from "./ui/button";
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
		"className" | "id" | "name" | "type"
	>;
	errorMessage?: string;
	description?: string;
	className?: string;
	showRequirements?: boolean;
}

export function PasswordField({
	id,
	labelProps,
	description,
	inputProps,
	errorMessage,
	className,
	showRequirements = false,
}: Props) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={cn("space-y-2", className)}>
			<Label htmlFor={id} {...labelProps}></Label>

			{description ? (
				<p className="text-sm text-muted-foreground">{description}</p>
			) : null}

			<div className="relative">
				<Input
					id={id}
					name={id}
					aria-invalid={Boolean(errorMessage)}
					className="pr-12"
					type={showPassword ? "text" : "password"}
					{...inputProps}
				/>

				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
					onClick={() => setShowPassword((prev) => !prev)}
				>
					{showPassword ? (
						<EyeIcon className="h-4 w-4" aria-hidden="true" />
					) : (
						<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
					)}

					<span className="sr-only">
						{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
					</span>
				</Button>
			</div>

			<FormError message={errorMessage} />

			{showRequirements ? (
				<Requirements
					value={typeof inputProps.value === "string" ? inputProps.value : ""}
				/>
			) : null}
		</div>
	);
}

function Requirements({ value }: { value: string }) {
	const requirements: Array<{ title: string; isValid: () => boolean }> = [
		{ title: "6 o más caracteres", isValid: () => value.length >= 6 },
		{
			title: "Contiene una letra mayúscula",
			isValid: () => /[A-Z]{1,}/.test(value),
		},
		{
			title: "Contiene una letra minúscula",
			isValid: () => /[a-z]{1,}/.test(value),
		},
		{
			title: "Contiene un número",
			isValid: () => /[0-9]{1,}/.test(value),
		},
	];

	return (
		<ul className="space-y-1">
			{requirements.map((requirement) => {
				const isValid = requirement.isValid();

				return (
					<li key={requirement.title} className="flex items-center gap-2">
						{isValid ? (
							<Check className="h-4 w-4 text-green-400" />
						) : (
							<X className="h-4 w-4" />
						)}

						<span
							className={cn(
								"text-sm",
								isValid ? "text-green-400" : "text-muted-foreground",
							)}
						>
							{requirement.title}
						</span>
					</li>
				);
			})}
		</ul>
	);
}
