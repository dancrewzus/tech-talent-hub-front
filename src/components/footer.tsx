import { Link } from "react-router-dom";

const links: Array<{
	title: string;
	to: string;
	modal: string;
}> = [
	{
		title: "Políticas de Privacidad",
		to: "/privacy-policies",
		modal: "privacy",
	},
	{
		title: "Términos de Uso",
		to: "/terms-of-use",
		modal: "terms",
	},
];

export function Footer({ setShowModal }) {
	const currentYear = new Date().getFullYear();

	const handleModalOpen = (modal: string) => {
		setShowModal(modal);
	  };

	return (
		<footer className="w-full border-t bg-background py-6">
			<div className="container flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
				<ul className="flex flex-col items-center gap-4 lg:flex-row">
					{links.map((link) => (
						<li key={link.to}>
						{link.modal ? (
						  <button
							className="text-muted-foreground transition-colors hover:text-foreground"
							onClick={() => handleModalOpen(link.modal!)}
						  >
							{link.title}
						  </button>
						) : (
						  <Link
							className="text-muted-foreground transition-colors hover:text-foreground"
							to={link.to}
						  >
							{link.title}
						  </Link>
						)}
					  </li>
					))}
				</ul>

				<p className="text-center text-muted-foreground">
					©{currentYear} Tech Talent Hub · Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}
