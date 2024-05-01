import { Button } from "@/components/ui/button";

const categories = [
	"Marketing",
	"Redes Sociales",
	"Desarrollo Web",
	"Análisis de Datos",
	"Diseño",
];

export function CategoriesSlider() {
	return (
		<section className="w-full">
			<ul className="flex w-full gap-4 overflow-x-scroll px-4">
				{categories.map((category) => (
					<li key={category}>
						<Button variant="outline">{category}</Button>
					</li>
				))}
			</ul>
		</section>
	);
}
