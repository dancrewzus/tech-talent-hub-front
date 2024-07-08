import { Main } from "@/components/main";

import { TextSeparator } from "../auth/components/text-separator";
import { DeleteAccount } from "./components/delete-account";
import { ExperienceForm } from "./components/experience-form";
import { GeneralForm } from "./components/general-form";
import { HireableForm } from "./components/hireable-form";
import { NotificationsForm } from "./components/notifications-form";
import { PasswordUpdate } from "./components/password-update";

export function EditProfilePage() {
	return (
		<Main className="flax-col flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<h1 className="text-3xl font-semibold md:text-left">General</h1>

				<GeneralForm />

				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">
					Disponible para contratar
				</h1>

				<HireableForm />

				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">Experiencia</h1>

				<ExperienceForm />

				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">Seguridad</h1>

				<PasswordUpdate />

				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">Notificaciones</h1>

				<NotificationsForm />

				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">Eliminar cuenta</h1>
				<DeleteAccount />
			</div>
		</Main>
	);
}
