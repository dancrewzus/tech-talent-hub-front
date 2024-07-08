import { RichTextEditorField } from "@/components/rich-text-editor-field";
import { SelectField } from "@/components/select-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

import { useCategories } from "@/hooks/use-categories";

export function ArticleForm() {
	const { categories } = useCategories();

	return (
		<form className="w-full space-y-6">
			<div className="space-y-4">
				<SelectField
					id="category"
					labelProps={{
						children: "Categoría",
					}}
					options={categories.map((category) => ({
						label: category.name,
						value: `${category._id}`,
					}))}
					selectProps={{}}
					placeholder="Selecciona una categoría"
				/>

				<TextField
					id="title"
					labelProps={{
						children: "Título",
					}}
					inputProps={{
						placeholder: "ej: ¿Cómo instalar NPM?",
					}}
				/>

				<RichTextEditorField
					labelProps={{
						children: "Contenido",
					}}
				/>

				<TextField
					id="tags"
					labelProps={{
						children: "Etiquetas",
					}}
					inputProps={{
						placeholder: "ej: JavaScript, TypeScript, NPM",
					}}
				/>
			</div>

			<Button>Guardar cambios</Button>
		</form>
	);
}
