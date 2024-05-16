const PrivacyPolicyModal = ({ setShowModal }) => {
    const handleModalClose = () => {
		setShowModal(null);
	};

  return (
    <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto">
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={handleModalClose}></div>
    <div className="modal-container bg-white w-[55rem] h-[55rem] rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm"><br />(Esc)</span>
        </div>
        <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">POLÍTICAS DE PRIVACIDAD.</p>
            </div>
            <div>
            <p className="modal-text">Respetamos tu privacidad y nos comprometemos a protegerla mediante el cumplimiento de esta política de privacidad (Política). Esta Política describe los tipos de información que podemos recopilar de ti o que puedes proporcionar (Información Personal) en el sitio web <a href="https://talenthub.com">talenthub.com</a> y cualquiera de sus productos y servicios relacionados, así como nuestras prácticas para recopilar, usar, mantener, proteger y divulgar esa Información Personal. También describe las opciones disponibles para ti con respecto al uso de tu Información Personal y cómo puedes acceder y actualizarla.</p>
            <br />
            <p className="modal-text">Esta Política es un acuerdo legalmente vinculante entre el usuario y el operador de este Sitio web. Si estás aceptando esta Política en nombre de una empresa u otra entidad legal, representas que tienes la autoridad para vincular a dicha entidad con esta Política, en cuyo caso los términos Usuario, tú o tu se referirán a dicha entidad. Si no tienes tal autoridad o no estás de acuerdo con los términos de esta Política, no debes aceptar esta Política y no puedes acceder ni usar el Sitio web y los Servicios. Al acceder y usar el Sitio web y los Servicios, reconoces que has leído, entendido y aceptado quedar sujeto a los términos de esta Política. Esta Política no se aplica a las prácticas de las empresas que no poseemos o controlamos, ni a las personas que no empleamos o gestionamos.</p>
            <br />
            <p className="modal-text"><strong>Tabla de contenidos</strong></p>
            <ol className="list-disc px-6">
                <li><a href="#collection-of-personal-information">Recopilación de información personal</a></li>
                <li><a href="#use-and-processing-of-collected-information">Uso y procesamiento de la información recopilada</a></li>
                <li><a href="#managing-information">Gestión de información</a></li>
                <li><a href="#disclosure-of-information">Divulgación de información</a></li>
                <li><a href="#retention-of-information">Retención de información</a></li>
                <li><a href="#privacy-of-children">Privacidad de los niños</a></li>
                <li><a href="#do-not-track-signals">Señales de No Rastrear</a></li>
                <li><a href="#social-media-features">Funciones de redes sociales</a></li>
                <li><a href="#push-notifications">Notificaciones push</a></li>
                <li><a href="#links-to-other-resources">Enlaces a otros recursos</a></li>
                <li><a href="#information-security">Seguridad de la información</a></li>
                <li><a href="#data-breach">Violación de datos</a></li>
                <li><a href="#changes-and-amendments">Cambios y modificaciones</a></li>
                <li><a href="#acceptance-of-this-policy">Aceptación de esta política</a></li>
                <li><a href="#contacting-us">Contactándonos</a></li>
            </ol>
            <br />
            <p id="collection-of-personal-information" className="modal-text"><strong>Recopilación de información personal</strong></p>
            <p className="modal-text">Puede acceder y utilizar el Sitio web y los Servicios sin decirnos quién es usted ni revelar ninguna información mediante la cual alguien pudiera identificarlo como un individuo específico y reconocible. Sin embargo, si desea utilizar algunas de las funciones ofrecidas en el Sitio web, es posible que se le solicite que proporcione cierta Información Personal (por ejemplo, su nombre y dirección de correo electrónico).</p>
            <p className="modal-text">Recibimos y almacenamos cualquier información que nos proporcione deliberadamente cuando crea una cuenta o completa cualquier formulario en el Sitio web. Cuando sea necesario, esta información puede incluir lo siguiente:</p>
            <ul className="list-disc px-6">
                <li>Detalles de la cuenta (como nombre de usuario, identificación de usuario única, contraseña, etc.)</li>
                <li>Información de contacto (como dirección de correo electrónico, número de teléfono, etc.)</li>
                <li>Información personal básica (como nombre, país de residencia, etc.)</li>
            </ul>
            <p className="modal-text">Puede optar por no proporcionarnos su Información Personal, pero entonces es posible que no pueda aprovechar algunas de las funciones del Sitio web. Los usuarios que no estén seguros acerca de qué información es obligatoria pueden ponerse en contacto con nosotros.</p>
            
            <br />
            <p id="use-and-processing-of-collected-information" className="modal-text"><strong>Uso y procesamiento de la información recopilada</strong></p>
            <p className="modal-text">Actuamos como controlador de datos y procesador de datos cuando manejamos Información Personal, a menos que hayamos celebrado un acuerdo de procesamiento de datos con usted, en cuyo caso usted sería el controlador de datos y nosotros seríamos el procesador de datos.</p>
            <p className="modal-text">Nuestro papel también puede diferir dependiendo de la situación específica que involucre Información Personal. Actuamos en calidad de controlador de datos cuando le pedimos que envíe su Información Personal que es necesaria para garantizar su acceso y uso del Sitio web y los Servicios. En tales casos, somos un controlador de datos porque determinamos los fines y los medios del procesamiento de la Información Personal.</p>
            <p className="modal-text">Actuamos en calidad de procesador de datos en situaciones en las que envía Información Personal a través del Sitio web y los Servicios. No poseemos, controlamos ni tomamos decisiones sobre la Información Personal enviada, y dicha Información Personal se procesa solo de acuerdo con sus instrucciones. En tales casos, el Usuario que proporciona Información Personal actúa como controlador de datos.</p>
            <p className="modal-text">Para hacer que el Sitio web y los Servicios estén disponibles para usted, o para cumplir con una obligación legal, es posible que necesitemos recopilar y usar cierta Información Personal. Si no proporciona la información que solicitamos, es posible que no podamos proporcionarle los productos o servicios solicitados. Cualquiera de la información que recopilamos de usted puede usarse para los siguientes propósitos:</p>
            <ul className="list-disc px-6">
                <li>Crear y gestionar cuentas de usuario</li>
                <li>Responder consultas y ofrecer soporte</li>
                <li>Mejorar la experiencia del usuario</li>
                <li>Hacer cumplir los términos y condiciones y políticas</li>
                <li>Protegerse contra el abuso y los usuarios malintencionados</li>
                <li>Responder a solicitudes legales y prevenir daños</li>
                <li>Ejecutar y operar el Sitio web y los Servicios</li>
            </ul>
            <br />
            <p className="modal-text">El procesamiento de su Información Personal depende de cómo interactúe con el Sitio web y los Servicios, de dónde se encuentre en el mundo y si se aplica alguna de las siguientes condiciones: <br />(a) ha dado su consentimiento para uno o más fines específicos; <br />(b) la provisión de información es necesaria para la ejecución de esta Política con usted y/o para cualquier obligación precontractual derivada de ella; <br />(c) el procesamiento es necesario para el cumplimiento de una obligación legal a la que usted esté sujeto; <br />(d) el procesamiento está relacionado con una tarea que se lleva a cabo en interés público o en el ejercicio de la autoridad oficial otorgada a nosotros; <br />(e) el procesamiento es necesario para los fines de los intereses legítimos perseguidos por nosotros o por un tercero. También podemos combinar o agregar parte de su Información Personal para servirle mejor y para mejorar y actualizar nuestro Sitio web y Servicios.</p>
            <p className="modal-text">Tenga en cuenta que bajo algunas legislaciones podemos estar autorizados a procesar información hasta que se oponga a dicho procesamiento optando por no participar, sin tener que depender del consentimiento o de ninguna otra de las bases legales. En cualquier caso, estaremos encantados de aclarar la base legal específica que se aplica al procesamiento, y en particular si la provisión de Información Personal es un requisito estatutario o contractual, o un requisito necesario para celebrar un contrato.</p>
            <br />
            <p id="managing-information" className="modal-text"><strong>Gestión de información</strong></p>
            <p className="modal-text">Puede eliminar cierta Información Personal que tenemos sobre usted. La Información Personal que puede eliminar puede cambiar a medida que cambian el Sitio web y los Servicios. Sin embargo, cuando elimina Información Personal, es posible que mantengamos una copia de la Información Personal no revisada en nuestros registros durante el tiempo necesario para cumplir con nuestras obligaciones con nuestras filiales y socios, y para los fines descritos a continuación.</p>
            <br />
            <p id="disclosure-of-information" className="modal-text"><strong>Divulgación de información</strong></p>
            <p className="modal-text">Dependiendo de los Servicios solicitados o según sea necesario para completar cualquier transacción o proporcionar cualquier Servicio que haya solicitado, podemos compartir su información con nuestras empresas contratadas y proveedores de servicios (colectivamente, Proveedores de Servicios) en los que confiamos para ayudar en la operación del Sitio web y los Servicios disponibles para usted y cuyas políticas de privacidad son consistentes con las nuestras o que aceptan cumplir con nuestras políticas con respecto a la Información Personal. No compartiremos ninguna información personalmente identificable con terceros ni compartiremos ninguna información con terceros no afiliados.</p>
            <p className="modal-text">Los Proveedores de Servicios no están autorizados para usar o divulgar su información excepto según sea necesario para realizar servicios en nuestro nombre o cumplir con requisitos legales. A los Proveedores de Servicios se les proporciona la información que necesitan solo para realizar sus funciones designadas, y no les autorizamos a usar o divulgar ninguna de la información proporcionada para sus propios fines de marketing u otros fines.</p>
            <br />
            <p id="retention-of-information" className="modal-text"><strong>Retención de información</strong></p>
            <p className="modal-text">Retendremos y utilizaremos su Información Personal durante el tiempo necesario para cumplir con nuestras obligaciones legales, mientras su cuenta de usuario siga activa, para hacer cumplir nuestra Política, resolver disputas y a menos que la ley requiera o permita un período de retención más prolongado.</p>
            <p className="modal-text">Podemos utilizar cualquier dato agregado derivado de su Información Personal después de que la actualice o elimine, pero no de una manera que lo identifique personalmente. Una vez que expire el período de retención, la Información Personal se eliminará. Por lo tanto, el derecho de acceso, el derecho al olvido, el derecho a la rectificación y el derecho a la portabilidad de datos no se pueden hacer valer después de la expiración del período de retención.</p>
            <br />
            <p id="privacy-of-children" className="modal-text"><strong>Privacidad de los niños</strong></p>
            <p className="modal-text">No recopilamos intencionadamente ninguna Información Personal de niños menores de 18 años. Si tiene menos de 18 años, no envíe ninguna Información Personal a través del Sitio web y los Servicios. Si tiene motivos para creer que un niño menor de 18 años nos ha proporcionado Información Personal a través del Sitio web y los Servicios, contáctenos para solicitar que eliminemos la Información Personal de ese niño de nuestros Servicios.</p>
            <p className="modal-text">Alentamos a los padres y tutores legales a monitorear el uso de Internet de sus hijos y a ayudar a hacer cumplir esta Política instruyendo a sus hijos a que nunca proporcionen Información Personal a través del Sitio web y los Servicios sin su permiso. También pedimos que todos los padres y tutores legales que supervisen el cuidado de los niños tomen las precauciones necesarias para asegurarse de que sus hijos reciban instrucciones para no proporcionar Información Personal en línea sin su permiso.</p>
            <br />
            <p id="do-not-track-signals" className="modal-text"><strong>Señales de No Rastrear</strong></p>
            <p className="modal-text">Algunos navegadores incorporan una función de No Rastrear que indica a los sitios web que visita que no desea que se rastree su actividad en línea. El rastreo no es lo mismo que usar o recopilar información en conexión con un sitio web. Para estos propósitos, el rastreo se refiere a la recopilación de información personalmente identificable de usuarios que utilizan o visitan un sitio web o servicio en línea a medida que se desplazan por diferentes sitios web con el tiempo. Cómo comunican los navegadores la señal de No Rastrear aún no es uniforme. Como resultado, el Sitio web y los Servicios aún no están configurados para interpretar o responder a las señales de No Rastrear comunicadas por su navegador. Aun así, como se describe con más detalle a lo largo de esta Política, limitamos nuestro uso y recopilación de su Información Personal. Para obtener una descripción de los protocolos de No Rastrear para navegadores y dispositivos móviles o para obtener más información sobre las opciones disponibles para usted.</p>
            <br />
            <p id="social-media-features" className="modal-text"><strong>Funciones de redes sociales</strong></p>
            <p className="modal-text">Nuestro Sitio web y Servicios pueden incluir características de redes sociales, como los botones de Facebook y Twitter, botones para compartir, etc. <br />Estas Características de redes sociales pueden recopilar su dirección IP, la página que está visitando en nuestro Sitio web y Servicios, y pueden configurar una cookie para habilitar que las Características de redes sociales funcionen correctamente. Las Características de redes sociales están alojadas ya sea por sus respectivos proveedores o directamente en nuestro Sitio web y Servicios. Sus interacciones con estas Características de redes sociales están gobernadas por la política de privacidad de sus respectivos proveedores.</p>
            <br />
            <p id="push-notifications" className="modal-text"><strong>Notificaciones push</strong></p>
            <p className="modal-text">Ofrecemos notificaciones push a las que puede suscribirse voluntariamente en cualquier momento. Para asegurarnos de que las notificaciones push lleguen a los dispositivos correctos, usamos un proveedor de notificaciones push de terceros que se basa en un token de dispositivo único para su dispositivo emitido por el sistema operativo de su dispositivo. Si bien es posible acceder a una lista de tokens de dispositivo, no revelarán su identidad, su ID de dispositivo único, o su información de contacto a nosotros o a nuestro proveedor de notificaciones push de terceros. Mantendremos la información enviada por correo electrónico de acuerdo con las leyes y regulaciones aplicables. Si, en cualquier momento, desea dejar de recibir notificaciones push, simplemente ajuste la configuración de su dispositivo en consecuencia.</p>
            <br />
            <p id="links-to-other-resources" className="modal-text"><strong>Enlaces a otros recursos</strong></p>
            <p className="modal-text">El Sitio web y los Servicios contienen enlaces a otros recursos que no son propiedad ni están controlados por nosotros. Tenga en cuenta que no somos responsables de las prácticas de privacidad de dichos otros recursos o terceros. Le recomendamos que sea consciente cuando abandone el Sitio web y los Servicios y lea las declaraciones de privacidad de cada recurso que pueda recopilar Información Personal.</p>
            <br />
            <p id="information-security" className="modal-text"><strong>Seguridad de la información</strong></p>
            <p className="modal-text">Protegemos la información que proporciona en servidores informáticos en un entorno controlado y seguro, protegidos contra el acceso, uso o divulgación no autorizados. Mantenemos salvaguardias administrativas, técnicas y físicas razonables en un esfuerzo por proteger contra el acceso, uso, modificación y divulgación no autorizados de la Información Personal en nuestro control y custodia. Sin embargo, no se puede garantizar ninguna transmisión de datos a través de Internet o una red inalámbrica.</p>
            <p className="modal-text">Por lo tanto, aunque nos esforzamos por proteger su Información Personal, reconoce que <br />(a) existen limitaciones de seguridad y privacidad de Internet que están fuera de nuestro control; <br />(b) la seguridad, integridad y privacidad de toda la información y los datos intercambiados entre usted y el Sitio web y los Servicios no se pueden garantizar; y <br />(c) cualquier información y datos pueden ser vistos o manipulados en tránsito por un tercero, a pesar de los mejores esfuerzos.</p>
            <p className="modal-text">Dado que la seguridad de la Información Personal depende en parte de la seguridad del dispositivo que utiliza para comunicarse con nosotros y de la seguridad que utiliza para proteger sus credenciales, tome las medidas apropiadas para proteger esta información.</p>
            <br />
            <p id="data-breach" className="modal-text"><strong>Violación de datos</strong></p>
            <p className="modal-text">En caso de que tengamos conocimiento de que la seguridad del Sitio web y los Servicios se ha visto comprometida o que la Información Personal de los Usuarios se ha divulgado a terceros no relacionados como resultado de actividad externa, incluidos, entre otros, ataques de seguridad o fraude, nos reservamos el derecho de tomar medidas razonablemente apropiadas, incluidas, entre otras, la investigación y la notificación, así como la notificación y la cooperación con las autoridades policiales. En caso de una violación de datos, haremos esfuerzos razonables para notificar a las personas afectadas si creemos que existe un riesgo razonable de daño para el Usuario como resultado de la violación o si la notificación es requerida por ley. Cuando lo hagamos, le enviaremos un correo electrónico.</p>
            <br />
            <p id="changes-and-amendments" className="modal-text"><strong>Cambios y modificaciones</strong></p>
            <p className="modal-text">Nos reservamos el derecho de modificar esta Política o sus términos relacionados con el Sitio web y los Servicios en cualquier momento a nuestra discreción. Cuando lo hagamos, le enviaremos un correo electrónico para notificarle. También podemos proporcionarle un aviso de otras maneras a nuestra discreción, como a través de la información de contacto que haya proporcionado.</p>
            <p className="modal-text">Una versión actualizada de esta Política será efectiva de inmediato después de la publicación de la Política revisada a menos que se especifique lo contrario. Su uso continuado del Sitio web y los Servicios después de la fecha efectiva de la Política revisada (o cualquier otro acto especificado en ese momento) constituirá su consentimiento a esos cambios. Sin embargo, no utilizaremos su Información Personal de manera materialmente diferente a la declarada en el momento en que se recopiló su Información Personal sin su consentimiento.</p>
            <br />
            <p id="acceptance-of-this-policy" className="modal-text"><strong>Aceptación de esta política</strong></p>
            <p className="modal-text">Reconoce que ha leído esta Política y acepta todos sus términos y condiciones. Al acceder y utilizar el Sitio web y los Servicios y enviar su información, acepta quedar obligado por esta Política. Si no acepta cumplir con los términos de esta Política, no está autorizado para acceder o utilizar el Sitio web y los Servicios. Esta política se ha creado con la ayuda del <a href="https://www.websitepolicies.com/privacy-policy-generator">generador de políticas de privacidad</a>.</p>
            <br />
            <p id="contacting-us" className="modal-text"><strong>Contactándonos</strong></p>
            <p className="modal-text">Si tiene alguna pregunta, inquietud o queja con respecto a esta Política, la información que tenemos sobre usted, o si desea ejercer sus derechos, lo alentamos a que se comunique con nosotros utilizando los detalles a continuación:</p>
            <p className="modal-text"><a href="https://talenthub.com/contact">https://talenthub.com/contact</a></p>
            <p className="modal-text">Intentaremos resolver quejas y disputas y haremos todo lo posible para honrar su deseo de ejercer sus derechos lo más rápido posible y en cualquier caso, dentro de los plazos proporcionados por las leyes aplicables de protección de datos.</p>
            <br />
            <br />
            <p className="modal-text">Este documento fue actualizado por última vez el 15 de mayo de 2024</p>
            </div>
            
        </div>
        </div>
    </div>
  );
};

export default PrivacyPolicyModal;