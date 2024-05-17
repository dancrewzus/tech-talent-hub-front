import { PrivacyPolicyModal } from "./privacy-policy-modal";
import { TermsOfUseModal } from "./terms-of-use-modal";
import { Dialog, DialogTrigger } from "./ui/dialog";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t bg-background py-6">
			<div className="container flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
				<ul className="flex flex-col items-center gap-4 lg:flex-row">
					<Dialog>
						<DialogTrigger asChild>
							<button className="text-muted-foreground transition-colors hover:text-foreground">
								Políticas de Privacidad
							</button>
						</DialogTrigger>

						<PrivacyPolicyModal />
					</Dialog>

					<Dialog>
						<DialogTrigger asChild>
							<button className="text-muted-foreground transition-colors hover:text-foreground">
								Términos de Uso
							</button>
						</DialogTrigger>

						<TermsOfUseModal />
					</Dialog>
				</ul>

				<p className="text-center text-muted-foreground">
					©{currentYear} Tech Talent Hub · Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}
