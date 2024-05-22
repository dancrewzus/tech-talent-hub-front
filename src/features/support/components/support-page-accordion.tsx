import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionSupport() {
	return (
		<div className="accordion-container class=gb-blog__list-content space-y-4">
			<Accordion
				type="single"
				collapsible
				className="gb-blog__text full-width w-full"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>Administrar mi perfil</AccordionTrigger>
					<AccordionContent>
						<div>
							<span className="gb-rich-txt mb1" itemProp="articleBody">
								En general, todos los miembros que se conecten a T.T.H (Tech
								Talent Hub) pueden ver tu perfil completo. Sin embargo, si se
								puede controlar lo que aparece en su perfil, las notificaciones
								a su red y las preferencias de privacidad de su perfil. También
								puede editar su perfil o mostrar su experiencia y educación o
								agregar recomendaciones y habilidades para resaltar detalles
								como su experiencia.
							</span>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Editar / Eliminar perfil</AccordionTrigger>
					<AccordionContent>
						Haz clic en el icono de <strong>Usuario</strong> en la parte
						superior derecha de tu página de inicio de Tech Talent Hub y, a
						continuación, haz clic en <strong>Ver perfil</strong>.
						<li className="text-align: justify">
							Para editar tu perfil: Haz clic en la opción{" "}
							<strong>Editar</strong> que está junto a la sección que deseas
							modificar. Realiza cambios en los campos proporcionados. Haz clic
							en <strong>Guardar</strong>.
						</li>
						<li className="text-align: justify">
							Para eliminar tu perfil: Ingresa a{" "}
							<strong> Configuraciones</strong> de la cuenta y Haz clic sobre la
							opción de <strong>Eliminar Cuenta</strong>. Se te pedirá que
							ingreses la contraseña de tu cuenta.
						</li>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Consejos de seguridad</AccordionTrigger>
					<AccordionContent>
						A continuación se presentan algunas recomendaciones para mantener tu
						cuenta segura:
						<li>
							Usa una contraseña segura. La contraseña debe ser única para cada
							cuenta. Debe tener una combinación de caracteres entre letras y
							números, puede contener caracteres especiales. Contendrá al menos
							6 o más caracteres, una letra mayúscula, una letra minúscula, un
							número. La contraseña no debería de contener nombre, número de
							teléfono o dirección de correo electrónico.
						</li>{" "}
						<li>
							Mantén tus contraseñas seguras y privadas asegurándote de que
							ninguna otra persona tenga acceso a ellas. Considera utilizar un
							gestor de contraseñas.{" "}
						</li>
						<li>Conecta solo con personas de confianza.</li>
						<li>
							Verifica la dirección de email asociada a tu cuenta de Tech Talent
							Hub.
						</li>
						<li>
							Denuncia si tienes problemas de seguridad como phishing o si
							recibes mensajes sospechosos.
						</li>
						<li>Mantén actualizado tu programa de antivirus.</li>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>Buscar y solicitar empleo</AccordionTrigger>
					<AccordionContent>
						Cuando solicites un empleo, el anunciante del empleo tendrá la
						opción de revisar tu solicitud. Podrás recibir actualizaciones de la
						solicitud cuando el anunciante vea la solicitud o se descargue tu
						currículum.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
