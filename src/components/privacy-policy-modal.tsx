import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const toc: Array<{ title: string; id: string }> = [
	{
		title: "Recopilación de información personal",
		id: "#collection-of-personal-information",
	},
	{
		title: "Uso y procesamiento de la información recopilada",
		id: "#use-and-processing-of-collected-information",
	},
	{
		title: "Gestión de información",
		id: "#managing-information",
	},
	{
		title: "Divulgación de información",
		id: "#disclosure-of-information",
	},
	{
		title: "Privacidad de los niños",
		id: "#privacy-of-children",
	},
	{
		title: "Señales de No Rastrear",
		id: "#do-not-track-signals",
	},
	{
		title: "Funciones de redes sociales",
		id: "#social-media-features",
	},
	{
		title: "Notificaciones push",
		id: "#push-notifications",
	},
	{
		title: "Enlaces a otros recursos",
		id: "#links-to-other-resources",
	},
	{
		title: "Seguridad de la información",
		id: "#information-security",
	},
	{
		title: "Violación de datos",
		id: "#data-breach",
	},
	{
		title: "Cambios y modificaciones",
		id: "#changes-and-amendments",
	},
	{
		title: "Aceptación de esta política",
		id: "#acceptance-of-this-policy",
	},
	{
		title: "Contáctanos",
		id: "#contacting-us",
	},
];

export function PrivacyPolicyModal() {
	return (
		<DialogContent className="overflow-auto sm:w-full sm:max-w-xl">
			<DialogHeader>
				<DialogTitle className="text-2xl">Políticas de Privacidad</DialogTitle>
			</DialogHeader>

			<div className="space-y-4">
				<p>
					Respetamos tu privacidad y nos comprometemos a protegerla mediante el
					cumplimiento de esta política de privacidad (Política). Esta Política
					describe los tipos de información que podemos recopilar de ti o que
					puedes proporcionar (Información Personal) en el sitio web{" "}
					<a href="https://talenthub.com">talenthub.com</a> y cualquiera de sus
					productos y servicios relacionados, así como nuestras prácticas para
					recopilar, usar, mantener, proteger y divulgar esa Información
					Personal. También describe las opciones disponibles para ti con
					respecto al uso de tu Información Personal y cómo puedes acceder y
					actualizarla.
				</p>

				<p>
					Esta Política es un acuerdo legalmente vinculante entre el usuario y
					el operador de este Sitio web. Si estás aceptando esta Política en
					nombre de una empresa u otra entidad legal, representas que tienes la
					autoridad para vincular a dicha entidad con esta Política, en cuyo
					caso los términos Usuario, tú o tu se referirán a dicha entidad. Si no
					tienes tal autoridad o no estás de acuerdo con los términos de esta
					Política, no debes aceptar esta Política y no puedes acceder ni usar
					el Sitio web y los Servicios. Al acceder y usar el Sitio web y los
					Servicios, reconoces que has leído, entendido y aceptado quedar sujeto
					a los términos de esta Política. Esta Política no se aplica a las
					prácticas de las empresas que no poseemos o controlamos, ni a las
					personas que no empleamos o gestionamos.
				</p>

				<section className="space-y-2">
					<h3 className="text-xl font-bold">Tabla de Contenido</h3>

					<ol className="list-disc px-6">
						{toc.map((content) => (
							<li key={content.id} className="hover:underline">
								<a href={content.id}>{content.title}</a>
							</li>
						))}
					</ol>
				</section>

				<section className="space-y-2">
					<h3
						className="text-xl font-bold"
						id="collection-of-personal-information"
					>
						Recopilación de información personal
					</h3>

					<p>
						Puede acceder y utilizar el Sitio web y los Servicios sin decirnos
						quién es usted ni revelar ninguna información mediante la cual
						alguien pudiera identificarlo como un individuo específico y
						reconocible. Sin embargo, si desea utilizar algunas de las funciones
						ofrecidas en el Sitio web, es posible que se le solicite que
						proporcione cierta Información Personal (por ejemplo, su nombre y
						dirección de correo electrónico).
					</p>
					<p>
						Recibimos y almacenamos cualquier información que nos proporcione
						deliberadamente cuando crea una cuenta o completa cualquier
						formulario en el Sitio web. Cuando sea necesario, esta información
						puede incluir lo siguiente:
					</p>

					<ul className="px-6">
						{[
							"Detalles de la cuenta, como el nombre de usuario, identificación de usuario única, contraseña, entre otros.",
							"Información de contacto, como la dirección de correo electrónico, número de teléfono, entre otros.",
							"Información personal básica, como el nombre nombre, país de residencia, entre otros.",
						].map((item) => (
							<li key={item} className="list-disc">
								{item}
							</li>
						))}
					</ul>

					<p>
						Puede optar por no proporcionarnos su Información Personal, pero
						entonces es posible que no pueda aprovechar algunas de las funciones
						del Sitio web. Los usuarios que no estén seguros acerca de qué
						información es obligatoria pueden ponerse en contacto con nosotros.
					</p>
				</section>

				<section className="space-y-2">
					<h3
						className="text-xl font-bold"
						id="use-and-processing-of-collected-information"
					>
						Uso y procesamiento de la información recopilada
					</h3>

					<p>
						Actuamos como controlador de datos y procesador de datos cuando
						manejamos Información Personal, a menos que hayamos celebrado un
						acuerdo de procesamiento de datos con usted, en cuyo caso usted
						sería el controlador de datos y nosotros seríamos el procesador de
						datos.
					</p>

					<p>
						Nuestro papel también puede diferir dependiendo de la situación
						específica que involucre Información Personal. Actuamos en calidad
						de controlador de datos cuando le pedimos que envíe su Información
						Personal que es necesaria para garantizar su acceso y uso del Sitio
						web y los Servicios. En tales casos, somos un controlador de datos
						porque determinamos los fines y los medios del procesamiento de la
						Información Personal.
					</p>

					<p>
						Actuamos en calidad de procesador de datos en situaciones en las que
						envía Información Personal a través del Sitio web y los Servicios.
						No poseemos, controlamos ni tomamos decisiones sobre la Información
						Personal enviada, y dicha Información Personal se procesa solo de
						acuerdo con sus instrucciones. En tales casos, el Usuario que
						proporciona Información Personal actúa como controlador de datos.
					</p>

					<p>
						Para hacer que el Sitio web y los Servicios estén disponibles para
						usted, o para cumplir con una obligación legal, es posible que
						necesitemos recopilar y usar cierta Información Personal. Si no
						proporciona la información que solicitamos, es posible que no
						podamos proporcionarle los productos o servicios solicitados.
						Cualquiera de la información que recopilamos de usted puede usarse
						para los siguientes propósitos:
					</p>

					<ul className="list-disc px-6">
						{[
							"Crear y gestionar cuentas de usuario",
							"Responder consultas y ofrecer soporte",
							"Mejorar la experiencia del usuario",
							"Hacer cumplir los términos y condiciones y políticas",
							"Protegerse contra el abuso y los usuarios malintencionados",
							"Responder a solicitudes legales y prevenir daños",
							"Ejecutar y operar el Sitio web y los Servicios",
						].map((item) => (
							<li key={item} className="list-disc">
								{item}
							</li>
						))}
					</ul>

					<p>
						El procesamiento de su Información Personal depende de cómo
						interactúe con el Sitio web y los Servicios, de dónde se encuentre
						en el mundo y si se aplica alguna de las siguientes condiciones:
					</p>

					<ul className="px-6">
						{[
							"Ha dado su consentimiento para uno o más fines específicos",
							"La provisión de información es necesaria para la ejecución de esta Política con usted y/o para cualquier obligación precontractual derivada de ella",
							"El procesamiento es necesario para el cumplimiento de una obligación legal a la que usted esté sujeto",
							"El procesamiento está relacionado con una tarea que se lleva a cabo en interés público o en el ejercicio de la autoridad oficial otorgada a nosotros",
							"El procesamiento es necesario para los fines de los intereses legítimos perseguidos por nosotros o por un tercero. También podemos combinar o agregar parte de su Información Personal para servirle mejor y para mejorar y actualizar nuestro Sitio web y Servicios.",
						].map((item) => (
							<li key={item} className="list-disc">
								{item}
							</li>
						))}
					</ul>

					<p>
						Tenga en cuenta que bajo algunas legislaciones podemos estar
						autorizados a procesar información hasta que se oponga a dicho
						procesamiento optando por no participar, sin tener que depender del
						consentimiento o de ninguna otra de las bases legales. En cualquier
						caso, estaremos encantados de aclarar la base legal específica que
						se aplica al procesamiento, y en particular si la provisión de
						Información Personal es un requisito estatutario o contractual, o un
						requisito necesario para celebrar un contrato.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="managing-information">
						Gestión de información
					</h3>

					<p>
						Puede eliminar cierta Información Personal que tenemos sobre usted.
						La Información Personal que puede eliminar puede cambiar a medida
						que cambian el Sitio web y los Servicios. Sin embargo, cuando
						elimina Información Personal, es posible que mantengamos una copia
						de la Información Personal no revisada en nuestros registros durante
						el tiempo necesario para cumplir con nuestras obligaciones con
						nuestras filiales y socios, y para los fines descritos a
						continuación.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="disclosure-of-information">
						Divulgación de información
					</h3>

					<p>
						Dependiendo de los Servicios solicitados o según sea necesario para
						completar cualquier transacción o proporcionar cualquier Servicio
						que haya solicitado, podemos compartir su información con nuestras
						empresas contratadas y proveedores de servicios (colectivamente,
						Proveedores de Servicios) en los que confiamos para ayudar en la
						operación del Sitio web y los Servicios disponibles para usted y
						cuyas políticas de privacidad son consistentes con las nuestras o
						que aceptan cumplir con nuestras políticas con respecto a la
						Información Personal. No compartiremos ninguna información
						personalmente identificable con terceros ni compartiremos ninguna
						información con terceros no afiliados.
					</p>
					<p>
						Los Proveedores de Servicios no están autorizados para usar o
						divulgar su información excepto según sea necesario para realizar
						servicios en nuestro nombre o cumplir con requisitos legales. A los
						Proveedores de Servicios se les proporciona la información que
						necesitan solo para realizar sus funciones designadas, y no les
						autorizamos a usar o divulgar ninguna de la información
						proporcionada para sus propios fines de marketing u otros fines.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="retention-of-information">
						Retención de información
					</h3>

					<p>
						Retendremos y utilizaremos su Información Personal durante el tiempo
						necesario para cumplir con nuestras obligaciones legales, mientras
						su cuenta de usuario siga activa, para hacer cumplir nuestra
						Política, resolver disputas y a menos que la ley requiera o permita
						un período de retención más prolongado.
					</p>
					<p>
						Podemos utilizar cualquier dato agregado derivado de su Información
						Personal después de que la actualice o elimine, pero no de una
						manera que lo identifique personalmente. Una vez que expire el
						período de retención, la Información Personal se eliminará. Por lo
						tanto, el derecho de acceso, el derecho al olvido, el derecho a la
						rectificación y el derecho a la portabilidad de datos no se pueden
						hacer valer después de la expiración del período de retención.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="privacy-of-children">
						Privacidad de los niños
					</h3>

					<p>
						No recopilamos intencionadamente ninguna Información Personal de
						niños menores de 18 años. Si tiene menos de 18 años, no envíe
						ninguna Información Personal a través del Sitio web y los Servicios.
						Si tiene motivos para creer que un niño menor de 18 años nos ha
						proporcionado Información Personal a través del Sitio web y los
						Servicios, contáctenos para solicitar que eliminemos la Información
						Personal de ese niño de nuestros Servicios.
					</p>
					<p>
						Alentamos a los padres y tutores legales a monitorear el uso de
						Internet de sus hijos y a ayudar a hacer cumplir esta Política
						instruyendo a sus hijos a que nunca proporcionen Información
						Personal a través del Sitio web y los Servicios sin su permiso.
						También pedimos que todos los padres y tutores legales que
						supervisen el cuidado de los niños tomen las precauciones necesarias
						para asegurarse de que sus hijos reciban instrucciones para no
						proporcionar Información Personal en línea sin su permiso.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="do-not-track-signals">
						Señales de No Rastrear
					</h3>

					<p>
						Algunos navegadores incorporan una función de No Rastrear que indica
						a los sitios web que visita que no desea que se rastree su actividad
						en línea. El rastreo no es lo mismo que usar o recopilar información
						en conexión con un sitio web. Para estos propósitos, el rastreo se
						refiere a la recopilación de información personalmente identificable
						de usuarios que utilizan o visitan un sitio web o servicio en línea
						a medida que se desplazan por diferentes sitios web con el tiempo.
						Cómo comunican los navegadores la señal de No Rastrear aún no es
						uniforme. Como resultado, el Sitio web y los Servicios aún no están
						configurados para interpretar o responder a las señales de No
						Rastrear comunicadas por su navegador. Aun así, como se describe con
						más detalle a lo largo de esta Política, limitamos nuestro uso y
						recopilación de su Información Personal. Para obtener una
						descripción de los protocolos de No Rastrear para navegadores y
						dispositivos móviles o para obtener más información sobre las
						opciones disponibles para usted.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="social-media-features">
						Funciones de redes sociales
					</h3>

					<p>
						Nuestro Sitio web y Servicios pueden incluir características de
						redes sociales, como los botones de Facebook y Twitter, botones para
						compartir, etc. <br />
						Estas Características de redes sociales pueden recopilar su
						dirección IP, la página que está visitando en nuestro Sitio web y
						Servicios, y pueden configurar una cookie para habilitar que las
						Características de redes sociales funcionen correctamente. Las
						Características de redes sociales están alojadas ya sea por sus
						respectivos proveedores o directamente en nuestro Sitio web y
						Servicios. Sus interacciones con estas Características de redes
						sociales están gobernadas por la política de privacidad de sus
						respectivos proveedores.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="push-notifications">
						Notificaciones push
					</h3>

					<p>
						Ofrecemos notificaciones push a las que puede suscribirse
						voluntariamente en cualquier momento. Para asegurarnos de que las
						notificaciones push lleguen a los dispositivos correctos, usamos un
						proveedor de notificaciones push de terceros que se basa en un token
						de dispositivo único para su dispositivo emitido por el sistema
						operativo de su dispositivo. Si bien es posible acceder a una lista
						de tokens de dispositivo, no revelarán su identidad, su ID de
						dispositivo único, o su información de contacto a nosotros o a
						nuestro proveedor de notificaciones push de terceros. Mantendremos
						la información enviada por correo electrónico de acuerdo con las
						leyes y regulaciones aplicables. Si, en cualquier momento, desea
						dejar de recibir notificaciones push, simplemente ajuste la
						configuración de su dispositivo en consecuencia.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="links-to-other-resources">
						Enlaces a otros recursos
					</h3>

					<p>
						El Sitio web y los Servicios contienen enlaces a otros recursos que
						no son propiedad ni están controlados por nosotros. Tenga en cuenta
						que no somos responsables de las prácticas de privacidad de dichos
						otros recursos o terceros. Le recomendamos que sea consciente cuando
						abandone el Sitio web y los Servicios y lea las declaraciones de
						privacidad de cada recurso que pueda recopilar Información Personal.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="information-security">
						Seguridad de la información
					</h3>

					<p>
						Protegemos la información que proporciona en servidores informáticos
						en un entorno controlado y seguro, protegidos contra el acceso, uso
						o divulgación no autorizados. Mantenemos salvaguardias
						administrativas, técnicas y físicas razonables en un esfuerzo por
						proteger contra el acceso, uso, modificación y divulgación no
						autorizados de la Información Personal en nuestro control y
						custodia. Sin embargo, no se puede garantizar ninguna transmisión de
						datos a través de Internet o una red inalámbrica.
					</p>
					<p>
						Por lo tanto, aunque nos esforzamos por proteger su Información
						Personal, reconoce que <br />
						(a) existen limitaciones de seguridad y privacidad de Internet que
						están fuera de nuestro control; <br />
						(b) la seguridad, integridad y privacidad de toda la información y
						los datos intercambiados entre usted y el Sitio web y los Servicios
						no se pueden garantizar; y <br />
						(c) cualquier información y datos pueden ser vistos o manipulados en
						tránsito por un tercero, a pesar de los mejores esfuerzos.
					</p>
					<p>
						Dado que la seguridad de la Información Personal depende en parte de
						la seguridad del dispositivo que utiliza para comunicarse con
						nosotros y de la seguridad que utiliza para proteger sus
						credenciales, tome las medidas apropiadas para proteger esta
						información.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="data-breach">
						Violación de datos
					</h3>

					<p>
						En caso de que tengamos conocimiento de que la seguridad del Sitio
						web y los Servicios se ha visto comprometida o que la Información
						Personal de los Usuarios se ha divulgado a terceros no relacionados
						como resultado de actividad externa, incluidos, entre otros, ataques
						de seguridad o fraude, nos reservamos el derecho de tomar medidas
						razonablemente apropiadas, incluidas, entre otras, la investigación
						y la notificación, así como la notificación y la cooperación con las
						autoridades policiales. En caso de una violación de datos, haremos
						esfuerzos razonables para notificar a las personas afectadas si
						creemos que existe un riesgo razonable de daño para el Usuario como
						resultado de la violación o si la notificación es requerida por ley.
						Cuando lo hagamos, le enviaremos un correo electrónico.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="changes-and-amendments">
						Cambios y modificaciones
					</h3>

					<p>
						Nos reservamos el derecho de modificar esta Política o sus términos
						relacionados con el Sitio web y los Servicios en cualquier momento a
						nuestra discreción. Cuando lo hagamos, le enviaremos un correo
						electrónico para notificarle. También podemos proporcionarle un
						aviso de otras maneras a nuestra discreción, como a través de la
						información de contacto que haya proporcionado.
					</p>
					<p>
						Una versión actualizada de esta Política será efectiva de inmediato
						después de la publicación de la Política revisada a menos que se
						especifique lo contrario. Su uso continuado del Sitio web y los
						Servicios después de la fecha efectiva de la Política revisada (o
						cualquier otro acto especificado en ese momento) constituirá su
						consentimiento a esos cambios. Sin embargo, no utilizaremos su
						Información Personal de manera materialmente diferente a la
						declarada en el momento en que se recopiló su Información Personal
						sin su consentimiento.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="acceptance-of-this-policy">
						Aceptación de esta política
					</h3>

					<p>
						Reconoce que ha leído esta Política y acepta todos sus términos y
						condiciones. Al acceder y utilizar el Sitio web y los Servicios y
						enviar su información, acepta quedar obligado por esta Política. Si
						no acepta cumplir con los términos de esta Política, no está
						autorizado para acceder o utilizar el Sitio web y los Servicios.
						Esta política se ha creado con la ayuda del{" "}
						<a href="https://www.websitepolicies.com/privacy-policy-generator">
							generador de políticas de privacidad
						</a>
						.
					</p>
				</section>

				<section className="space-y-2">
					<h3 className="text-xl font-bold" id="contacting-us">
						Contáctanos
					</h3>

					<p>
						Si tiene alguna pregunta, inquietud o queja con respecto a esta
						Política, la información que tenemos sobre usted, o si desea ejercer
						sus derechos, lo alentamos a que se comunique con nosotros
						utilizando los detalles a continuación:{" "}
						<a href="https://talenthub.com/contact" className="underline">
							https://talenthub.com/contact
						</a>
					</p>

					<p>
						Intentaremos resolver quejas y disputas y haremos todo lo posible
						para honrar su deseo de ejercer sus derechos lo más rápido posible y
						en cualquier caso, dentro de los plazos proporcionados por las leyes
						aplicables de protección de datos.
					</p>
				</section>

				<p>
					Este documento fue actualizado por última vez el 15 de mayo de 2024
				</p>
			</div>
		</DialogContent>
	);
}
