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

/**
 * The countries to display.
 */
const countries = countriesJson.map((country) => ({
	label: country.translations.es ?? country.name,
	emoji: country.emoji,
	value: country.iso3,
}));

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

export function CountryDropdown({
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

	const selectedCountry = value
		? countries.find((country) => country.value === value)
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
						className="w-full justify-between"
					>
						{selectedCountry ? (
							<div>
								<span className="mr-2">{selectedCountry.emoji}</span>

								<span>{selectedCountry.label}</span>
							</div>
						) : (
							"Selecciona un pais"
						)}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-full p-0">
					<Command>
						<CommandInput
							placeholder="Busca un pais..."
							autoComplete="country-name"
						/>

						<CommandList>
							<CommandEmpty>No se encontró el pais.</CommandEmpty>

							<CommandGroup>
								<ScrollArea className="h-[300px] w-full">
									{countries.map((country) => (
										<CommandItem
											key={country.value}
											value={country.label}
											onSelect={() => {
												onSelect(country.value === value ? "" : country.value);
												setOpen(false);
											}}
										>
											<div className="w-full">
												<span className="mr-2">{country.emoji}</span>

												{country.label}
											</div>

											<Check
												className={cn(
													"ml-2 h-4 w-4",
													value === country.value ? "opacity-100" : "opacity-0",
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
