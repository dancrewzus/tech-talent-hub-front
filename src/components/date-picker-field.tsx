import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";

interface Props {
	id: string;
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	placeholder?: string;
	selected?: Date;
	onSelect: (date?: Date) => void;
	disabled?: (date: Date) => boolean;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
	dateFormat?: string;
}

export function DatePickerField({
	id,
	className,
	labelProps,
	description,
	placeholder,
	selected,
	onSelect,
	errorMessage,
	disabled,
	dateFormat = "PPP",
	isOptional = false,
}: Props) {
	const [date, setDate] = React.useState(selected);

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

			<Popover>
				<PopoverTrigger asChild>
					<Button
						id={id}
						variant={"outline"}
						className={cn(
							"w-full justify-start text-left font-normal",
							!date && "text-muted-foreground",
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />

						{date ? (
							format(date, dateFormat)
						) : (
							<span>{placeholder ?? "Selecciona una fecha"}</span>
						)}
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						locale={es}
						selected={date}
						onSelect={(date) => {
							setDate(date);
							onSelect(date);
						}}
						disabled={disabled}
						initialFocus
					/>
				</PopoverContent>
			</Popover>

			<FormError message={errorMessage} />
		</div>
	);
}
