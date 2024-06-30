import { useLoaderData } from "react-router-dom";

import { QueryParams } from "@/models/query-params";

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

/**
 * Returns the category query paramaters.
 */
function loader() {
	const searchParams = new URLSearchParams(window.location.search);

	const query = QueryParams.safeParse({
		limit: searchParams.get("limit"),
		offset: searchParams.get("offset"),
		query: searchParams.get("query") ?? "",
	}).data;

	return { query };
}

export function CategoriesPage() {
	const { query } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
	const { categories } = useCategories(query);

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

			<pre>{JSON.stringify(categories, null, 2)}</pre>
		</Main>
	);
}

CategoriesPage.loader = loader;
