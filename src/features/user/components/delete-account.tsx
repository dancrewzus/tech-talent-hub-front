import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

export function DeleteAccount() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: ["recents", "home"],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div className="w-full max-w-lg space-y-8">
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div>
					<Label
						htmlFor="deleteAccount"
						className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						¿Deseas eliminar tu cuenta?
					</Label>
					<p className="text-sm text-muted-foreground">
						Esta acción no puede revertirse. Por favor asegurate primero.
					</p>
				</div>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button type="button">Eliminar cuenta</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogTitle>Confirmar eliminación</AlertDialogTitle>
						<AlertDialogDescription>
							¿Estás seguro que deseas eliminar tu cuenta? Esta acción no se
							puede deshacer.
						</AlertDialogDescription>
						<div className="flex justify-end space-x-2">
							<AlertDialogCancel asChild>
								<Button variant="secondary">Cancelar</Button>
							</AlertDialogCancel>
							<AlertDialogAction asChild>
								<Button
									type="button"
									onClick={() => {
										form.handleSubmit(onSubmit)();
									}}
								>
									Eliminar
								</Button>
							</AlertDialogAction>
						</div>
					</AlertDialogContent>
				</AlertDialog>
			</form>
		</div>
	);
}
