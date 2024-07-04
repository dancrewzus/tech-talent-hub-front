import { useLoaderData } from "react-router-dom";

import { Pagination } from "@/models/pagination";

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
 * Returns the category pagination paramaters.
 */
function loader() {
	const searchParams = new URLSearchParams(window.location.search);

	let json;

	try {
		json = JSON.parse(searchParams.get("pagination") ?? "");
	} catch (_) {
		json = {};
	}

	const query = Pagination.safeParse(json).data;

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
