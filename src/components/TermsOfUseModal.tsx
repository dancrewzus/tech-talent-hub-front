const TermsOfUseModal = ({ setShowModal }) => {
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
            <span className="text-sm">(Esc)</span>
        </div>
        <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">TÉRMINOS DE USO.</p>
            </div>
            <div>
                <p className="modal-text">Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.</p>
                <p className="modal-text">El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. talenthub.com no asume la responsabilidad en caso de que entregue dicha clave a terceros.</p>
                <p className="modal-text">Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.</p>
                <p className="modal-text">Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.</p>
                <p className="modal-text"><strong>LICENCIA</strong></p>
                <p className="modal-text">TalentHub a través de su sitio web concede una licencia para que los usuarios utilicen los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</p>
                <p className="modal-text"><strong>USO NO AUTORIZADO</strong></p>
                <p className="modal-text">En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.</p>
                <p className="modal-text"><strong>PROPIEDAD</strong></p>
                <p className="modal-text">Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.</p>
                <p className="modal-text"><strong>POLÍTICA DE REEMBOLSO Y GARANTÍA</strong></p>
                <p className="modal-text">En el caso de productos que sean mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo. Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye:</p>
                <p className="modal-text">– De acuerdo a las especificaciones técnicas indicadas para cada producto.<br />– En condiciones ambientales acorde con las especificaciones indicadas por el fabricante.<br />– En uso específico para la función con que fue diseñado de fábrica.<br />– En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas.</p>
                <p className="modal-text"><strong>COMPROBACIÓN ANTIFRAUDE</strong></p>
                <p className="modal-text">La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas.</p>
                <p className="modal-text"><strong>PRIVACIDAD</strong></p>
                <p className="modal-text">Este talenthub.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.</p>
                <p className="modal-text">La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.</p>
                <p className="modal-text">TalentHub reserva los derechos de cambiar o de modificar estos términos sin previo aviso.</p>
                <p className="modal-text">Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.</p>
                <p className="modal-text">El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. talenthub.com no asume la responsabilidad en caso de que entregue dicha clave a terceros.</p>
                <p className="modal-text">Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.</p>
                <p className="modal-text">Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.</p>
                <p className="modal-text"><strong>LICENCIA</strong></p>
                <p className="modal-text">TalentHub a través de su sitio web concede una licencia para que los usuarios utilicen los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</p>
                <p className="modal-text"><strong>USO NO AUTORIZADO</strong></p>
                <p className="modal-text">En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.</p>
                <p className="modal-text"><strong>PROPIEDAD</strong></p>
                <p className="modal-text">Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.</p>
                <p className="modal-text"><strong>POLÍTICA DE REEMBOLSO Y GARANTÍA</strong></p>
                <p className="modal-text">En el caso de productos que sean mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo. Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye:</p>
                <p className="modal-text">– De acuerdo a las especificaciones técnicas indicadas para cada producto.<br />– En condiciones ambientales acorde con las especificaciones indicadas por el fabricante.<br />– En uso específico para la función con que fue diseñado de fábrica.<br />– En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas.</p>
                <p className="modal-text"><strong>COMPROBACIÓN ANTIFRAUDE</strong></p>
                <p className="modal-text">La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas.</p>
                <p className="modal-text"><strong>PRIVACIDAD</strong></p>
                <p className="modal-text">Este talenthub.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.</p>
                <p className="modal-text">La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.</p>
                <p className="modal-text">TalentHub reserva los derechos de cambiar o de modificar estos términos sin previo aviso.</p>
            </div>
            
        </div>
        </div>
    </div>
  );
};

export default TermsOfUseModal;