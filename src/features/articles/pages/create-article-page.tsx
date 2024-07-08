import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";

import { ArticleForm } from "../components/article-form";

export function CreateArticlePage() {
	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Crear artículo"
				description="Comparte tu conocimiento a la comunidad"
			/>

			<ArticleForm />
		</Main>
	);
}
