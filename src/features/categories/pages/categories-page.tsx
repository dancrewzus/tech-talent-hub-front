import type { ColumnDef } from "@tanstack/react-table";

import type { CategoryType } from "@/models/category";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { useCategories } from "@/hooks/use-categories";

import { CategoryForm } from "../components/category-form";

/** The category table columns */
const columns: Array<ColumnDef<CategoryType>> = [
	{
		accessorKey: "_id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
		cell: ({ row }) => row.getValue("_id"),
		enableSorting: false,
		enableHiding: false,
		size: 110,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nombre" />
		),
		cell: ({ row }) => <div>{row.getValue("name")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
];

export function CategoriesPage() {
	const { categories, refetchCategories } = useCategories();

	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Categorías"
				actions={
					<Dialog>
						<DialogTrigger asChild>
							<Button>Crear categoría</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Crear categoría</DialogTitle>

								<DialogDescription>
									Crea una nueva categoría para las ofertas
								</DialogDescription>
							</DialogHeader>

							<CategoryForm onCategoryCreated={refetchCategories} />
						</DialogContent>
					</Dialog>
				}
			/>

			<DataTable columns={columns} data={categories} />
		</Main>
	);
}
