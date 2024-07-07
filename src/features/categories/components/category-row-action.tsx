import type { CellContext } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

import { categoriesApi } from "@/api/categories-api";

import type { CategoryType } from "@/models/category";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

import { useCategories } from "@/hooks/use-categories";

import { CategoryForm } from "./category-form";

export function CategoryRowAction({ row }: CellContext<CategoryType, unknown>) {
	const { refetchCategories } = useCategories();
	const { toast } = useToast();

	return (
		<div className="flex justify-end">
			<Dialog>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost">
							<span className="sr-only">Abrir menú</span>

							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuItem asChild>
							<DialogTrigger
								className="w-full
                "
							>
								<Pencil className="mr-2 h-4 w-4" />

								<span>Editar</span>
							</DialogTrigger>
						</DropdownMenuItem>

						<DropdownMenuItem
							className="text-red-500"
							onClick={() => {
								categoriesApi.delete(row.original._id).then((didDelete) => {
									if (!didDelete) return;

									refetchCategories();

									toast({
										title: "Categoría eliminada",
									});
								});
							}}
						>
							<Trash className="mr-2 h-4 w-4" />

							<span>Eliminar</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				{/* The edit offer form. */}
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Editar categoría</DialogTitle>

						<DialogDescription>Edita la categoría existente</DialogDescription>
					</DialogHeader>

					<CategoryForm
						category={row.original}
						onCategoryCreated={refetchCategories}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
}
