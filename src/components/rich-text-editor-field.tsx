import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";

interface Props {
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	editorProps?: Omit<
		ComponentProps<typeof CKEditor>,
		"className" | "id" | "editor"
	>;
	errorMessage?: string;
	description?: string;
	className?: string;
	isOptional?: boolean;
}

export function RichTextEditorField({
	labelProps,
	description,
	editorProps,
	errorMessage,
	className,
	isOptional = false,
}: Props) {
	return (
		<div className={cn("space-y-2", className)}>
			<div className="flex items-center justify-between">
				<Label {...labelProps}></Label>

				{isOptional ? (
					<span className="text-sm text-muted-foreground">Opcional</span>
				) : null}
			</div>

			{description ? (
				<p className="text-sm text-muted-foreground">{description}</p>
			) : null}

			<CKEditor editor={ClassicEditor} {...editorProps} />

			<FormError message={errorMessage} />
		</div>
	);
}
