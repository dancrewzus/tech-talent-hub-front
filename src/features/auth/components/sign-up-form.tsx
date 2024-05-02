import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

export function SignUpForm() {
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
	};

	return (
		<form method="post" className="w-full space-y-6" onSubmit={onSubmit}>
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

			<Button className="w-full">Registrarse</Button>
		</form>
	);
}
