import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
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
import { columns } from "../components/columns";

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
