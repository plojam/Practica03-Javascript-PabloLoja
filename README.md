# Formulario

Para la creación de la pagina de formulario, se usó una etiqueta form para contener el formulario, label para los textos dentro del mismo, input del tipo text para tener cuadros de texto donde se ingresará la información correspondiente y para finalizar, dos botones los cuales permitirán cancelar y verificar los datos ingresados.

![img1](/imagenes/i1.jpg)

Y se agrego formatos en un .css para que la pagina html tenga una mejor presentación, estos estilos son especialmente para asignación de colores, tamaños y para definir las ubicaciones de las etiquetas.

![img2](/imagenes/i2.jpg)

Para la implementación de JavaScript en esta página html, todas las cajas de texto dentro del html tienen la propiedad onkeyup, las cuales llamaran a diversas funciones de validación. Se creó un array general que contiene valores true o false, los cuales indican los campos que están validados correctamente. Luego, se creó una función que se conecta con el botón Aceptar, el cual verifica que, del array general, no exista ningún valor en falso (lo que significaría que un campo no está correcto), si existe un campo no verificado, se comprobaran todos los campos y se señalaran los que sean incorrectos, caso contrario, se mandara una alerta de que los campos son correctos y luego, la pagina será redireccionada a otra con extensión .php indicando que se llenó el formulario correctamente.

![img3](/imagenes/i3.jpg)

Se creo una función, las cuales serán útiles para los campos de cedula y teléfono puesto que esta función valida que no existan valores que no sean numéricos (comprobándolos con sus números ascii), además, se comprueba la longitud estos numero no supere los 10 dígitos. Cuando se incumplen estas restricciones, lo que hace el método es eliminar el digito recién ingresado.

![img4](/imagenes/i4.jpg)

De la misma forma, se creó una función que servirá para la validación de los campos de nombres y apellidos, esta función, usando la misma lógica, revisa que no existan caracteres que no sean letras en mayúsculas o letras en minúsculas, comprobando sus números ascii, si el carácter no es un valor aceptado, lo elimina.

![img5](/imagenes/i5.jpg)

Se agregaron dos funciones que serán usadas por varias funciones dentro del código, puesto que estas funciones cumplen la con el propósito de cambiar los estilos cuando un campo es o no valido. La primera, cambia los estilos cuando existe un error, genera un borde rojo en la caja de texto correspondiente y se le agrega a la clase error, y por último agrega un a su etiqueta de error correspondiente; mientras, el segundo hace lo contrario, quita el texto de la etiqueta, cambia el color del borde del cuadro de texto a verde indicando que esta correcto y le quita la clase a la que corresponde.

![img6](/imagenes/i6.jpg)

Estas funciones, visualmente devuelven los siguientes resultados.

![img7](/imagenes/i7.jpg)

Luego, para cumplir las validaciones correspondientes a las cedulas, se creó una función la cual primeramente comprueba que la longitud sea de 10 caracteres, si esto se cumple, se verificara que sea una cedula valida, esta verificación consiste en comparar el ultimo digito de la cedula con un valor obtenido mediante un proceso que incluye a los demás dígitos, si los valores coinciden, se indica que la cedula es verdadera.

![img8](/imagenes/i8.jpg)

Para la validación de las cajas de texto tanto para nombres y para apellidos se creó una función común puesto que los dos campos tienen los mismos requerimientos, la función creada obtiene la caja de texto y comprueba que no este vacía y que específicamente contenga 2 nombres o dos apellidos, caso contrario, otorgara los valores de error correspondientes.

![img9](/imagenes/i9.jpg)

Para la validación de la fecha se crearon 2 funciones, la primera comprueba que la cantidad de dígitos no exceda de 10 caracteres, también verifica que los datos sean números o /, caso contrario se elimina el carácter ingresado, también esta función genera automáticamente un / cuando se encuentra en una posición que lo requiera.

![img10](/imagenes/i10.jpg)

La otra función para la fecha, cuando todos los valores estén ingresados, separa el texto dependiendo de cuantos / tiene, por lo que, cuando tiene 3 partes, se verifica que el primero sea un valor valido de días, de igual manera se hace con los meses y también se comprueba que el año no sea superior al actual ni inferior a 1900.

![img11](/imagenes/i11.jpg)

Para validar un correo según las especificaciones dadas, se obtiene el valor de su campo correspondiente, luego se divide el texto en dos partes, dependiendo de @, luego se comprueba que el nombre de usuario del correo tenga una longitud mínima de 2 caracteres y luego se comprueba que la extensión del correo sea ups.edu.ec o est.ups.edu.ec, si estas comprobaciones son correctas, se valida el campo.

![img12](/imagenes/i12.jpg)

Para la validación de la contraseña, primero se comprobó que la longitud sea mayor a 8 caracteres, si se cumple esto, se comprueba que en toda la contraseña se incluya por lo menos uno de los caracteres especiales indicados, luego se comprueba, carácter por carácter, que al menos exista un carácter que sea una letra mayúscula y un carácter que sea una letra minúscula, por lo que, si se cumplen todos estos requerimientos, el texto se validara, caso contrario se devolverá una señal de no validación con un mensaje especial, dependiendo de que error se cometió.

![img13](/imagenes/i13.jpg)

Y para verificar que los campos dirección y teléfono no estén vacíos y devuelvan un error, se creó un método común el cual comprueba que tenga una longitud mayor a 0 caracteres, luego, se agrega una condición especial para comprobar que, si el campo a validar es el del teléfono, compruebe que debe haber 10 dígitos.

![img14](/imagenes/i14.jpg)

Y, para terminar, cuando se validan todos los campos y se presiona el botón agregar, se abre una página php la cual tiene un mensaje que dice que se ha validado la cuenta.

![img15](/imagenes/i15.jpg)

# Galería

Para la galería se generó un documento .html el cual contiene una sección dentro de su cuerpo, dicha sección contiene dos etiquetas div las cuáles serán las que contengan las imágenes y 3 botones que harán la función de pasar a la siguiente imagen, a la anterior y generar nuevas imágenes.

![img16](/imagenes/i16.jpg)

También se generó un archivo .css el cual se hizo especialmente para otorgar colores y para posicionar los componentes dentro de la página.

![img17](/imagenes/i17.jpg)

Para el archivo JavaScript se generaron tres variables globales, la primera contiene todas las imágenes disponibles, la segunda describe la posición o el numero de imagen que se estará mostrando en la mitad de la pagina y para la tercera variable es la que contendrá las 5 imágenes escogidas. Luego se generó la primera función que será utilizada cuando la pagina y inicie y cuando se dé clic al botón iniciar, esta función genera números aleatorios que no se repitan y se los almacenaran en la tercera variable global, luego estos valores son reemplazados por las direcciones de las imágenes seleccionadas, luego da un valor de 0 a la variable global de la posición, bloquea el botón que busca la imagen anterior, ubica las posiciones y visibilidad correspondiente, y coloca la primera imagen de la lista.

![img18](/imagenes/i18.jpg)

Luego se crearon variables globales que en un futuro contendrán a las etiquetas div que se encuentren en la mitad de la pagina o a un lado de la misma, también se crean dos variables que contienen las posiciones en las que se ubicaran las etiquetas div cuando se muevan a la izquierda. También se creó una función para cuando se de click en el botón siguiente, lo que esta función hará es comprobar que posición tocara ubicarse en el centro, entonces, dependiendo del resultado se colocara la imagen correspondiente y se indicara cual etiqueta div se encuentra en la mitad de la pagina y cual a un lado, luego se setean las posiciones de las dos etiquetas y se indica que la etiqueta que esta en un lado de la página será visible, por último se llama un método el cual permite comenzar el movimiento de las imágenes.

![img19](/imagenes/i19.jpg)

La función que se llama al final de la imagen anterior es la que usara un método especial de JavaScript y guardarla en una variable, este método es setInterval, el cual permite tener un temporizador continuo, lo que significa que ejecutara una función (moverIzq) cada cierto tiempo (en milisegundos).
Dicha función que es llamada es la que realiza el movimiento de las imágenes para la izquierda, se comprueba la posición que tendrá la imagen que se encuentra a un lado de la página, si esta es mayor a 23 (porcentaje donde la imagen se centra), entonces se bloquean los botones y las posiciones de las dos imágenes disminuyen en 1, caso contrario (lo que significa que la imagen ya se colocó en el centro), se habilitan los botones, se oculta la imagen que ya no es usada, se llama un método que será explicado a continuación y por último, se manda una señal para parar el temporizador.
La última función que se llama es la que habilita los botones de movimiento, si la posición es superior a 3, significa que es la ultima imagen de la lista, por lo que se bloqueará el botón de siguiente, caso contrario, el botón anterior será habilitado para su uso.

![img20](/imagenes/i20.jpg)

Luego, se crean variables globales para el movimiento de las imágenes a la derecha, estas variables indican las posiciones en las cuales se encontrarán las imágenes. Luego se crea una función para cuando el botón anterior es presionado, esta función hace lo contrario que la función para el botón siguiente, disminuye en uno la variable global posición y verifica que posición es, para así poder colocar la imagen que corresponde en el campo correcto y definir que etiqueta div se encuentra en la mitad y al lado de la página, luego se da posición y visibilidad al elemento que se encuentra a un lado de la pagina y se llama un método que será explicado a continuación.

![img21](/imagenes/i21.jpg)

La función que se llama es la que utilizara el método setInterval para el movimiento a la derecha, especificando que se realizara una función cada 15 milisegundos. La función que se ejecutara continuamente es la que permite el movimiento de las imágenes, por lo que se comprueba que la posición del elemento que se encuentra a un lado sea menor a 23, el cual es la posición centrada de los elementos, si se cumple esto, los botones son deshabilitados y se modifican las posiciones de los elementos tanto de la mitad como del lado de la imagen; si no se cumple, los botones son habilitados, se oculta la imagen desplazada, se llama a un método que se explicara a continuación y se manda una señal para detener este temporizador.
La función llamada comprueba si la imagen mostrada es la primera imagen del la lista de imágenes, por lo que si se comprueba esto, el botón que permite obtener una imagen anterior es deshabilitado, caso contrario, el botón siguiente se habilitara.

![img22](/imagenes/i22.jpg)

# Calculadora

Para la página html se colocó una caja de texto, también 17 botones los cuales representaran los números y operaciones que se pueden hacer.

![img23](/imagenes/i23.jpg)

Luego se agregaron estilos con un documento .css los cuales darán colores a ciertos elementos, da márgenes al cuadro de texto, además otorga un estilo fload: left a los botones con un margen especial y otros estilos. Además, indica que botones tendrán un botón clear: both para separar los botones en diferentes líneas.

![img24](/imagenes/i24.jpg)

Para el documento JavaScript se generaron 3 funciones, la primera corresponde a cuando se da click en los botones numéricos o botones que representan operaciones, esta función realiza una comprobación la cual indica si se ha dado click en el botón igual y el botón es un valor numérico, el cuadro de texto es reemplazado por el valor de llegada de la función, caso contrario, el valor es añadido a continuación del valor que ya tiene en el cuadro de texto.

![img25](/imagenes/i25.jpg)

La segunda función es para el botón que limpia la pantalla de la calculadora, lo que hace es setear un texto vacío dentro del cuadro de texto.

![img26](/imagenes/i26.jpg)

Y por último, hay una función para el botón igual, lo que hace esta función es evaluar la operación que este en cuadro de texto, el resultado que devuelve se reemplaza en el cuadro de texto.

![img27](/imagenes/i27.jpg)

