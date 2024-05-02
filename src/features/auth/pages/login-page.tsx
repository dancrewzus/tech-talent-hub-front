import { Link } from "react-router-dom";

import googleLogo from "@/assets/google.svg";

import { BasePage } from "@/components/base-page";
import { Button } from "@/components/ui/button";

import { LoginForm } from "../components/login-form";
import { TextSeparator } from "../components/text-separator";

export function LoginPage() {
	return (
		<BasePage className="flex flex-col items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl font-semibold md:text-center">
						Bienvenido de vuelta
					</h1>

					<p className="text-muted-foreground md:text-center">
						Ingresa tus credenciales para iniciar sesión
					</p>
				</div>

				<LoginForm />

				<TextSeparator>O continua con</TextSeparator>

				<Button className="grid w-full grid-cols-3" variant="outline">
					<img src={googleLogo} height={24} width={24} alt="Logo de Google" />

					<span className="font-medium">Google</span>
				</Button>

				<p className="text-center text-muted-foreground">
					¿No tienes una cuenta aún?{" "}
					<Link to="/sign-up" className="text-foreground">
						Regístrate
					</Link>
				</p>
			</div>
		</BasePage>
	);
}
