import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
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
import CategoryTable from "../components/category-table";

export function CategoriesPage() {
	const { categories } = useCategories();

	console.log(categories);
	if (!categories) {
		return <div>Loading...</div>;
	}
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

							<CategoryForm />
						</DialogContent>
					</Dialog>
				}
			/>
			<CategoryTable data={categories?.data} />
		</Main>
	);
}
