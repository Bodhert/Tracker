

**TÓPICOS ESPECIALES EN TELEMÁTICA**

**JUAN PABLO ALCARAZ FLOREZ**

**ALEJANDRO CORDOBA BODHERT**

**CRAIG DAVID CARTAGENA CASTANO**

**PROFESOR: EDWIN MONTOYA**

**UNIVERSIDAD DE EAFIT**

**INGENIERIA DE SISTEMAS**

**2018**

![Eafit Logo](eafit.png)




1. Análisis: Mediante escenarios y/o propuesta en marco de referencia. 

DISPONIBILIDAD

Análisis: Mediante escenarios y/o propuesta en marco de referencia

Para hacer un análisis mediante escenarios en el ámbito de disponibilidad debemos basarnos en las características y los componentes que conforman la disponibilidad. mencionaremos algunas que es el servicio en tiempo real, respuesta adecuada y la detección de fallas. entre otras.
Los escenarios de disponibilidad cuenta con 5 etapas que son:
Fuente de estímulo: Es la diferenciación del origen de las fallas sea de origen externo o interno. tomando en cuenta la diferencia de la respuesta deseada. esto hace referencia a todos los componentes que hacen parte del sistema como: personas, hardware, software, estructuras físicas o ambiente físico. ya que las fallas pueden alterar la disponibilidad o alterar las respuestas que se espera del sistema.
Estímulo: son los diferentes tipos de errores. está el de omisión que es un componente que no corresponde a la entrada, crash es un componente que sufre repetidamente fallas de omisión, sincronización que es un componente con respuesta tarde o temprana o incluso la respuesta, una respuesta errónea puede traer problemas el tiempo real ya que el sistema no está ejecutando correctamente los procesos y hace que este no esté disponible adecuadamente.
Artefacto: son los recursos que se utilizan para estar disponible, como el procesador, el canal de comunicación, el proceso o el almacenamiento. todos los recursos son necesarios para que el sistema en cada uno de los recursos realice su trabajo.
Respuesta: Hay una series de posibles reaccional a una falla del sistema, la falla debe ser detectada y aislada de otra respuesta, después de recuperar se debe notificar la falla.
Medida de respuesta: es el porcentaje de disponibilidad, el tiempo o intervalos del cual el sistema detecta falla o debe estar disponible.


RENDIMIENTO

La concurrencia es el concepto más importante a la hora del diseño de la arquitectura, más sin embargo es  uno de los procesos menos instruidos durante los estudios de ciencias de la computación. La concurrencia hace referencia a las operaciones que ocurren en simultáneo sobre un mismo dato, este tipo de acontecimientos suceden en cualquier momento en un sistema a la hora de crear nuevos hilos de procesamiento, debido a que estos trabajan independiente de los otros.
A la hora de hacer un análisis del rendimiento de un sistema se deben de tener en cuenta alguno eventos tales como:
Eventos periódicos que pueden aparecer en forma de patrones predecibles, distribuciones matemáticas o no impredecibles, en tiempos regulares, en sistemas de tiempo real estos tipos de eventos se ven con mayor frecuencia
Eventos estocásticos que llegan como una distribución o ocurrencia probabilística, no predecible
Los eventos esporádicos que llegan de acuerdo a un patrón definido el cual no es periódico ni estocástico, siendo estos posiblemente caracterizados.
La calidad de una aplicación desde el punto de vista del rendimiento de la misma, puede ser medible con los distintos estímulos presentados a continuación
Latencia: Es el tiempo que hay entre la petición de un servicio y su correspondiente respuesta.
Plazos en el Procesamiento: Es denominado al lapso de tiempo que hay entre la ejecución y su correspondiente procesamiento.
Rendimiento: La cantidad transacciones o peticiones que la aplicación puede hacer en una sola unidad de tiempo.
La Fluctuación de la respuesta: Es el error variable que existe entre los diferentes tiempos en la ejecución de la misma petición.
El número de eventos o peticiones no procesadas debido a la sobrecarga del sistema.
A partir de estas consideraciones, ahora podemos describir las porciones individuales de un escenario general para el rendimiento:
Fuente de estímulo: Los estímulos llegan de fuentes externas (posiblemente múltiples) o internas.
Estímulo: Son eventos en forma de patrones de llegada, pueden ser periódico, estocástico o esporádico, caracterizado por parámetros numéricos.
Artefacto: El artefacto es el sistema o uno o más de sus componentes.
Ambiente: El sistema puede estar en varios modos operativos, como normal, emergencia, carga pico o sobrecarga.
Respuesta: El sistema debe procesar los eventos que llegan. Esto puede causar un cambio en el entorno del sistema (por ejemplo, del modo normal al modo de sobrecarga).
Medida de respuesta: Las medidas de respuesta son el tiempo que toma procesar los eventos que llegan (latencia o una fecha límite), la variación en este momento (jitter), la cantidad de eventos que pueden procesarse dentro de un intervalo de tiempo particular (rendimiento) o una caracterización de los eventos que no pueden ser procesados (tasa de error).


3. Diseño: En Aplicación y en Sistema. a. Vistas de arquitectura. b. Patrones de arquitectura. c. Best Practices. d. Tácticas. e. Herramientas

a) MODEL,VIEW, CONTROLLER(MVC)
Es un patrón de arquitectura de software que, utilizando 3 componentes (Vistas, Models y Controladores) separa la lógica de la aplicación de la lógica de la vista en una aplicación. Es una arquitectura importante puesto que se utiliza tanto en componentes gráficos básicos hasta sistemas empresariales; la mayoría de los frameworks modernos utilizan MVC (o alguna adaptación del MVC) para la arquitectura, entre ellos podemos mencionar a ruby on rails, Django, Angularjs y muchos otros más.

una analogía para dar mejor explicación al modelo: Una que me gusta mucho es la de la televisión. En tu televisión puedes ver distintos canales distribuidos por tu tu proveedor de cable o televisión (que representa al modelo), todos los canales que puedes ver son la vista, y tú cambiando de canal, controlando qué ves representas al controlador.
la razón es que nos permite separar los componentes de nuestra aplicación dependiendo de la responsabilidad que tienen, esto significa que cuando hacemos un cambio en alguna parte de nuestro código, esto no afecte otra parte del mismo. Por ejemplo, si modificamos nuestra Base de Datos, sólo deberíamos modificar el modelo que es quién se encarga de los datos y el resto de la aplicación debería permanecer intacta. Esto respeta el principio de la responsabilidad única. Es decir, una parte de tu código no debe de saber qué es lo que hace toda la aplicación, sólo debe de tener una responsabilidad

b) las 3 seleccionadas son: Failover, Failback y Continuous Maintenance.
Failover: durante escenarios de carga pesada, la capacidad del sistema para operar en caso de falla de un nodo o componente al cambiar transparentemente a otro componente de respaldo a menudo se conoce como failover

Failback: ocurre después del failover, donde el nodo primario o el sitio primario se recupera de la falla y estará completamente operativo.Esto requiere establecer un punto de falla y copiar los datos que se han creado después del punto de falla del nodo secundario o de respaldo.

Replicación: esto implica copiar los datos del nodo primario a todos sus nodos de respaldo y en espera para que sea fácil cambiarlos en caso de conmutación por error. La replicación es una práctica generalmente seguida en sistemas de almacenamiento, servidores de bases de datos y en casos de configuraciones de aplicaciones.

Virtualization: las interrupciones causadas por el hardware y el sistema operativo se pueden reducir mediante el uso de la virtualización. La virtualización ofrece muchas ventajas, como la distribución de carga y el enrutamiento de solicitudes, y permite a los administradores del sistema mejorar el hardware subyacente de manera ininterrumpida; todo esto tendrá un impacto positivo en la disponibilidad general.

Continuous maintenance: las actividades regulares de mantenimiento para los componentes de hardware son clave para mantener la infraestructura en buen estado de salud. El mantenimiento regular aumenta la confiabilidad del hardware, asegura operaciones confiables y extiende la vida útil general del hardware. A largo plazo, el mantenimiento reduce el costo total de propiedad (TCO) del sistema. Las actividades de mantenimiento de hardware incluyen servicios regulares de servidores, limpieza de componentes, realización de copias de seguridad de discos y bases de datos, actualización del hardware de forma periódica en función de las necesidades comerciales, etc. existen tres tipos de mantenimiento: el preventivo, el correctivo y mantenimiento perfecto.

c) Best practices

Relacionadas al hardware

Desarrollar una infraestructura de monitoreo y alerta proactiva interna y externa. Esto sirve como un sistema de alerta temprana para el mantenimiento preventivo y ayuda al equipo de mantenimiento a responder rápidamente en caso de problemas de producción.
Sitio de recuperación de desastres (DR), debe tener una réplica espejo del código y los datos del sitio principal. Esto sirve como respaldo en caso de falla total del sitio primario.
Minimizar el tiempo de inactividad durante las interrupciones planificadas mediante la reutilización de componentes redundantes o de respaldo existentes.

Relacionadas al software

Arquitectura simple para que sea fácilmente extensible y mantenible
Estrategia de almacenamiento en caché integral para garantizar que los datos que se usan con frecuencia y que consumen muchos recursos se almacenan en caché. para mejorar el rendimiento del sistema, y hacer que la aplicación sea menos vulnerable a los problemas del sistema en sentido ascendente.
Evitar conversaciones habladas con servicios en sentido ascendente para minimizar la transferencia de datos por solicitud.
Adoptar pruebas de regresión y seguridad continuas para descubrir cualquier defecto de seguridad o agujeros en el código
Maximización de la automatización para actividades de mantenimiento como parches, actualizaciones de software / aplicaciones, etc.
Cree rutinas automáticas para el manejo de errores usando código de error, lo que ayuda a una recuperación de errores más rápida.
Probar todos los posibles escenarios de disponibilidad y verificar los SLA.

d) Tácticas


Una falla ocurre cuando el sistema ya no ofrece un servicio que sea consistente con su especificación; esta falla es observable por los actores del sistema. Una falla (o combinación de fallas) tiene el potencial de causar una falla. Las tácticas de disponibilidad, por lo tanto, están diseñadas para permitir a un sistema soportar fallas del sistema de modo que un servicio entregado por el sistema siga siendo conforme a sus especificaciones.
Se pueden categorizar en 3 partes: deteccion de fallas, recuperación de fallas y prevención de fallas.

Detección de errores

la presencia de la falla debe ser detectada o anticipada

Ping: Mensajes de solicitud/respuesta asincronica intercambiados entre nodos. Es crear un eco que determina si esta vivo y si responde correctamente. Es enviado por un monitor del sistema. Estan interconectados por nodos a traves de la ip

Monitor: Componente para controlar el estado de las partes del sistema: procesadores, procesos, E/S, memoria.etc. Un monitor detecta fallas o congestiones en la red o recursos compartidos.
Ejemplo: componentes que funcionan mal, ataqueda de denegacion en el servicio…

Cuando se utiliza contador o temporizador en la deteccion se le denomina perro guardian (watchdog) y la senal de que todo esta funcionando correctamente el temporizador de vigilacion es acariciar al perro guardian (petting the watchdog)

heatbeat: intercambio periodico de mensajes entre el monitor del sistema y un proceso que se esta monitoreando. Ejemplo: monitoreo del latido del corazon. Se monitorea periodicamente y se restablece el temporizador de vigilancia en su monitor para evitar que caduque. Y senalar fallas.

Sanity checking: comprueba la validez o la razonabilidad de operaciones o salidas de un componente. Conocimiento del diseno interno, el estado del sistema o la naturaleza de la información bajo escrutinio. Se utiliza con mayor frecuencia en las interfaces para examinar un flujo de información específico.

Condition Monitoring: verificar las condiciones en un proceso o dispositivo. Monitorear las condiciones, esta tactica evita que un sistema produzca un comportamiento defectuoso ejemplo: calculo de las sumas de comprobacion.

Detección de excepciones

se refiere a la deteccion de una condición del sistema que altera el flujo normal de ejecución.varian de acuerdo a la arquitectura de hardware del procesador utilizada. Incluyen ceros, fallas de bus y direccion, programas ilegales…

The parameter fance tactic: incorpora un patrón de datos a priori (como 0xDEADBEEF) colocado inmediatamente después de cualquier parámetro de longitud variable de un objeto. Esto permite la detección en tiempo de ejecución de sobrescribir la memoria asignada para los parámetros de longitud variable del objeto.

Parameter typing emplea una clase base que define las funciones que agregan, encuentran e iteran sobre los parámetros del mensaje con formato de longitud de valor de tipo (TLV).

Timeout: es una táctica que genera una excepción cuando un componente detecta que él u otro componente no ha cumplido con sus restricciones de tiempo. Por ejemplo, un componente que espera una respuesta de otro componente puede generar una excepción si el tiempo de espera excede un cierto valor.


Selftest: Los componentes (o, más probablemente, los subsistemas completos) pueden ejecutar procedimientos para probarse a sí mismos en busca de una operación correcta. Los procedimientos de autocomprobación pueden ser iniciados por el componente en sí o invocados de vez en cuando por un monitor del sistema.

Recover from faults: se refinan en tácticas de preparación y reparación y tácticas de reintroducción. Los últimos se preocupan por reintroducir un componente fallido (pero rehabilitado) nuevamente en la operación normal.

Passive redundancy: Esto se refiere a una configuración donde solo los miembros activos del grupo de protección procesan el tráfico de entrada; uno de sus deberes es proporcionar los repuestos redundantes con actualizaciones periódicas del estado.

Spare: El ahorro de frío se refiere a una configuración en la que los repuestos redundantes de un grupo de protección permanecen fuera de servicio hasta que se produce un fallo, en cuyo punto se inicia un procedimiento de encendido y reinicio en el repuesto redundante antes de ponerlo en servicio.

Rollback: Esta táctica permite que el sistema revierte a un estado bueno conocido anterior, denominado "línea de restitución" (rollback line), tiempo de retroceso de rodaje, tras la detección de una falla.

Software upgrade: La actualización de software es otra táctica de preparación y reparación cuyo objetivo es lograr actualizaciones en servicio a imágenes de código ejecutables de una manera que no afecte al servicio. Esto se puede realizar como un parche de función, un parche de clase o una actualización de software sin servicio en servicio (ISSU).

Retry: La táctica de reintento supone que la falla que causó una falla es transitoria y reintentar la operación puede conducir al éxito. Esta táctica se usa en redes y granjas de servidores donde se esperan fallas y son comunes.


Prevent Faults

 Estas tácticas se refieren a los medios de tiempo de ejecución para evitar que ocurran fallas. Por supuesto, una forma excelente de prevenir fallas, al menos en el sistema que está creando, sino en sistemas con los que su sistema debe interactuar, es producir código de alta calidad. Esto se puede hacer por medio de inspecciones de códigos, programación de pares, revisiones sólidas de requisitos y una serie de otras buenas prácticas de ingeniería.


Removal from service: remover del servicio, Esta táctica se refiere a colocar temporalmente un componente del sistema en un estado fuera de servicio con el fin de mitigar posibles fallas del sistema. Un ejemplo implica quitar un componente de un sistema del servicio y restablecer el componente para eliminar fallas latentes (como pérdidas de memoria, fragmentación o errores blandos en un caché desprotegido) antes de que la acumulación de fallas afecte el servicio (lo que resulta en una falla del sistema) ) Otro término para esta táctica es el rejuvenecimiento del software.

Transactions: Los sistemas orientados a servicios de alta disponibilidad aprovechan la semántica transaccional para garantizar que los mensajes asincrónicos intercambiados entre componentes distribuidos sean atómicos, constantes, aislados y duraderos.

Predictive model: Un modelo predictivo, cuando se combina con un monitor, se emplea para monitorear el estado de salud de un proceso del sistema para garantizar que el sistema esté operando dentro de sus parámetros operativos nominales, y para tomar medidas correctivas cuando se detectan condiciones que predicen un futuro probable fallas Las métricas de desempeño operacional monitoreadas se usan para predecir el inicio de fallas; ejemplos incluyen velocidad de establecimiento de sesión (en un servidor HTTP), cruce de umbral (monitoreo de marcas de agua alta y baja para algún recurso compartido restringido) o mantenimiento de estadísticas para estado de proceso (en servicio, fuera de servicio, bajo mantenimiento, inactivo), mensaje estadísticas de longitud de la cola, y así sucesivamente.

Exception prevention: Prevención de excepciones. Esta táctica se refiere a las técnicas empleadas con el fin de evitar que se produzcan excepciones al sistema. El uso de clases de excepción, que permite que un sistema se recupere de forma transparente de las excepciones del sistema

e. Herramientas

Despliegue del proyecto: Ubuntu 16.04
Framework: npm y node
Base de datos: MongoDB
Web server: Apache
Web app server: Passenger
Lenguaje de programación: Javascript
Git: CLI

3. Marco-referencia-v2: Apropiación de las bases conceptuales, patrones, mejores prácticas, etc de los atributos de calidad seleccionados.

Un requisito de atributo de calidad debe ser inequívoco y comprobable, utilizamos estímulos para describir un evento que llega al sistema. la fuente del estímulo puede afectar la forma en que se trata al sistema. y también debe tomarse en cuenta la respuesta para saber cómo debe responder el sistema ante estímulos. la respuesta consiste en las responsabilidades que el sistema o los desarrolladores  deben realizar en respuesta al estímulo. un ejemplo en el escenario de rendimiento, llega un evento(estímulo) y el sistema debe procesar ese evento y generar una respuesta. después de debe determinar si es una respuesta satisfactoria, si se cumple el requisito. se habilita y esto podría ser una medida de latencia o rendimiento.
el ambiente en  el entorno de un requisito es el conjunto de circunstancias en que se produce un escenario. el ambiente actúa como un calificador en el estímulo. y el artefacto es la parte del sistema al que se aplica el requisito. frecuentemente es todo el sistema,pero ocasionalmente de partes específicas del sistema.
para especificar los atributos de calidad se dividen en 6 partes:
a) Fuente de estímulo: entidad que genera el estimulo
b) Estimulo: condición que requiere una respuesta cuando llega al sistema
c) Medio ambiente: el estímulo ocurre bajo ciertas condiciones, para estos tipos de sistema,el entorno debe especificar en qué modo se está ejecutando el sistema
d) Artefacto: colección de sistemas o partes del sistema
e) Respuesta: actividad realizada como resultado de la llegada de un estímulo
f) Medida de respuesta: cuando se produce la respuesta, debe ser medible para ser probado.

Disponibilidad:  Ensuring High Availability For Your Enterprise Web Applications

La alta disponibilidad es una factor esencial para las aplicaciones de misión crítica, en tiempo real y de comercio, ya que se traduce directamente en el tráfico de los ingresos y del sitio.

los principios claves de la alta disponibilidad, varían de un escenario a otro, algunas de las cualidades esenciales son:

La arquitectura HA debe satisfacer los acuerdos de nivel de servicio de disponibilidad (SLA).
• La arquitectura de alta disponibilidad debe admitir conmutación por error y recuperación, transparente para el usuario final sin pérdida de datos.
• La arquitectura HA debe incluir una estrategia de monitoreo proactiva para permitir la autodetección y la autocorrección.
• La arquitectura HA debe proporcionar una estrategia integral para el manejo del tiempo de inactividad planificado y no planificado.
• La arquitectura HA debe comprender estrategias para manejar todos los posibles puntos de falla. entre otros.

las motivaciones para la alta disponibilidad están relacionadas con el negocio, alta disponibilidad es sinonimo en ingresos comerciales y ventaja competitiva. algunas claves destacadas son:

Minimice cualquier pérdida debido a tiempo de inactividad e interrupciones
• Asegurar la continuidad del negocio en caso de desastre natural o circunstancias imprevistas
• Minimice la pérdida de material evitando y minimizando la pérdida de datos / información
• Mejore la satisfacción y lealtad del usuario mediante la máxima disponibilidad de funciones, procesos y servicios críticos para el negocio
• Obtener una ventaja competitiva a través de la máxima disponibilidad de software y servicios
• Cumplir con las leyes y regulaciones en dominios tales como el cuidado de la salud y aplicaciones de misión crítica
• Cumplir con los SLA de servicio prometidos a los clientes. entre otros.

la planificación de alta disponibilidad tiene ciertas características, La planificación de HA comienza con el negocio analizando los requisitos de disponibilidad para el negocio y evaluando el impacto global del tiempo de inactividad en el negocio. En esta etapa, la empresa identifica la funcionalidad del software, el proceso comercial, las transacciones y las páginas que son fundamentales para la continuidad y el éxito del negocio.
Una vez que se identifica el impacto comercial, la empresa especifica el SLA de rendimiento para la disponibilidad. Por ejemplo, un SLA de disponibilidad de 99.999% (a menudo denominado "cinco nueves") se traduce en un período de tiempo máximo permitido de 5 min del sistema general por año. Las métricas específicas del negocio, como el Objetivo de tiempo de recuperación (RTO) y el Objetivo del punto de recuperación (RPO), a menudo se utilizan como base para llegar a los acuerdos de niveles de servicio (SLA) de disponibilidad.
El resultado final de la planificación empresarial resulta en la identificación de Indicadores de rendimiento clave de disponibilidad, tales como:

• Disponibilidad SLA
• Funciones, transacciones y procesos críticos para el negocio
• Copia de seguridad de datos y archivo SLA
• Límites de tiempo de inactividad tolerable. entre otros.

Los desafios de la alta disponibilidad, es imprescindible identificar todos los desafios comunes para la alta disponibilidad. pero mencionamos algunos:

 Relacionados al Hardware:

Problemas de diseño y codificación de aplicaciones: un código de software mal escrito que no es escalable o que no maneja las excepciones causará fugas de memoria / conexión y puede bloquear el servidor, lo que provocará interrupciones en la producción.

Desafíos de interfaz empresarial y ascendente: debido a la naturaleza compleja de las aplicaciones de software empresarial actuales, las funcionalidades principales de la aplicación están vinculadas a la aplicación de backend, a menudo denominada "sistema de registro".

Relacionados al Proceso:

Ausencia del proceso de gobernanza de la disponibilidad: se necesita un proceso sólido de gobierno para establecer y mantener la máxima disponibilidad para la aplicación.

Ausencia del proceso de monitoreo y notificación: es crítico para una arquitectura de alta disponibilidad contar con un sistema de monitoreo continuo y en tiempo real, respaldado por un equipo de operaciones y mantenimiento de 24 horas. y entro muchos otros que se deben tener en cuenta.

Patrones de arquitectura de alta disponibilidad y mejores prácticas. estos están basadas en técnicas de instancias del mundo real. algunos de los patrones que mencionaremos son disenos para abordar desafíos:

Failover: durante escenarios de carga pesada, la capacidad del sistema para operar en caso de falla de un nodo o componente al cambiar transparentemente a otro componente de respaldo a menudo se conoce como failover.

Failback: ocurre después del failover, donde el nodo primario o el sitio primario se recupera de la falla y estará completamente operativo.

otros patrones son: Replication, Redundancy, Virtualization...




Apropiación de las bases conceptuales, patrones, mejores prácticas, etc de los atributos de calidad seleccionados.

Rendimiento: Optimizing Performance of Enterprise Web Application

El rendimiento de una aplicación ya sea web o nativa es uno de los factores de éxito de la misma, como lo es la velocidad de respuesta y la adaptación a diferentes plataforma de aquella aplicación. una aplicación web con un rendimiento excelente puede incrementar la cantidad de peticiones simultáneas de los usuarios, dando una mejor experiencia de usuario y siendo una aplicación competitiva y destacada en el mundo comercial, logrando impactar en un mundo de negocios y muy competitivo. Este tipo de mejoras se pueden llevar a cabo desde el proceso arquitectónico, ya sea por medio del mejoramiento de las distintas capas de software como de un aumento en la capacidad de cómputo desde la parte del hardware, con la realización de una escalamiento vertical o horizontal.
El rendimiento de una aplicación no es considerada como un requisito funcional, más sin embargo puede generar un gran impacto de dicha aplicación, siendo los siguientes los más sobresalientes.
• Ventaja Competitiva: Una página web con un bajo rendimiento que conlleve a una alta latencia, implica una decadencia en la cantidad de usuarios y pérdida de competitividad
• Experiencia de Usuarios: Un mejor velocidad de respuesta es un factor determinante a la hora de ser acogida por los usuarios, siendo un factor de alto impacto y de mucha influencia.
• Uso del Sitio: Una mejor experiencia de usuario implicaría un aumento de los mismo conectados en simultáneos, logrando una mejor posición en la categorización de los diferentes motores de búsqueda.
• Impacto Financiero: Un aumento de disminución de los usuarios en una plataforma web, sería uno de los principales factores que lograrían el éxito o fracaso económico de la misma.
Existen numerosos actos o errores en el diseño arquitectónico y programación de una plataforma web que conllevan a su fracaso, en donde particularmente resaltan los siguientes.
•Añadir componentes pesados tal como artilugios innecesarios que afecten el rendimiento o el tiempo de carga.
•Implementar plantillas con largas líneas de código “pesado”, las cuales contienen numerosas modificaciones de diseño en CSS, JS o ficheros de imágenes, aumentando el tiempo de respuesta o en su defecto la latencia.
•Integración en conjunto con servicios de terceros, siendo esto un factor de gran impacto a la hora de cargar y desplazarse por la página correctamente.
•Poco uso de recursos no comprimidos y peticiones HTTP poco estructuradas, junto con peticiones al servidor no optimizadas.

Una estrategia integral de optimización del rendimiento debe adoptar las siguientes pautas de diseño:
•Almacenamiento en Caché: Un buen manejo de la caché es una estrategia de éxito cuando de optimización de rendimiento se trata. Almacenar cada uno de los componentes de alto consumo o los cuales de requeridos con mucha frecuencia en caché puede implicar un mejoramiento en el tiempo de respuesta de la aplicación, acelerando cada una de la funcionalidades.
•Diseño para el fracaso: Desarrollar una aplicación teniendo en cuenta cada uno de los posibles factores de fallos, como fallas en el hardware, desastres naturales, ataques de seguridad, fallas en la operación, entre otro, puede llegar a ser un factor determinante sobre la aplicación resultante, ya que se pueden realizar optimizaciones durante el diseño arquitectónicos, como la implementación de la misma con altos estándares de calidad y con componentes poco propensos a errores.
•Computación paralela y distribuida: La implementación de un software diseñado para computación paralela o distribuida puede mejorar el rendimiento de la misma, debido a que esta tiene la capacidad por naturaleza de hacer uso de dos o más nodos de cómputo para cada una de sus funciones.
•Plataforma Liviana: Los componentes esenciales la aplicación como tal debería diseñarse y desarrollarse manteniendo una arquitectura liviana de poco consumo, reduciendo la cantidad de recursos requerida y minimizando la redundancia en los servicios. El uso de una arquitectura liviana y asíncrona, la implementación de artilugios ligeros, y el uso de una programación eficiente reducirán el impacto de la aplicación sobre la arquitectura hardware.
•Solicitudes Asíncronas y Procesos no Bloqueantes: Ya sean componentes del lado del cliente o para comunicarse con el servidor o para la agregación de datos, intente aprovechar el enfoque basado en AJAX. Esto mejora drásticamente el tiempo de carga de la página percibida y proporciona una carga de la página sin bloqueo.


La mayoría de los desarrollos de software a la hora de hacer implementaciones en vista del rendimiento, comenten algunos errores anti-patrones como los siguientes.   
A nivel de la infraestructura (Hardware)
•Hacer un uso no planificado de la capacidad del hardware, junto con un flujo de datos mayor al establecido.
•Realizar pruebas con sobrecargas y de capacidad al sistema poco realistas y sin números reales de rendimiento.
•Abstenerse o hacer un monitoreo en tiempo real poco extensivo de las notificaciones de la infraestructura.

A nivel de la aplicación (Software)
•Realizar servicios de comunicación con peticiones síncronas
•La no realización de las correspondientes pruebas de los diferentes escenarios
•No hacer uso de la lista de mejoras en el rendimiento a la hora del diseño e implementación de la aplicación.
•No adoptar "rendimiento por diseño" y considerar el rendimiento solo como una ocurrencia tardía.
•Realizar integración con servicios de terceros o con artilugios sin las correspondientes pruebas en el rendimiento y eficiencia.
•Realizar pruebas en el desempeño durante el final de la pruebas de respuesta.
•Diseño básico o la abstención a la hora de hacer uso adecuado del caché
•No realizar pruebas junto con un usuario final.

A nivel de procesos
•La inexistencia de un proceso de gobernanza del desempeño.
