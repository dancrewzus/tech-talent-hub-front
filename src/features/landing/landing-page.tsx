import { BasePage } from "@/components/base-page";
import { Separator } from "@/components/ui/separator";

import { CategoriesSlider } from "./components/categories-slider";
import { Hero } from "./components/hero";
import { Sections } from "./components/sections";

export function LandingPage() {
	return (
		<BasePage className="mx-auto w-full max-w-screen-xl space-y-8 pb-12 sm:px-6 sm:pt-12">
			<Hero />

			<Separator />

			<CategoriesSlider />

			<Separator />

			<div className="px-6 sm:px-0">
				<Sections />
			</div>
		</BasePage>
	);
}
