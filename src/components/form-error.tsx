import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function FormError({
	message,
	className = "",
	...props
}: HTMLAttributes<HTMLParagraphElement> & {
	message?: string;
}) {
	return message ? (
		<p {...props} className={cn("text-sm text-destructive", className)}>
			{message}
		</p>
	) : null;
}
