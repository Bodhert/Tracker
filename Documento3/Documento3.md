

**TÓPICOS ESPECIALES EN TELEMÁTICA**

**JUAN PABLO ALCARAZ FLOREZ**

**ALEJANDRO CORDOBA BODHERT**

**CRAIG DAVID CARTAGENA CASTANO**

**PROFESOR: EDWIN MONTOYA**

**UNIVERSIDAD DE EAFIT**

**INGENIERIA DE SISTEMAS**

**2018**

![Eafit Logo](eafit.png)

[I'm an inline-style link](https://www.google.com)

2. Diseño de arquitectura

    a) Vistas de desarrollo

        i) Definición de Tecnología de Desarrollo

            Node: es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

            Docker:  herramienta open-source que nos permite realizar una ‘virtualización ligera’, con la que poder empaquetar entornos y aplicaciones que posteriormente podremos desplegar en cualquier sistema que disponga de esta tecnología. 

            Mongo: Es una base de datos ágil que permite a los esquemas cambiar rápidamente cuando las aplicaciones evolucionan, proporcionando siempre la funcionalidad que los desarrolladores esperan de las bases de datos tradicionales, tales como índices secundarios, un lenguaje completo de búsquedas y consistencia estricta.

    ii) [Github](https://github.com/Bodhert/Tracker)

    a) Vista de software

    ![Vista de Software](software.png)

    b) Vista de despliegue

        i) 

            • Servidores: 3 servidores  intel ceon e5 2650 v4 , 2.2ghz

            • un core 

            • 30 mg cache l3

            • 30 mg cache l2

            • 256 k disco

            • 18 g disco duro 

            • 2g memoria ram

            • CentOs 7


![Vista de despliegue](despliegue.png)


ii) [url privada ](http://10.131.137.154:3000)



3. 

Rendimiento

• Se realizaron pruebas con JMeter a la aplicación antes de ser modificada y sin los atributos de calidad especificados, como a la aplicación una vez implementados cada uno de los QAs. De esta manera se muestra el tiempo de respuesta y cantidad de peticiones por segundo.

• Para el mejoramiento de la capacidad de carga del sistema o de transacciones por segundo se realizó modificaciones sobre la forma como se guardan los datos de las ubicaciones, de tal manera que no guarde información innecesaria como lo sería de la repetición de una ubicación ya guardada previamente.


Seguridad

• single sign on con auth0, es decir ya no se manejan los usuarios si no que mediante una api segura se
guardan los usuarios

• certificado local https.

• jwt , mediante auth0

Disponibilidad


• Balanceador de cargas con ngnx

• Disponibilidad de las bases de datos.














