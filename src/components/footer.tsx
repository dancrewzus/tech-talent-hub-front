import { Link } from "react-router-dom";

const links: Array<{
	title: string;
	to: string;
}> = [
	{
		title: "Políticas de Privacidad",
		to: "/privacy-policies",
	},
	{
		title: "Términos de Uso",
		to: "/terms-of-use",
	},
	{
		title: "Sobre Nosotros",
		to: "/about-us",
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full bg-card-foreground/5 py-6">
			<div className="container flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
				<ul className="flex flex-col gap-4 lg:flex-row">
					{links.map((link) => (
						<li key={link.to}>
							<Link to={link.to}>{link.title}</Link>
						</li>
					))}
				</ul>

				<p>©{currentYear} Tech Talent Hub · Todos los derechos reservados.</p>
			</div>
		</footer>
	);
}
