import { CheckboxField } from "@/components/checkbox-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

export function LoginForm() {
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
	};

	return (
		<form method="post" className="w-full space-y-6" onSubmit={onSubmit}>
			<div className="space-y-4">
				<TextField
					id="email"
					labelProps={{
						children: "Email",
					}}
					inputProps={{
						placeholder: "ej: johndoe@gmail.com",
						autoComplete: "email",
						type: "email",
					}}
				/>

				<TextField
					id="password"
					labelProps={{
						children: "Contraseña",
					}}
					inputProps={{
						autoComplete: "email",
						type: "email",
					}}
				/>

				<div className="flex justify-between">
					<CheckboxField
						id="remember_me"
						labelProps={{ children: "Recuerdame" }}
					/>

					<Button variant="ghost">¿Olvidate tu contraseña?</Button>
				</div>
			</div>

			<Button className="w-full">Registrarse</Button>
		</form>
	);
}
