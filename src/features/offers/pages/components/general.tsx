import { Main } from "@/components/main";
//import { Label } from "@/components/ui/label";
//import { Input } from "@/components/ui/input";
//import { Button } from "@/components/ui/button"
import { SelectField } from "@/components/select-field";

export function General() {
	return (
		<Main className="flex w-full max-w-sm items-center space-x-2">
			{/* Area */}
			<SelectField
				id="area"
				labelProps={{
					children: "Área",
				}}
				options={[
					{
						label: "Opcion 1",
						value: "1",
					},
				]}
				selectProps={{
					defaultValue: "1",
				}}
			/>

			{/* Job */}

			{/* Level */}

			{/* Years of experience */}

			{/* Type */}

			{/* Tags */}

			{/* Salary */}

			{/* Hiring Date */}
		</Main>
	);
}
