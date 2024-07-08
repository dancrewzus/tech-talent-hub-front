import { Link } from "react-router-dom";

import { Main } from "@/components/main";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export function ArticlesPage() {
	return (
		<Main className="container space-y-6 py-8">
			<SectionHeader
				title="Artículos"
				actions={
					<Button asChild>
						<Link to="create">Crear artículo</Link>
					</Button>
				}
			/>
		</Main>
	);
}
