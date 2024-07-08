import { Main } from "@/components/main";
import { SelectField } from "@/components/select-field";
import MyRichTextEditor from "@/components/text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function General() {
	return (
		<Main className="flex w-full max-w-sm flex-col space-y-4">
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

			{/*Titulo */}
			<div className="flex flex-col space-y-2">
				<Label>Titulo</Label>
				<Input type="text" />
			</div>

			<div className="flex flex-col space-y-2">
				<Label>Content</Label>
				<MyRichTextEditor></MyRichTextEditor>
			</div>

			{/* Tags */}
			<div className="flex flex-col space-y-2">
				<Label>Tags</Label>
				<Input type="text" />
			</div>

			<Button type="submit">Save changes</Button>
		</Main>
	);
}
