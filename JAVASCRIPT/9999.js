console.debug("100 Continue: Esta respuesta provisional indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.");
console.info("201 Created: Indica que la solicitud ha tenido éxito y ha llevado a la creación de un recurso (muy común tras una solicitud POST).");
console.log("301 Moved Permanently: Indica que el recurso solicitado se ha movido permanentemente a la nueva URL especificada en el encabezado Location.");
console.warn("401 Unauthorized: Indica que la petición no tuvo éxito porque carece de credenciales de autenticación válidas para el recurso solicitado.");
console.error("505 HTTP Version Not Supported: Indica que la versión de HTTP utilizada en la petición no es soportada por el servidor.");