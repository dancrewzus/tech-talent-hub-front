import { Main } from "@/components/main";

import { Sidebar } from "./components/sidebar";

export function ArticlesCreate() {
	return (
		<Main className="mx-auto w-full max-w-screen-xl space-y-8 pb-12 sm:px-6 sm:pt-12">
			<Sidebar></Sidebar>
		</Main>
	);
}
