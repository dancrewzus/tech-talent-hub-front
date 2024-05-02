import { Link } from "react-router-dom";

import googleLogo from "@/assets/google.svg";

import { BasePage } from "@/components/base-page";
import { Button } from "@/components/ui/button";

import { SignUpForm } from "../components/sign-up-form";
import { TextSeparator } from "../components/text-separator";

export function SignUpPage() {
	return (
		<BasePage className="flex flex-col items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl font-semibold md:text-center">Regístrate</h1>

					<p className="text-muted-foreground md:text-center">Comencemos</p>
				</div>

				<SignUpForm />

				<TextSeparator>O continua con</TextSeparator>

				<Button className="grid w-full grid-cols-3" variant="outline">
					<img src={googleLogo} height={24} width={24} alt="Logo de Google" />

					<span className="font-medium">Google</span>
				</Button>

				<p className="text-center text-muted-foreground">
					¿Ya tienes una cuenta?{" "}
					<Link to="/login" className="text-foreground">
						Inicia sesión
					</Link>
				</p>
			</div>
		</BasePage>
	);
}
