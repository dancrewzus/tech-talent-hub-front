import { Main } from "@/components/main";
import { SelectField } from "@/components/select-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function General() {
	return (
		<Main className="flex w-full max-w-sm flex-col space-y-4">
			<h5>General</h5>
			{/* Area */}
			<div className="flex items-center space-x-2">
				<div className="flex flex-col space-y-2">
					<Label>Area</Label>
					<SelectField
						id="area"
						labelProps={{
							children: "",
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
				</div>
				<div className="mt-6">
					<Button type="button">Manage areas</Button>
				</div>
			</div>

			{/* Job */}
			<div className="flex flex-col space-y-2">
				<Label>Job</Label>
				<Input type="text" />
			</div>

			{/* Level */}
			<div className="flex flex-col space-y-2">
				<SelectField
					id="level"
					labelProps={{
						children: "Level",
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
			</div>

			{/* Years of experience */}
			<div className="flex flex-col space-y-2">
				<Label>Years of experience</Label>
				<Input type="text" />
			</div>

			{/* Type */}
			<div className="flex flex-col space-y-2">
				<SelectField
					id="type"
					labelProps={{
						children: "Type",
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
			</div>

			{/* Tags */}
			<div className="flex flex-col space-y-2">
				<Label>Tags</Label>
				<Input type="text" />
			</div>

			{/* Salary */}
			<div className="flex flex-col space-y-2">
				<Label>Salary</Label>
				<Input type="text" />
			</div>

			{/* Hiring Date */}
			<div className="flex flex-col space-y-2">
				<Label>Hiring date</Label>
				<div className="flex space-x-2">
					<SelectField
						id="hiring-date-day"
						labelProps={{
							children: "",
						}}
						options={[
							{
								label: "Day",
								value: "1",
							},
						]}
						selectProps={{
							defaultValue: "1",
						}}
					/>
					<SelectField
						id="hiring-date-month"
						labelProps={{
							children: "",
						}}
						options={[
							{
								label: "Month",
								value: "1",
							},
						]}
						selectProps={{
							defaultValue: "1",
						}}
					/>
					<SelectField
						id="hiring-date-year"
						labelProps={{
							children: "",
						}}
						options={[
							{
								label: "Year",
								value: "2023",
							},
						]}
						selectProps={{
							defaultValue: "2023",
						}}
					/>
				</div>
			</div>

			<Button type="submit">Save changes</Button>
		</Main>
	);
}
