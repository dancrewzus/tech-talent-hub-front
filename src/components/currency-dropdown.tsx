import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import countriesJson from "@/data/countries.json";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface Props {
	id: string;
	labelProps?: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	value: string;
	onSelect: (value: string) => void;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

const currencies = Array.from(
	new Set(countriesJson.map((country) => country.currency)),
);

export function CurrencyDropdown({
	id,
	labelProps,
	description,
	value,
	onSelect,
	errorMessage,
	className,
	isOptional = false,
}: Props) {
	const [open, setOpen] = React.useState(false);

	const selectedCurrency = value
		? currencies.find((currency) => currency === value)
		: null;

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

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id={id}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Selecciona una moneda"
						className="w-full justify-between"
					>
						{selectedCurrency ? (
							<span>{selectedCurrency}</span>
						) : (
							"Selecciona una moneda"
						)}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-full p-0">
					<Command>
						<CommandInput
							placeholder="Busca una moneda..."
							autoComplete="country-name"
						/>

						<CommandList>
							<CommandEmpty>No se encontró la moneda.</CommandEmpty>

							<CommandGroup>
								<ScrollArea className="h-[300px] w-full">
									{currencies.map((currency) => (
										<CommandItem
											key={currency}
											value={currency}
											onSelect={() => {
												onSelect(currency === value ? "" : currency);
												setOpen(false);
											}}
										>
											<span>{currency}</span>

											<Check
												className={cn(
													"ml-2 h-4 w-4",
													value === currency ? "opacity-100" : "opacity-0",
												)}
											/>
										</CommandItem>
									))}

									<ScrollBar orientation="vertical" />
								</ScrollArea>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			<FormError message={errorMessage} />
		</div>
	);
}
