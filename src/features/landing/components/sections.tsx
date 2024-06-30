import magnifyingGlassImage from "@/assets/magnifying_glass.webp";
import mouseImage from "@/assets/mouse.webp";
import stairsImage from "@/assets/stairs.webp";

interface Section {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}
const sections: Array<Section> = [
	{
		title: "Filtra empleos para ti",
		description: "Encuentra las mejores condiciones que se adaptan a ti",
		image: magnifyingGlassImage,
		imageAlt: "Lupa sobre una mesa azul",
	},
	{
		title: "Aplica rápidamente",
		description: "Tan simple como clicar un botón",
		image: mouseImage,
		imageAlt: "Ratón de ordenador",
	},
	{
		title: "Mira tu progreso",
		description: "Conoce sobre el estatus de tus postulaciones",
		image: stairsImage,
		imageAlt: "Escaleras de hormigón blanco con barandillas",
	},
];

export function Sections() {
	return (
		<section className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3">
			{sections.map((section) => (
				<SectionCard key={section.title} {...section} />
			))}
		</section>
	);
}

function SectionCard({ title, description, image, imageAlt }: Section) {
	return (
		<article className="space-y-4">
			<img
				src={image}
				height="230"
				width="100%"
				className="h-60 overflow-clip rounded-md object-cover"
				alt={imageAlt}
			/>

			<div className="space-y-2">
				<h2 className="text-xl font-medium text-foreground">{title}</h2>

				<p className="text-muted-foreground">{description}</p>
			</div>
		</article>
	);
}
