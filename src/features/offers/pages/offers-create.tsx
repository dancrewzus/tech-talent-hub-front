import { Main } from "@/components/main";

import { General } from "./components/general";
import { Sidebar } from "./components/sidebar";

export function OffersCreate() {
	return (
		<Main className="mx-auto w-full max-w-screen-xl space-y-8 pb-12 sm:px-6 sm:pt-12">
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<div>
					<Sidebar></Sidebar>
				</div>
				<div>
					<General></General>
				</div>
			</div>
		</Main>
	);
}
