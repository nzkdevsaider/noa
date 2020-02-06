let replies, reply, out, select, result, gifs;
module.exports = {
  // Common Replies
  generatingSomething(message) {
    replies = [`🔍 ${message.author} estoy búscando...`, `<:dnd:597588160163348480> Generando...`, `<a:lupa:609589952451444747> Realizando búsqueda...`, `Analizando datos, espere unos segundos...`, `❗ Realizando búsqueda...`, `⏳ Recopilando información...`, `📝 Escribiendo estructura de la búsqueda...`];
    reply = Math.floor(Math.random() * replies.length);
    return replies[reply];
  },
  pokedexGenerating(message) {
    replies = [`<:pokedex:651520687076278316> Obtiendo datos de la Pokédex Nacional...`, `<:pokedex2:651520943289663489> Descargando datos oficiales.`, `<a:yuirefresh:651513015274962984> Recopilando información Pokémon...`];
    reply = Math.floor(Math.random() * replies.length);
    return replies[reply];
  },
  sendCommandListToDM(message) {
    replies = [`Mi lista de comando ha sido envíada a tus mensajes privados!`, `Revisa tus mensajes privados.`, `Los comandos fueron empaquetados en tus mensajes privados.`, `El correo de comandos fue envíado a tus mensajes privados.`, `Revisa nuestros mensajes privados n.n/`, `**${message.author.tag}**, la lista de comandos ya está disponible en tus mensajes privados.`, `¡Enhorabuena! Mi lista de comandos ha llegado éxitosamente a tu mensajería privada <:ss:488544695073374218>`];
    reply = Math.floor(Math.random() * replies.length);
    return replies[reply];
  },
  noPerm(message) {
    replies = [`No tienes permisos para utilizar este comando.`, `Tú no estás autorizado para ejecutar este comando.`, `Tus permisos son insuficientes para usar este comando.`, `Este comando requiere de permisos administrativos.`];
    reply = Math.floor(Math.random() * replies.length);
    return replies[reply];
  },
  tryingAutoInfract(message) {
    replies = [`No te puedes sancionar a ti mismo. Intenta con otro usuario.`, `Lo siento, pero es imposible auto-sancionarte.`, `Por favor elige a otro usuario, ya que no te sancionar a ti mismo.`];
    reply = Math.floor(Math.random() * replies.length);
    return replies[reply];
  },
  // Replies
  ballYes(message) {
    out = ['¡Sí!', 'Afirmativo', 'La verdad que sí', 'No te lo puedo negar >.<', 'Obviamente', 'Efectivamente si', 'Es más que obvio', 'No hace ni falta decirlo dos veces... ¡Sí!', 'Sí', 'Sí >.<', 'Verdad', '¡Por su puesto!', 'Sí <3', 'Debo decirte que sí', 'Todos están de acuedo', 'Todos los miembros del servidor dicen que sí', 'Más claro que el agua', 'Así es.', 'Sí ;3;', 'En efecto. Todo es verdadero', 'Nope... Espera... Sí!!', 'Verdadero x)', 'Yeah! 💪'];
    result = Math.floor(Math.random() * out.length + 0);
    return out[result];
  },
  ballNo(message) {
    out = ['No', 'Ni lo pienses', 'No lo tomes en cuenta', 'Lastimosamente no', 'Si esto pasara sería el fin del mundo', 'Olvídalo, no sucederá', 'Todos dicen que no', 'No T-T', '¡No!', 'Todo el servidor dice que no', 'Nel pastel', 'Nunca'];
    result = Math.floor(Math.random() * out.length + 0);
    return out[result];
  },
  ballMaybe(message) {
    out = ['No sé', 'Quizá', 'Tal vez', 'Es probable', 'La ciencia no lo sabe', 'A lo mejor', 'Si tienes más suerte', 'Quizás O.o', 'Intenta de nuevo', 'La pregunta no tiene sentido', 'La verdad, no se sabe', 'Nadie lo sabe', 'Ver para creer', 'Tu respuesta sobrepasa mis conocomientos', '¿Acaso quieres que el mundo explote?', 'Estás muy joven para preguntar esas cosas', 'IDK', 'Yo que sé', 'Ignorado', 'T-Tengo tanto sueñooo que estoy por... *Se duerme*', 'Espere unos 10 años para que Internet Explorer lo analice.'];
    result = Math.floor(Math.random() * out.length + 0);
    return out[result];
  },
  reply(option, message) {
    let options = ['tickle', 'hug', 'tired', 'think', 'suicide', 'smug', 'smile', 'sleep', 'shrug', 'scream', 'run', 'nervous', 'like', 'lewd', 'hello', 'laugh', 'facepalm', 'eat', 'dizzy', 'depressed', 'dance', 'cry', 'confused', 'bye', 'bored', 'boom', 'blush', 'banghead', 'angry'],
      reps;
    if (!option) return new Error('Necesitas proporcionar una opción válida,\nOpciones válidas: ' + options.join(', '));
    if (typeof option !== 'string') return new Error('La opción necesita ser una cadena de texto');
    if (!message) return new Error('Necesitas proporcionar el objeto del mensaje');
    option = option.toLowerCase();
    if (!options.includes(option)) return new Error('Esa no es una opción válida');
    // return reps[Math.floor(Math.random() * reps.length)];
    if (option === options[0]) {
      // tickle
      reps = [`**${message.author.username}** recibió cosquillas de mi parte`, `**${message.author.username}** se hizo cosquillas solo debido a que nadie más lo hizo`, `**${message.author.username}** ríe, las cosquillas son para eso`, `Toma **${message.author.username}** y ríete de mis cosquillas`];
    } else if (option === options[1]) {
      // hug
      reps = [`**${message.author.username}** ten un abrazo de mi parte :3`, `Ahora **${message.author.username}** se abrazó solo`, `**${message.author.username}** quería un abrazo y como nadie se lo dio, te lo daré yo n.n`, `**${message.author.username}** recibiste un abrazo de una persona desconocida`];
    } else if (option === options[2]) {
      // tired
      reps = [`**${message.author.username}** está cansad@.`, `**${message.author.username}** se siente cansado.`, `El cansancio le llegó a **${message.author.username}**.`, `**${message.author.username}** está rendido por trabajar.`];
    } else if (option === options[3]) {
      // think
      reps = [`**${message.author.username}** está pensando`, `¡Vamos **${message.author.username}** casi lo consigues, solo piensa un poco más!`, `¿Qué estás pensando **${message.author.username}**? `, `**${message.author.username}** piensa, piensa`, `No pienses mucho **${message.author.username}** te podría explotar la cabeza`, `**${message.author.username}** simplemente está pensado`, `**${message.author.username}** empezo a pensar que hace con su vida...`];
    } else if (option === options[4]) {
      // suicide
      reps = [`**${message.author.username}** se suicidó`, `Vaya... **${message.author.username}** se fue de este mundo`, `**${message.author.username}** lo hizo... Ahora ya no está con nosotros T-T`, `**${message.author.username}** se ha suicidado...`];
    } else if (option === options[5]) {
      // smug
      reps = [`Parece que a **${message.author.username}** le dio por presumirse.`, `**${message.author.username}** está presumiendose.`, `**${message.author.username}** está presumiendo.`, `**${message.author.username}** presume a su novia.`];
    } else if (option === options[6]) {
      // smile
      reps = [`**${message.author.username}** está sonriendo`, `**${message.author.username}** está muy feliz, motivo por el cual sonrie`, `**${message.author.username}** sonreir es bueno para la salud`, `**${message.author.username}** sigue sonriendo`];
    } else if (option === options[7]) {
      // sleep
      reps = [`**${message.author.username}** que tengas dulces sueños`, `**${message.author.username}** estaba muy cansado, así que se durmió`, `Por favor, todos callados para que **${message.author.username}** descanse`, `Al parecer **${message.author.username}** se durmió`, `**${message.author.username}** estaba en una reunión y no resistió más hasta quedar dormido`, `**${message.author.username}** duerme que mañana hay escuela`, `**${message.author.username}** descansa un poco`];
    } else if (option === options[8]) {
      // shrug
      reps = [`Parece que a **${message.author.username}** le valió madres.`, `**${message.author.username}** encojió los hombros.`, `A **${message.author.username}** le da igual.`];
    } else if (option === options[9]) {
      // scream
      reps = [`**${message.author.username}** está gritando.`, `**${message.author.username}** grita como un loco.`, `**${message.author.username}** está gritando de deseperación.`, `**${message.author.username}** grita más que una lora.`, `**${message.author.username}** se quedará sin voz de tanto gritar. ~n`];
    } else if (option === options[10]) {
      // run
      reps = [`**${message.author.username}** salió disparado como una bala.`, `**${message.author.username}** sacó su máxima velocidad para huir.`, `**${message.author.username}** se está corriendo de las autoridades.`, `**${message.author.username}** salió corriendo.`, `A **${message.author.username}** le dio por salir corriendo.`, `¿Es un avión?... ¿Es una bala?... No... Es... **${message.author.username}**`, `**${message.author.username}** continua corriendo.`, `**${message.author.username}** corre... corre... sin parar!`];
    } else if (option === options[11]) {
      // nervous
      reps = [`**${message.author.username}** está sumamente nervioso`, `**${message.author.username}** pasó a tener demasiados nervios.`, `**${message.author.username}** se le nota muy nervioso o.0`];
    } else if (option === options[12]) {
      // like
      reps = [`A **${message.author.username}** le gustó eso.`, `**${message.author.username}** dió el pulgar hacia arriba.`, `Al parecer a **${message.author.username}** le gusta.`];
    } else if (option === options[13]) {
      // lewd
      reps = [`**${message.author.username}** se puso lascivo, cuidado!`, `**${message.author.username}** está lascivo`, `**${message.author.username}** mostró su lado pervertido o///o`];
    } else if (option === options[14]) {
      // hello
      reps = [`**${message.author.username}** está saludando`, `**${message.author.username}** saluda a la cámara`, `**${message.author.username}** es muy cortez y saluda a todos`];
    } else if (option === options[15]) {
      // laugh
      reps = [`**${message.author.username}** está riéndose.`, `A **${message.author.username}** le dio un ataque de risa`, `**${message.author.username}** se ríe con muchas ganas.`, `**${message.author.username}** se ríe de un chiste.`];
    } else if (option === options[16]) {
      // facepalm
      reps = [`**${message.author.username}** está decepcionado.`, `**${message.author.username}** se decepcionó.`, `**${message.author.username}** se estampó la cara.`];
    } else if (option === options[17]) {
      // eat
      reps = [`**${message.author.username}** está comiendo`, `**${message.author.username}** tenía hambre y decidió comer`, `**${message.author.username}** olvidó que estaba haciendo dieta y empezó a comer`, `Hey **${message.author.username}**, ¡buen provecho!`];
    } else if (option === options[18]) {
      // dizzy
      reps = [`**${message.author.username}** está mareado`, `**${message.author.username}** se mareó por que le teme a las alturas`, `Bueno... **${message.author.username}** se ha mareado. No sabemos el motivo`, `Al parecer **${message.author.username}** se mareó`, `**${message.author.username}** se mareó por que no había desayunado`, `**${message.author.username}** tiene mareo por que está nervioso`, `**${message.author.username}** simplemente se mareó. Quizá fueron los extraterrestres`];
    } else if (option === options[19]) {
      // depressed
      reps = [`**${message.author.username}** está deprimido`, `**${message.author.username}** se ha deprimido`, `**${message.author.username}** entró en depresión`, `Al parecer **${message.author.username}** se olvidó de tomar las pastillas para la depresión`, `**${message.author.username}** está deprimido por que su novia lo dejo.`, `**${message.author.username}** se deprimió por que se dio cuenta que ella no lo ama`, `**${message.author.username}** simplemente nadie lo quiere y por eso esta deprimido`];
    } else if (option === options[20]) {
      // dance
      reps = [`**${message.author.username}** está bailando`, `**${message.author.username}** se adueña de la discoteca con su baile`, `Todos los DJ's miran como está bailando **${message.author.username}**`, `¡Es hora de bailar **${message.author.username}**!`, `Listo, ahora **${message.author.username}** es el dueño de la discoteca`, `**${message.author.username}** se está luciendo con esos pasos`, `**${message.author.username}** baila`];
    } else if (option === options[21]) {
      // cry
      reps = [`**${message.author.username}** está llorando por que su novia lo abandonó`, `**${message.author.username}** está llorando`, `**${message.author.username}** espero dejes de llorar pronto`, `**${message.author.username}** lo siento, no pude hacer nada para evitar esto... Lo mejor es llorar`, `**${message.author.username}** está a punto de llenar los océanos de tanto llorar.`, `**${message.author.username}** estaba tan triste que se puso a llorar T-T`];
    } else if (option === options[22]) {
      // confused
      reps = [`**${message.author.username}** se confundió.`, `**${message.author.username}** estaba tan concentrado pero lo distrajeron y se confundió.`, `Ahora **${message.author.username}** se confundió.`, `Sin querer, **${message.author.username}** se confundió`, `Pensando en ella **${message.author.username}** se confundió`];
    } else if (option === options[23]) {
      // bye
      reps = [`**${message.author.username}** se despide de todos`, `**${message.author.username}** ya se va y por eso se despide de todos.`, `**${message.author.username}** se aburrió y decidió irse, pero sin antes despedirse`];
    } else if (option === options[24]) {
      // bored
      reps = [`**${message.author.username}** está aburrido.`, `Pobre de **${message.author.username}**, parece estar aburrido T-T`, `**${message.author.username}** se aburre de buscarle el sentido a la vida.`, `**${message.author.username}** se aburrió.`, `**${message.author.username}** está aburrido debido a lo mal que va en la vida.`];
    } else if (option === options[25]) {
      // boom
      reps = [`¡BOOM!`];
    } else if (option === options[26]) {
      // blush
      reps = [`**${message.author.username}** está sonrojado uwu`, `**${message.author.username}** se sonrojó.`, `**${message.author.username}** anda sonrojándose uwu`];
    } else if (option === options[27]) {
      // banghead
      reps = [`**${message.author.username}** se estampó con la cara.`, `**${message.author.username}** se golpeó la cabeza.`, `**${message.author.username}** casi queda noqueado por que se golpeó con la cabeza!`];
    } else if (option === options[28]) {
      // angry
      reps = [`**${message.author.username}** está enojado`, `Vaya... **${message.author.username}** ha desatado su ira`, `Es mejor no hablarle a **${message.author.username}**, por qué está enojado`, `**${message.author.username}** no molestarlo. Está enojado`];
    } else {
      return `**${message.author.username}**, parece que algún desarrollador rompió la matrix`;
    }
    return reps[Math.floor(Math.random() * reps.length)];
  },
  // Gifs
  ballYesG() {
    gifs = [
      'https://media1.tenor.com/images/86f6b5ac2d58b9956435f5aeb1e2ac5b/tenor.gif?itemid=10853262',
      'https://media1.tenor.com/images/13d12906ab6c24e688a1144f85199e98/tenor.gif?itemid=10627589',
      'https://media1.tenor.com/images/141685ee0373b6ccbe6ac8fe52cf37a9/tenor.gif?itemid=10880414',
      'https://media1.tenor.com/images/ecad438e52beccce29765710049c375a/tenor.gif?itemid=4505671',
      'https://media1.tenor.com/images/0a3589d141f2a18f78c62db3dc950112/tenor.gif?itemid=10780533',
      'https://media1.tenor.com/images/7e3c98517d788005f4b256efdb8f031e/tenor.gif?itemid=9911297',
      'https://media1.tenor.com/images/12c8c667a2835de9b1db0be64b4a0e6c/tenor.gif?itemid=5122906',
      'https://media1.tenor.com/images/0b673f57807af5ac91e68091ed1549ab/tenor.gif?itemid=10883460',
      'https://media1.tenor.com/images/db862a20099cefcde250c816172ec9a9/tenor.gif?itemid=6372984',
      'https://media1.tenor.com/images/46f92f5d96b952af2f7fd8dfa98e94a4/tenor.gif?itemid=6181819',
      'https://media1.tenor.com/images/cb0f030f0e9c20e445e9209cf45d93bb/tenor.gif?itemid=8886871',
      'https://media1.tenor.com/images/b348f0ed63e012af15fb22534fa40201/tenor.gif?itemid=12046342',
      'https://media1.tenor.com/images/95019b7efc887f03fb574f9af8e9413c/tenor.gif?itemid=9565085',
      'https://media1.tenor.com/images/c0674774e1c5538d3e607f000278cbcf/tenor.gif?itemid=11949289',
      'https://media1.tenor.com/images/e24ae3ca5e9410203adaddf05692fd6b/tenor.gif?itemid=12255658',
      'https://media1.tenor.com/images/b7077296f9a4230e873bbe944e286486/tenor.gif?itemid=12004987',
      'https://media1.tenor.com/images/65489b07c007fb5f4ab911f9a2bc03a5/tenor.gif?itemid=12259624',
      'https://media1.tenor.com/images/6a2c6c04971893f0ad31516b7300c652/tenor.gif?itemid=11480347',
      'https://media1.tenor.com/images/5ad169f95ed2da2d7a36c82b07f9e61e/tenor.gif?itemid=11642922',
      'https://media1.tenor.com/images/54e8631b77e3612be9a217ed98961447/tenor.gif?itemid=9911334',
      'https://media1.tenor.com/images/a79649fc341ed02445706a592a0c6b46/tenor.gif?itemid=7967630',
      'https://media1.tenor.com/images/ae8dc8de985cacc2340f10b2b2db0f24/tenor.gif?itemid=9340442',
      'https://media1.tenor.com/images/38200478b91db2d19a12ecf4672391c9/tenor.gif?itemid=10138734',
      'https://media1.tenor.com/images/45cc8aa4755310a88cff35f6880f1aaa/tenor.gif?itemid=7659021',
      'https://media1.tenor.com/images/0285f73b12382b63159daec9d08851a2/tenor.gif?itemid=8871660',
      'https://media1.tenor.com/images/9940e441c9bd345735ac2c4944d0ea84/tenor.gif?itemid=7568792',
      'https://media1.tenor.com/images/1a97b46ae10696e276f90876cc3ac23c/tenor.gif?itemid=7563556',
      'https://media1.tenor.com/images/13d12906ab6c24e688a1144f85199e98/tenor.gif?itemid=10627589',
      'https://media1.tenor.com/images/ca63ad808481a956b5410349e42d1c9a/tenor.gif?itemid=5395893',
      'https://media1.tenor.com/images/e033d2254cd553d8169afa05492feb06/tenor.gif?itemid=10871297',
      'https://media1.tenor.com/images/fb9249a9a75b2e0129b496438d7c7ad8/tenor.gif?itemid=9517014',
      'https://media1.tenor.com/images/782efd91d01dae2b1534e52fbc076d37/tenor.gif?itemid=4065610',
      'https://media1.tenor.com/images/5069e1153e49f49b4e2d9228f9bc56ec/tenor.gif?itemid=5594910',
      'https://media1.tenor.com/images/ba3ce25c5749d06941aa340bc1e55f83/tenor.gif?itemid=4618312',
      'https://media1.tenor.com/images/378f3ed38789d24b494b85ae63f7e5ba/tenor.gif?itemid=9928402',
      'https://media1.tenor.com/images/bd1b53ff495f70aac1eaff370633e2bd/tenor.gif?itemid=3461590',
      'https://media1.tenor.com/images/192491eedee9c4220b177b28556a7852/tenor.gif?itemid=7480904',
      'https://media1.tenor.com/images/61805415090d1248d9358ef9b0c01090/tenor.gif?itemid=9807877'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  ballNoG() {
    gifs = [
      'https://media1.tenor.com/images/2cf373aef8fedfa21cc1f5587a6f9e2b/tenor.gif?itemid=8620719',
      'https://media1.tenor.com/images/294f0756c916983835e855df0cc4a6e6/tenor.gif?itemid=5799534',
      'https://media1.tenor.com/images/0b25ec49614ec04b3d51a030a09b7dc7/tenor.gif?itemid=5703082',
      'https://media1.tenor.com/images/5768f9f99be830649a85dacd2a5809a3/tenor.gif?itemid=9423903',
      'https://media1.tenor.com/images/782aa1a037423aa86729353fe0296ca1/tenor.gif?itemid=9514682',
      'https://media.tenor.com/images/21474b3088522f76843e7829aadbf8e6/tenor.gif',
      'https://media.tenor.com/images/1d146ebd05d8213fd0418d3290763a00/tenor.gif',
      'https://media1.tenor.com/images/3f10d4ba54de4302c1ea37ce0b272d40/tenor.gif?itemid=8620723',
      'https://media1.tenor.com/images/2cf373aef8fedfa21cc1f5587a6f9e2b/tenor.gif?itemid=8620719'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  ballMaybeG() {
    gifs = [
      'https://media1.tenor.com/images/7b04c9cdaf8954bb4d304df8f289ab69/tenor.gif?itemid=5252189',
      'https://media1.tenor.com/images/8e74b7dbfadfd639c35cfddf33252bbd/tenor.gif?itemid=5655161',
      'https://media1.tenor.com/images/c8db0c0213c835832785ed2755b283c9/tenor.gif?itemid=5420884',
      'https://media1.tenor.com/images/a73051893d9d9f5a20af2516842d1154/tenor.gif?itemid=5679401',
      'https://media1.tenor.com/images/3a50af2c2e80cd74c13773b3a03b548e/tenor.gif?itemid=9449608',
      'https://media1.tenor.com/images/a7ac517886e77dc2878fea18d0168dbf/tenor.gif?itemid=10854897',
      'https://images.gr-assets.com/hostedimages/1437641481ra/15606389.gif',
      'https://pa1.narvii.com/5820/f64b7fcf7c23079b6b3d1cc39b9dda802a6dd605_hq.gif',
      'https://media1.tenor.com/images/ea8a415b5533d169f336859c148cca71/tenor.gif?itemid=4665454',
      'https://media1.tenor.com/images/818f89c2a4adccbbfbd80a818c34269a/tenor.gif?itemid=8987124',
      'https://media1.tenor.com/images/33ea50dfd16b612f974d0100f90e0349/tenor.gif?itemid=5372603',
      'https://media1.tenor.com/images/f7eda1045359b36e660d87c5025c5499/tenor.gif?itemid=5486298',
      'https://media1.tenor.com/images/e2f34aa9af8c2034373e652125d2a947/tenor.gif?itemid=6091841',
      'https://media1.tenor.com/images/4370d233d5a77bc6054ce55c2bd125d7/tenor.gif?itemid=5609852',
      'https://media1.tenor.com/images/593fff0d8dff90a5f55d7c35f0c603e8/tenor.gif?itemid=4955442',
      'https://media1.tenor.com/images/74fa12a732208cadfd02abd9ce5af515/tenor.gif?itemid=4955454',
      'https://media1.tenor.com/images/c37eae1b532cdd7d60d9abb04caf617f/tenor.gif?itemid=9912747',
      'https://media1.tenor.com/images/6e7f9537345fc0e3f0d8ef9455e35fd1/tenor.gif?itemid=11828159',
      'https://media1.tenor.com/images/638fb06e79fc53891ba722133b0ef714/tenor.gif?itemid=7270304',
      'https://media1.tenor.com/images/b4e998013ffce08bd0416d499dfbd6be/tenor.gif?itemid=12171120',
      'https://media1.tenor.com/images/3a50af2c2e80cd74c13773b3a03b548e/tenor.gif?itemid=9449608',
      'https://media1.tenor.com/images/49bdaa1edd36fa9fda6f75c47bf58a16/tenor.gif?itemid=4272869',
      'https://media1.tenor.com/images/59f2c768dc498abb52e193f1affa8f4d/tenor.gif?itemid=7868985',
      'https://media1.tenor.com/images/230ae7123a4c3a5fc0aaddf254526497/tenor.gif?itemid=9449495',
      'https://media1.tenor.com/images/9acf02059c29f56a4eaa471375377868/tenor.gif?itemid=8330631',
      'https://media1.tenor.com/images/eeef6eada13dbed896d0a4f651fbcffe/tenor.gif?itemid=11000805',
      'https://media1.tenor.com/images/d3db2251496c034939206aedeb304386/tenor.gif?itemid=5827691',
      'https://media1.tenor.com/images/eac37ad8ebb837aa6b4bb05155581f68/tenor.gif?itemid=8173955',
      'https://media1.tenor.com/images/3cc3a139a0625373d52c73ce3bf779b0/tenor.gif?itemid=8494430',
      'https://media1.tenor.com/images/c4c5098b3e5b16358dc7e01a2bf8692b/tenor.gif?itemid=4367432',
      'https://media1.tenor.com/images/d32ea762eab7216df706c3398b044825/tenor.gif?itemid=4402478',
      'https://media1.tenor.com/images/282fc41c111659aed5f5a7a17764bb8b/tenor.gif?itemid=8069756',
      'https://media1.tenor.com/images/26c9b4da79b79bd5073ea827ff4337fc/tenor.gif?itemid=9954779',
      'https://media1.tenor.com/images/89e2517138bc66dd8c82438e736cbeda/tenor.gif?itemid=8679320',
      'https://media1.tenor.com/images/dbe1ca7fdb532cf96a9bea40fa1f406e/tenor.gif?itemid=9724581',
      'https://media1.tenor.com/images/62fb4a540cffdb3605201a31c428a0e4/tenor.gif?itemid=12286564',
      'https://media1.tenor.com/images/054b2a08f39115ee052980484e1bec8b/tenor.gif?itemid=5964966',
      'https://media1.tenor.com/images/dc93fb88e369e3b8affb9ff636a2fa8d/tenor.gif?itemid=3635517',
      'https://media1.tenor.com/images/07ad4dff1580660dd009f041cdeac7be/tenor.gif?itemid=10759884',
      'https://media1.tenor.com/images/9105ec1aa0c9c249e16483a48de3539b/tenor.gif?itemid=5252598',
      'https://media1.tenor.com/images/053a9ece4298fbb81f0ae5406e5fc2e3/tenor.gif?itemid=12787691',
      'https://media1.tenor.com/images/de1d806c4433afc7e7940ce9b8079224/tenor.gif?itemid=9377496'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  angryGifs() {
    gifs = [
      'https://media1.tenor.com/images/3424df822494d78bc184aae3e14d84e3/tenor.gif?itemid=4675166',
      'https://media1.tenor.com/images/096ae5d6a01a605739debd440dc36d58/tenor.gif?itemid=7347857',
      'https://66.media.tumblr.com/89d754b79aca4a93d252aa9a17a44a29/tumblr_p8ywp2bx4o1vmiunio1_400.gif',
      'https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif',
      'https://media0.giphy.com/media/U77FFxuyoIPvHEIgkq/giphy.gif',
      'https://cdn.myanimelist.net/s/common/uploaded_files/1473860062-4005d021b099337f79946653ab489424.gif',
      'https://66.media.tumblr.com/f3ad00e7be3649849bdbe9f67559d03d/tumblr_o0s1fnSaYU1tydz8to1_400.gif',
      'https://media1.tenor.com/images/856ceaea3e84561af61e0ee20c914b65/tenor.gif?itemid=10528179',
      'https://i.gifer.com/ShnH.gif',
      'https://gifimage.net/wp-content/uploads/2017/07/angry-anime-gif.gif',
      'http://31.media.tumblr.com/71deee902dbf433e900c1da751942345/tumblr_mmnfkbq0OI1s2mvo5o1_500.gif',
      'https://media1.tenor.com/images/a5919cfa4e6d439c6a9ce8c792f57217/tenor.gif?itemid=9923313',
      'https://cdn57.picsart.com/179942338000202.gif',
      'https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724',
      'https://media1.tenor.com/images/23632985df417dd0faf2fe7f1e5e80d3/tenor.gif?itemid=9180783',
      'https://media1.tenor.com/images/386fb4996e952415422e4de3f7ff9273/tenor.gif?itemid=6209492',
      'https://media1.tenor.com/images/f6f4ea60b8d8519995e5bd56be79a29d/tenor.gif?itemid=10543167',
      'https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif?itemid=5178234',
      'https://media1.tenor.com/images/380b96c755c9d0855a784c8f51e1515f/tenor.gif?itemid=7885147',
      'https://media1.tenor.com/images/ef0ede60c9425f03f3540b8d34d61535/tenor.gif?itemid=7302937',
      'https://media1.tenor.com/images/a5919cfa4e6d439c6a9ce8c792f57217/tenor.gif?itemid=9923313',
      'https://media1.tenor.com/images/52560e044056cd971892506ce85eb987/tenor.gif?itemid=4436406',
      'https://media1.tenor.com/images/ce9aed75d40e0bb50bdcd4428b0e5cf4/tenor.gif?itemid=8045782',
      'https://media1.tenor.com/images/68bdb7f778cf76bfaa256ebf53164558/tenor.gif?itemid=5591675',
      'https://media1.tenor.com/images/34c47f115fb95824b086652182f3f14a/tenor.gif?itemid=5552947',
      'https://media1.tenor.com/images/1de5d764eaab2f56f188467122ca4fd7/tenor.gif?itemid=8860186',
      'https://media1.tenor.com/images/0b3ab5fb63983ad6c48346f3a2c8a52c/tenor.gif?itemid=4888832',
      'https://media1.tenor.com/images/3304de583bb3bb948ba0d32c0ca252f9/tenor.gif?itemid=8479272',
      'https://media1.tenor.com/images/6aead8bb5474332805ae929d957c52ec/tenor.gif?itemid=10528183',
      'https://media1.tenor.com/images/40383ad4bf828866d7bd67f5fa15d56d/tenor.gif?itemid=5181787',
      'https://i.gifer.com/ExLH.gif',
      'https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif',
      'https://thumbs.gfycat.com/TepidGraciousDotterel-max-1mb.gif',
      'https://thumbs.gfycat.com/GoodnaturedMemorableKomododragon-size_restricted.gif',
      'https://i.gifer.com/Bxvr.gif',
      'https://thumbs.gfycat.com/AgedJubilantApatosaur-small.gif',
      'https://media1.tenor.com/images/b4674280c1039b3336229ab36a15de4e/tenor.gif?itemid=8015474',
      'https://i.pinimg.com/originals/48/c9/e6/48c9e63dab056b31a267b2de26f4cbf6.gif',
      'https://thumbs.gfycat.com/FickleGleamingApatosaur-size_restricted.gif',
      'http://gif-finder.com/wp-content/uploads/2016/03/Death-Note-Gif-Light-Yagami-Kira-Gets-Angry-The-Last-Episode.gif',
      'https://data.whicdn.com/images/213730599/original.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  bangheadGifs() {
    gifs = [
      'https://media1.tenor.com/images/ba71fc9b0282c9c3d16a51c5b1c3dd55/tenor.gif?itemid=10035524',
      'https://media1.tenor.com/images/0b35bd99fc0a139ccbc8f0768f5ea013/tenor.gif?itemid=7357746',
      'https://pa1.narvii.com/6040/14dd67ec05e09c7f772bae368e62b9cdbf997f03_hq.gif',
      'http://www.reactiongifs.com/r/bmh.gif',
      'https://thumbs.gfycat.com/GrossPleasedAmericanquarterhorse-max-1mb.gif',
      'https://i.pinimg.com/originals/4b/49/1b/4b491bd3e67b3d54d9a3e35a8770ff78.gif',
      'https://media.tenor.com/images/78e6d3b9e9091d5cf8e731a050af6c7a/tenor.gif',
      'https://media2.giphy.com/media/CphBpuaoIjwk0/giphy.gif',
      'http://i.imgur.com/NRzeq0N.gif',
      'https://media3.giphy.com/media/YmsrJ7AsmdtLO/giphy.gif',
      'https://media3.giphy.com/media/HLFrikVUOsi9a/giphy.gif',
      'https://thumbs.gfycat.com/ColossalSilentBluebreastedkookaburra-small.gif',
      'https://thumbs.gfycat.com/JovialEducatedAllensbigearedbat-small.gif',
      'https://media.tenor.com/images/135c517a73d8f019fa21ef56ee77e85c/tenor.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  blushGifs() {
    gifs = [
      'https://media1.tenor.com/images/84307582253a96e4552d20e3ecef3a33/tenor.gif?itemid=5531498',
      'https://media1.tenor.com/images/274fc34d3add3ce4cbb5716cb4f94f4f/tenor.gif?itemid=5841198',
      'https://media1.tenor.com/images/7ae3f6f1c48b01549b855cb0f6b1c4d7/tenor.gif?itemid=5658972',
      'https://media1.tenor.com/images/8fbb6ba53ea92b8fafa071ab4c4c9e31/tenor.gif?itemid=7363038',
      'https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361',
      'https://media1.tenor.com/images/f62cae32b30d364bf0a8a1e7432c2ddf/tenor.gif?itemid=10198325',
      'https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309',
      'https://media1.tenor.com/images/ea8977dd6dc918c2d0fc253d714105f4/tenor.gif?itemid=10750489',
      'https://media1.tenor.com/images/a7e87466022015e036c06c3927c251f9/tenor.gif?itemid=8971744',
      'https://media1.tenor.com/images/e0dddee577a142b91941d6642f98321c/tenor.gif?itemid=5001273',
      'https://media1.tenor.com/images/0c36e794bfdfcaf837fb114d46e5c8fc/tenor.gif?itemid=7275601',
      'https://media1.tenor.com/images/dc917566da214fa3c4e7ddcc58228db9/tenor.gif?itemid=3554995',
      'https://media1.tenor.com/images/086bcd944fc9f41200a92c5d06c1a7ea/tenor.gif?itemid=5612593',
      'https://media1.tenor.com/images/b10159104084d5ecc1585559ed3e551f/tenor.gif?itemid=11034212',
      'https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif?itemid=9780123',
      'https://media1.tenor.com/images/cf3b6541b4c6d36e41aa3ae8427ea3bf/tenor.gif?itemid=7866278',
      'https://media1.tenor.com/images/5838f2442696636b1ee57dc4063e697b/tenor.gif?itemid=8861474',
      'https://media1.tenor.com/images/6fb2bb2333394363ca036821eefeef9c/tenor.gif?itemid=11970001'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  boomGifs() {
    gifs = ['https://media1.tenor.com/images/2688bfc21081a9ddd6a9903fd788f0d3/tenor.gif?itemid=6097543', 'https://media1.tenor.com/images/3daa078c7128766260beea97172e5c46/tenor.gif?itemid=9920846', 'https://media1.tenor.com/images/f55300bb85d5f4135a12efc538b5225c/tenor.gif?itemid=7257186', 'https://i.gifer.com/8vvH.gif', 'https://thumbs.gfycat.com/TenseWebbedFinch-size_restricted.gif', 'https://i.gifer.com/WkKv.gif', 'https://66.media.tumblr.com/942f42dea5e63c17e76a3d616c67f7e7/tumblr_p2qpwwLbWH1x2ubpjo1_500.gif', 'https://data.whicdn.com/images/161408565/original.gif', 'https://media.giphy.com/media/C0wV5gxQkaQuY/giphy.gif'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  boredGifs() {
    gifs = [
      'https://media1.tenor.com/images/68fe5063a6e69b0c6e3ebdffd18158b8/tenor.gif?itemid=9920855',
      'https://media1.tenor.com/images/2ca8c86c25bb2a2292bc0654fed2db97/tenor.gif?itemid=7615221',
      'https://media1.tenor.com/images/6411f8e21d6658632bb326b0f6d1b3b6/tenor.gif?itemid=7432092',
      'https://media1.tenor.com/images/3d21f9650c9231ef69562b62a3eb1a12/tenor.gif?itemid=4566455',
      'https://media1.tenor.com/images/3687130d2490d4011c088e31ba38b4f4/tenor.gif?itemid=5897451',
      'https://media1.tenor.com/images/05a19b961f17d13c9ac8d5e634d7f85c/tenor.gif?itemid=5184530',
      'https://media1.tenor.com/images/9cef52ce27ab97e0fa9cfac1cdc1007f/tenor.gif?itemid=9525859',
      'https://media1.tenor.com/images/b2fbc2cf9c39f961d175a5cf95d3e5c5/tenor.gif?itemid=8943561',
      'https://media1.tenor.com/images/fded36835d7f8da75d7591e04822f08f/tenor.gif?itemid=9352883',
      'https://media1.tenor.com/images/9f159b9dbf0f93a2101015b2a0f665a7/tenor.gif?itemid=5577876',
      'https://media1.tenor.com/images/d76fdb43bec84185670b091e20542665/tenor.gif?itemid=12497577',
      'https://media1.tenor.com/images/a5b9474c7ffdc4787bf787d6f93c9c56/tenor.gif?itemid=12693422',
      'https://media1.tenor.com/images/d63e9b62702a9c8ff079c5a289a2ec19/tenor.gif?itemid=12518589',
      'https://media1.tenor.com/images/56d2c237d309d20a4d41d1ba5cad1b2c/tenor.gif?itemid=7307167',
      'https://media1.tenor.com/images/683512fe145ac42d8ef6f0295d4733a0/tenor.gif?itemid=5116041',
      'https://media1.tenor.com/images/0bf9c023c88914726b9543f8b694442e/tenor.gif?itemid=5634642',
      'https://media1.tenor.com/images/ce39130e38e9610ffe9e9952ba373d6b/tenor.gif?itemid=8618481',
      'https://media1.tenor.com/images/787bd60c59f8dae00f2c6a4b272eda31/tenor.gif?itemid=8089059',
      'https://media1.tenor.com/images/e6d82e3e77c6f760398aac9ebeb2201c/tenor.gif?itemid=5184227',
      'https://media1.tenor.com/images/0e8f2d40175a4856bd55b93f0d579589/tenor.gif?itemid=5068144',
      'https://media1.tenor.com/images/0f0805c286205da154cce414aa110b98/tenor.gif?itemid=8118376',
      'https://media1.tenor.com/images/e7a0703621df5cfae46dd4ca8c4b6a89/tenor.gif?itemid=3532040',
      'https://media1.tenor.com/images/aceccd8e931d6e4da276903b0ba7b062/tenor.gif?itemid=5495984',
      'https://media1.tenor.com/images/30b1bf8e30ae6e06c5c76d352902e50c/tenor.gif?itemid=7356269',
      'https://media1.tenor.com/images/71ce27845f1093ad1062f8d189d33683/tenor.gif?itemid=6232678',
      'https://media1.tenor.com/images/072fa5326ee175853c2e862af3aa76f5/tenor.gif?itemid=12793696',
      'https://media1.tenor.com/images/4654755e5011f574efd5cfe00c5787af/tenor.gif?itemid=8958781',
      'https://media1.tenor.com/images/b5516e9a753c53b1b3c62d5e82d2292e/tenor.gif?itemid=12553553',
      'https://media1.tenor.com/images/1e2df7965eff5a07b617b52338ea7b1f/tenor.gif?itemid=4563841',
      'https://media1.tenor.com/images/daf316bdbe3acb544af88a3d553535ed/tenor.gif?itemid=12379278'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  byeGifs() {
    gifs = [
      'https://media.tenor.com/images/454cae3260426b7357adee5ed07c7aee/tenor.gif',
      'https://media1.tenor.com/images/43b26f57280c43f77e87a546bf6c6011/tenor.gif?itemid=5634610',
      'https://media1.tenor.com/images/33fdd8dc7564b56d5905428484f5aee4/tenor.gif?itemid=5604313',
      'https://media1.tenor.com/images/0f0abf75029a2db62b80ae0c3505004c/tenor.gif?itemid=4731137',
      'https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940',
      'https://media1.tenor.com/images/8bbf9194008e3f8f2f2665c2cbe8dbca/tenor.gif?itemid=10837648',
      'https://media1.tenor.com/images/5aae3b8bfb1e1b897a8818db469ec5c4/tenor.gif?itemid=5634641',
      'https://media1.tenor.com/images/8076cb1014859132f8792d0b4c241e16/tenor.gif?itemid=4605177',
      'https://media1.tenor.com/images/0f6922ce0e6bee7ddf0ecbab7cb4a053/tenor.gif?itemid=9214454',
      'https://media1.tenor.com/images/d6c91bbd08433ea6c3c074f348d5f8e7/tenor.gif?itemid=11269893',
      'https://media1.tenor.com/images/a0d2ab82d3650fa0a8e527519d48f558/tenor.gif?itemid=5634626',
      'https://media1.tenor.com/images/d46726d67e8348bcd0500b29093787bc/tenor.gif?itemid=12252507',
      'https://media1.tenor.com/images/f6eb2f25c584518bdf2be1ecbbb4cb0b/tenor.gif?itemid=8806070',
      'https://media1.tenor.com/images/f3cdd4b857d34dd31702529519da4056/tenor.gif?itemid=7364540',
      'https://media1.tenor.com/images/d823ee899bc35a61701796b3b2f27282/tenor.gif?itemid=8463004',
      'https://media1.tenor.com/images/e9b8171dbbc00eb6734bfbe03bd262a6/tenor.gif?itemid=8463000',
      'https://media1.tenor.com/images/6a9fe457a9bbadccc1a851a573923ee2/tenor.gif?itemid=8654074',
      'https://media1.tenor.com/images/02367e34631ec1cdeb1f7ab0d4f483f4/tenor.gif?itemid=7213145',
      'https://media1.tenor.com/images/dc5f420c67a36df162240d47ac9bba51/tenor.gif?itemid=11579994',
      'https://media1.tenor.com/images/8a87452b39aa0a394f19b42d8d2e790d/tenor.gif?itemid=12284917',
      'https://media1.tenor.com/images/da5da9d3800cc4e382be37cf49724724/tenor.gif?itemid=5005980'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  christmasGifs() {
    gifs = [
      'https://66.media.tumblr.com/2d2b8f5dc8d2aa474b089db0422270c8/tumblr_nguk2wIpQN1t89rpeo3_500.gifv',
      'https://i.gifer.com/HBgn.gif',
      'http://78.media.tumblr.com/a786ed45cae4825728115e04d77dbffa/tumblr_p1iulsQ55c1sk1rjvo1_500.gif',
      'https://media1.giphy.com/media/s2UoONwGf4wqA/source.gif',
      'https://thumbs.gfycat.com/GraciousMealyAmericanshorthair-size_restricted.gif',
      'https://thumbs.gfycat.com/DefiantSoupyBeardedcollie-size_restricted.gif',
      'https://gifimage.net/wp-content/uploads/2018/10/anime-christmas-gif-2018-4.gif',
      'https://memestatic.fjcdn.com/gifs/Anime_8f6372_6473227.gif',
      'https://i.kym-cdn.com/photos/images/original/000/970/825/035.gif',
      'https://data.whicdn.com/images/215381274/original.gif',
      'http://31.media.tumblr.com/aa72614dec70543e93f1315e7b927452/tumblr_nh3nafRUx11u600imo1_500.gif',
      'http://i.imgur.com/lwei9dS.gif',
      'https://data.whicdn.com/images/264113355/original.gif',
      'https://33.media.tumblr.com/tumblr_mddtexMNmX1r5j4apo1_500.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-christmas-gif-11.gif',
      'https://i.chzbgr.com/full/7957327872/h5B7DB27C/',
      'http://d1a2e1vehwcxq9.cloudfront.net/news/2015/12/anime-christmas-episodes-rinne-christmas-party-2.gif',
      'http://vignette1.wikia.nocookie.net/fairytail/images/f/f7/Christmas_holidays_crossover_animation_p1_by_ladygt93-d4kkq4y.gif/revision/latest?cb=20120103232305&path-prefix=es'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  confusedGifs() {
    gifs = [
      'https://media1.tenor.com/images/ea8a415b5533d169f336859c148cca71/tenor.gif?itemid=4665454',
      'https://media1.tenor.com/images/818f89c2a4adccbbfbd80a818c34269a/tenor.gif?itemid=8987124',
      'https://media1.tenor.com/images/33ea50dfd16b612f974d0100f90e0349/tenor.gif?itemid=5372603',
      'https://media1.tenor.com/images/f7eda1045359b36e660d87c5025c5499/tenor.gif?itemid=5486298',
      'https://media1.tenor.com/images/e2f34aa9af8c2034373e652125d2a947/tenor.gif?itemid=6091841',
      'https://media1.tenor.com/images/4370d233d5a77bc6054ce55c2bd125d7/tenor.gif?itemid=5609852',
      'https://media1.tenor.com/images/593fff0d8dff90a5f55d7c35f0c603e8/tenor.gif?itemid=4955442',
      'https://media1.tenor.com/images/74fa12a732208cadfd02abd9ce5af515/tenor.gif?itemid=4955454',
      'https://media1.tenor.com/images/c37eae1b532cdd7d60d9abb04caf617f/tenor.gif?itemid=9912747',
      'https://media1.tenor.com/images/6e7f9537345fc0e3f0d8ef9455e35fd1/tenor.gif?itemid=11828159',
      'https://media1.tenor.com/images/638fb06e79fc53891ba722133b0ef714/tenor.gif?itemid=7270304',
      'https://media1.tenor.com/images/b4e998013ffce08bd0416d499dfbd6be/tenor.gif?itemid=12171120',
      'https://media1.tenor.com/images/3a50af2c2e80cd74c13773b3a03b548e/tenor.gif?itemid=9449608',
      'https://media1.tenor.com/images/49bdaa1edd36fa9fda6f75c47bf58a16/tenor.gif?itemid=4272869'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  cryGifs() {
    gifs = [
      'https://cdn.discordapp.com/attachments/465569876271038464/468577818536837120/BkFnJsnA--1.gif',
      'https://cdn.weeb.sh/images/rJXwmLQv-.jpeg',
      'https://cdn.weeb.sh/images/r1tSmU7wb.gif',
      'https://cdn.weeb.sh/images/r1O8QUmvb.gif',
      'https://cdn.weeb.sh/images/r1OCr1hqM.gif',
      'https://media1.tenor.com/images/4b5e9867209d7b1712607958e01a80f1/tenor.gif?itemid=5298257',
      'https://media.tenor.com/images/2b64d61c35a322afd540563916899ec8/tenor.gif',
      'https://media1.tenor.com/images/26e7564bfb4408f9f7ff9518d4f87308/tenor.gif?itemid=8199739',
      'https://media1.tenor.com/images/e69ebde3631408c200777ebe10f84367/tenor.gif?itemid=5081296',
      'https://media1.tenor.com/images/67df1dca3260e0032f40048759a967a5/tenor.gif?itemid=5415917',
      'https://media1.tenor.com/images/23b1cfca45f7551bf08c357e3e15cf78/tenor.gif?itemid=9772379',
      'https://media1.tenor.com/images/4bb996f5c99d48faf8590d8c66396065/tenor.gif?itemid=7552065',
      'https://media1.tenor.com/images/180ece0e4a1656131513bcc60afeec81/tenor.gif?itemid=5081292',
      'https://media1.tenor.com/images/a53f4017a15753ff10e42770e89ce1d0/tenor.gif?itemid=4555995',
      'https://media1.tenor.com/images/213ec50caaf02d27d358363016204d1d/tenor.gif?itemid=4553386',
      'https://media1.tenor.com/images/49e4248f18b359dd46f7b60b01d1a4a0/tenor.gif?itemid=5652241',
      'https://media1.tenor.com/images/b909749d4b97ec6e243e3ab51ff358c9/tenor.gif?itemid=5512599',
      'https://media1.tenor.com/images/8f6da405119d24f7f86ff036d02c2fd4/tenor.gif?itemid=5378935',
      'https://media1.tenor.com/images/d2a2f8e37f38cabc43dcd10bec680636/tenor.gif?itemid=6236521',
      'https://media1.tenor.com/images/06ae6bbe852471939cf61a81e5a9eb23/tenor.gif?itemid=5370823',
      'https://media1.tenor.com/images/8d9dea76f5be4f90fe7db045fd10801a/tenor.gif?itemid=7754005',
      'https://media1.tenor.com/images/0fa6df4ee525e5ee0acedd307d34c334/tenor.gif?itemid=5895906',
      'https://media1.tenor.com/images/c970ed31cc9ea87edc037a746ed15a28/tenor.gif?itemid=11917769',
      'https://media1.tenor.com/images/4006516ed6e56ba9bebd5cb4b7fc131c/tenor.gif?itemid=5575949',
      'https://media1.tenor.com/images/8e15238e8c5a09171e32c4ea2000b4eb/tenor.gif?itemid=5378941',
      'https://media1.tenor.com/images/20ef52ba3681e95b9db73d7125cff02c/tenor.gif?itemid=5239999',
      'https://media.giphy.com/media/F6132ctb9YARa/giphy.gif',
      'https://media.giphy.com/media/HonpdzbVVDDVu/giphy.gif',
      'https://media.giphy.com/media/XmPrx6vcB0X6g/giphy.gif',
      'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif',
      'https://media.giphy.com/media/yGesXBuMnMSdi/giphy.gif',
      'https://media.giphy.com/media/yGesXBuMnMSdi/giphy.gif',
      'https://media.giphy.com/media/zHGXhFJCVCbD2/giphy.gif',
      'https://media.giphy.com/media/bgDIgfQsgcXLi/giphy.gif',
      'https://media.giphy.com/media/3wy72XTPLo1kk/giphy.gif',
      'https://media.giphy.com/media/Vg2TAoPzDstzy/giphy.gif',
      'https://cdn.weeb.sh/images/rJUbkgqyf.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  cumGifs() {
    gifs = [
      'https://cdn.discordapp.com/attachments/541290399155748867/575435950927380510/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575435951426371584/109.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575435951426371586/82096308188_itadaki_seieki_episode_1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575435952105717780/tg7ruvKO_o.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436307006750734/17047040.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436307497746442/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436308126760980/5rh62Wl.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436308848050279/gspx_justo-a-tiempo-correrse-en-el-culo-y-la-espalda.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436309431320606/Rinkan-Biyaku-01-1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436309431320607/maria2.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436662189064202/tumblr_netofyV2gc1rat3p6o1_1280.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436663300423703/17935824.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436663744888882/tumblr_lxazzmdzYA1r6z4wzo9_r4_400.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436663744888883/006_1000.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436664529485834/lusciousnet_092_533043331.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436992607813799/tumblr_nns1etK6Es1usi2sbo9_1280.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436993383628800/82096308188_itadaki_seieki_episode_1_1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436993832681512/tumblr_mkrli5GUdr1rrsoino1_500.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436994423947264/NgFNIf7K_o.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575436994423947266/72.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437430774300682/343_1000.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437431915020378/14695715.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437432707612673/30.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437576597536824/216122762ce51b9a77d98d2a20b1f22829fbf1da.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437577549512704/6597-awesome-anime-porn-gif-with-lovely-big-boobs.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437577549512705/tumblr_mwfqq3RzX01s6avi6o1_500.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437969494638623/1445209400_1444437334_1435268435_C78.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575437970585419841/c0f3ae5b573273395cf6d4c88082b66a.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438356427702275/th_1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438357665153044/78_1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438487029940314/1.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438487751229442/8d533232f30bd391521760717cb60b9294ffd507.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438488321916938/e62f0a091fd78a50f63d9de83980d0ee.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438488321916939/12.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438605972013068/e7e7a37853a67d9ee31b46026f38c6b626b819bb.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438605972013066/aerheh23.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438606873657364/3763a140fdc24bfc5ac9d3da22e26f14.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438671373664301/19.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438671377858573/taxigif.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438672237953034/tumblr_nfek9enN3s1toy0ydo1_400.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438862004781066/tumblr_n65c2zipOB1tb3gmfo1_400.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575438862441250846/tumblr_nqbvkonF0f1uwisgeo1_500.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439318387261474/tumblr_omfmuxarXQ1ti4ivuo1_540.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439319527981076/cala_viper_rsr_and_etc_drawn_by_katsura_ken_ichirou__1ffd9cbad4dc540db987176668bca555.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439505906204684/b30f5c4782116750b86f702eb9aa72322e0e89c5.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439507114033247/tumblr_n9l5zciRJC1rm0ncgo1_640.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439508141506560/135.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439541754920978/19533_-_breasts_censored_crimson_climax_cum_ejaculation_facial_fellatio_gif_glasses_huge_breasts_low.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439542794846208/tumblr_o00zaockfF1uzj582o1_250.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439644884205568/tumblr_n61i3cydWf1sg6uevo1_400.gif',
      'https://cdn.discordapp.com/attachments/541290399155748867/575439644884205570/detail.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  danceGifs() {
    gifs = [
      'https://media1.tenor.com/images/9841990160f71767843af6cf08b5502d/tenor.gif?itemid=9251559',
      'https://media1.tenor.com/images/4b34c2fd473942b7fbd25c443b8ed8a2/tenor.gif?itemid=9765182',
      'https://media1.tenor.com/images/42803ed59f21b034f440243557ff2736/tenor.gif?itemid=11049076',
      'https://media1.tenor.com/images/0069632e40cbc83e0794f2261e4b6eeb/tenor.gif?itemid=7880641',
      'https://media1.tenor.com/images/81c0b8d3c0617d2902319b7f67e6ce01/tenor.gif?itemid=7560551',
      'https://media1.tenor.com/images/8cf46af3448ca86e21d602ef4fe4a282/tenor.gif?itemid=12419758',
      'https://media1.tenor.com/images/81df5e907f81dad1721f398ed7408deb/tenor.gif?itemid=7560548',
      'https://media1.tenor.com/images/17f87f0dc355eb862a7cbe7b9c352ffa/tenor.gif?itemid=9417087',
      'https://media1.tenor.com/images/d250c06c34f6961087a83c6fd79d0711/tenor.gif?itemid=4718235',
      'https://media1.tenor.com/images/21e860a31f32d5e3e6bdf2963cadfebf/tenor.gif?itemid=5897404',
      'https://media1.tenor.com/images/e282b8c13fa3758517ac5eb9c8e3c4f1/tenor.gif?itemid=9060211',
      'https://media1.tenor.com/images/a65229f878fad4e4973c9e8caf12bca9/tenor.gif?itemid=4810806',
      'https://media1.tenor.com/images/b89b469e2975bcfa6c0f6cf0c34afa67/tenor.gif?itemid=5115426',
      'https://media1.tenor.com/images/117ef5456530068c9ac8a044e3433e04/tenor.gif?itemid=4850235',
      'https://media1.tenor.com/images/a46ad100db83c0abb116d3855301c940/tenor.gif?itemid=4665031',
      'https://media1.tenor.com/images/40877c628584984f44a5d441000b71bd/tenor.gif?itemid=7627209',
      'https://media1.tenor.com/images/7fe3ac72696f0e86e65eb23505a245e6/tenor.gif?itemid=8546200',
      'https://media1.tenor.com/images/64c4cfe6016cd5b02f77998da08eef19/tenor.gif?itemid=5932256',
      'https://media1.tenor.com/images/442a1070daf3728cc794d80adebf9e42/tenor.gif?itemid=4850245',
      'https://media1.tenor.com/images/80aa26b057f8ca7e7b50d3860d968f19/tenor.gif?itemid=10964993'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  depressedGifs() {
    gifs = [
      'https://media.giphy.com/media/zHGXhFJCVCbD2/giphy.gif',
      'https://media.giphy.com/media/ChX3hzy5CkXsI/giphy.gif',
      'https://media.giphy.com/media/FB5EOw0CaaQM0/giphy.gif',
      'https://media.giphy.com/media/lbmkNvksNTJcc/giphy.gif',
      'https://media.giphy.com/media/26BRCpyiPxfcBdLQ4/giphy.gif',
      'https://media.giphy.com/media/fqbuACnZRyfuw/giphy.gif',
      'https://media.giphy.com/media/NHTqyT68fOEsU/giphy.gif',
      'https://media.giphy.com/media/3ohs7MtgXyyLjQ38KQ/giphy.gif',
      'https://media.giphy.com/media/XGS8suOMypcNq/giphy.gif',
      'https://media.giphy.com/media/oyrq2rYcTD9AUo2OyO/giphy.gif',
      'https://media.giphy.com/media/YIkajT6np3O2A/giphy.gif',
      'https://media.giphy.com/media/4DuoSCUlXT0Yw/giphy.gif',
      'https://media.giphy.com/media/OFeoulo7XYd9K/giphy.gif',
      'https://media.giphy.com/media/VTiELowVIzPvG/giphy.gif',
      'https://media.giphy.com/media/pF5LLKOTacyU8/giphy.gif',
      'https://media.giphy.com/media/FXnm6KKztqgaQ/giphy.gif',
      'https://media.giphy.com/media/3o6Zt6PKS1CIl8KjKw/giphy.gif',
      'https://media.giphy.com/media/uj6t0xcCzyKGY/giphy.gif',
      'https://media.giphy.com/media/HUYuP6rm54Eda/giphy.gif',
      'https://media.giphy.com/media/3ohhwu8IqEYFZYA8Q8/giphy.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  dizzyGifs() {
    gifs = [
      'https://media1.tenor.com/images/59f2c768dc498abb52e193f1affa8f4d/tenor.gif?itemid=7868985',
      'https://media1.tenor.com/images/230ae7123a4c3a5fc0aaddf254526497/tenor.gif?itemid=9449495',
      'https://media1.tenor.com/images/9acf02059c29f56a4eaa471375377868/tenor.gif?itemid=8330631',
      'https://media1.tenor.com/images/eeef6eada13dbed896d0a4f651fbcffe/tenor.gif?itemid=11000805',
      'https://media1.tenor.com/images/d3db2251496c034939206aedeb304386/tenor.gif?itemid=5827691',
      'https://media1.tenor.com/images/eac37ad8ebb837aa6b4bb05155581f68/tenor.gif?itemid=8173955',
      'https://media1.tenor.com/images/3cc3a139a0625373d52c73ce3bf779b0/tenor.gif?itemid=8494430',
      'https://media1.tenor.com/images/c4c5098b3e5b16358dc7e01a2bf8692b/tenor.gif?itemid=4367432',
      'https://media1.tenor.com/images/d32ea762eab7216df706c3398b044825/tenor.gif?itemid=4402478',
      'https://media1.tenor.com/images/282fc41c111659aed5f5a7a17764bb8b/tenor.gif?itemid=8069756',
      'https://media1.tenor.com/images/26c9b4da79b79bd5073ea827ff4337fc/tenor.gif?itemid=9954779',
      'https://media1.tenor.com/images/89e2517138bc66dd8c82438e736cbeda/tenor.gif?itemid=8679320'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  dodgeGifs() {
    gifs = [
      'https://media1.tenor.com/images/bbb1c93d54379a7b826a8b9e42857100/tenor.gif?itemid=9449699',
      'https://media1.tenor.com/images/e264e045b832b258ef3c6c0c0b34094d/tenor.gif?itemid=10398302',
      'https://media1.tenor.com/images/91a945c420266aeef86facf603094de7/tenor.gif?itemid=10601615',
      'https://media1.tenor.com/images/f09171e5269d590cfdef7ba56874592b/tenor.gif?itemid=14019695',
      'https://media.giphy.com/media/Zn6bGDnFI7QY0/giphy.gif',
      'https://i.makeagif.com/media/2-10-2018/GwCrMB.gif',
      'https://media1.tenor.com/images/428bb3f904a73d4bc01139248b20d0aa/tenor.gif?itemid=14604309',
      'https://i.gifer.com/1fft.gif',
      'https://i.pinimg.com/originals/51/fb/b5/51fbb5ab5b67af6e88d9b9d03267c018.gif',
      'http://i.imgur.com/7sLgBxp.gif',
      'https://media1.tenor.com/images/b09fc2f2d6e0045527fa87780eb639bd/tenor.gif?itemid=8545712',
      'https://thumbs.gfycat.com/SelfassuredAllAlligatorgar-max-1mb.gif',
      'https://thumbs.gfycat.com/DescriptiveBrilliantDanishswedishfarmdog-size_restricted.gif',
      'https://i.pinimg.com/originals/95/e0/6b/95e06b6334b211521d34a588fedc5ff6.gif',
      'https://media1.tenor.com/images/5b5974e20c4ab53e7bbbea0ea9cc996b/tenor.gif?itemid=5694525',
      'https://media1.tenor.com/images/f1c17fcbca42bcc0f856ed782dcaed16/tenor.gif?itemid=13961809',
      'https://media1.tenor.com/images/c9a0d4b35f45c0957ea067b6206794c7/tenor.gif?itemid=9126747',
      'https://media1.giphy.com/media/qRdL7w5ddkHDi/giphy.gif',
      'https://media1.tenor.com/images/e9dc12a0f411134cfee43530818e0f01/tenor.gif?itemid=5760222',
      'https://thumbs.gfycat.com/AnotherTatteredDamselfly-size_restricted.gif',
      'https://i.kym-cdn.com/photos/images/original/001/281/834/1df.gif',
      'https://media1.tenor.com/images/ead68ed8f5b06ac8ac9a95e435906ce8/tenor.gif?itemid=9694724'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  eatGifs() {
    gifs = [
      'https://media1.tenor.com/images/64a11132af0a13659c095c0c91deaa3b/tenor.gif?itemid=11560523',
      'https://media1.tenor.com/images/34c67f6a6012464353e70f6dc88833e7/tenor.gif?itemid=9384350',
      'https://media1.tenor.com/images/4e0241700200d290dbb4e7291f69d58d/tenor.gif?itemid=4718128',
      'https://media1.tenor.com/images/5043a37f8458944a76f48ccd7608c917/tenor.gif?itemid=9920953',
      'https://media1.tenor.com/images/c6778ab52c8e821877d8f6fbbba717b1/tenor.gif?itemid=5707324',
      'https://media1.tenor.com/images/d325e083ed0c8ee4c9a82192861f7a7e/tenor.gif?itemid=5307821',
      'https://media1.tenor.com/images/b3eb24a70bf667b05185c228b626d343/tenor.gif?itemid=9920842',
      'https://media1.tenor.com/images/a68e619f7f967af726e264f35709f2d1/tenor.gif?itemid=5205900',
      'https://media1.tenor.com/images/391c22846902b867848202aabfef9304/tenor.gif?itemid=10005576',
      'https://media1.tenor.com/images/c131aed3477b07817152bbab0b6a4929/tenor.gif?itemid=4874882',
      'https://media1.tenor.com/images/2f42ee083ff345a18bfce54ebfbb568a/tenor.gif?itemid=11792938',
      'https://media1.tenor.com/images/ce55a42f1964fd7bff5a4feeeffc49d0/tenor.gif?itemid=11689945',
      'https://media1.tenor.com/images/e99b1e190f07e896d0db050084070a2a/tenor.gif?itemid=9419487',
      'https://media1.tenor.com/images/c5761875154f4f6c4c83d3c6e8f9d7e6/tenor.gif?itemid=11331327',
      'https://media1.tenor.com/images/da68ffa48f4fd490719b85d5859819c1/tenor.gif?itemid=10616934',
      'https://media1.tenor.com/images/a99ea233599aa06d97114fbaf007d0e7/tenor.gif?itemid=9920851',
      'https://media1.tenor.com/images/4164627ef1e4c30aa68853f470587bdb/tenor.gif?itemid=9920838',
      'https://media1.tenor.com/images/3799ae77c7fcd79eed7881e3e29ede4a/tenor.gif?itemid=5945879'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  facepalmGifs() {
    gifs = ['https://media1.tenor.com/images/5e29a1db9149211728b22bfd01f88771/tenor.gif?itemid=10336271', 'https://media1.tenor.com/images/5e7f44432181df2ba18f27b9f078545f/tenor.gif?itemid=5897489', 'https://media1.tenor.com/images/76d2ec47ec76fa36b2fce913331ba7e3/tenor.gif?itemid=5533025', 'https://media1.tenor.com/images/b9d167e0f40ec544098ae96382d9f711/tenor.gif?itemid=5895905', 'https://media1.tenor.com/images/375754f9ccdf8ac94146381c06755c09/tenor.gif?itemid=5015299', 'https://media1.tenor.com/images/9d30a11e7978ea3b404d5e48c5966c6b/tenor.gif?itemid=5015289', 'https://media1.tenor.com/images/015b8063c7018c2880e88c6014a0ffaf/tenor.gif?itemid=12168336', 'https://media1.tenor.com/images/b8e234ac4aa6aa64b582895911de2046/tenor.gif?itemid=12411488'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  fartGifs() {
    gifs = ['https://media.giphy.com/media/l4Epj4bCKyQ8UtxEQ/giphy.gif', 'https://thumbs.gfycat.com/ParchedSmallAmurstarfish-small.gif', 'https://media2.giphy.com/media/B2U2DZ5SA3xOmnsw4O/giphy.gif', 'http://24.media.tumblr.com/tumblr_m471v3Mm0x1qdlh1io1_r1_400.gif', 'https://gifimage.net/wp-content/uploads/2017/06/fart-gif-13.gif'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  helloGifs() {
    gifs = [
      'https://media1.tenor.com/images/f453ca22fdcc961710cdaae4537057f1/tenor.gif?itemid=9886599',
      'https://media1.tenor.com/images/25efbc5b552958238dded252ab0fc31d/tenor.gif?itemid=10403612',
      'https://media1.tenor.com/images/2585170d55cf54d2e890e3028b3b0b9f/tenor.gif?itemid=12395965',
      'https://media1.tenor.com/images/8f5430367d6c8ded5778fb1c850021c1/tenor.gif?itemid=12395961',
      'https://media1.tenor.com/images/3c2054130fb03de2d8549a98a3e2685a/tenor.gif?itemid=6195457',
      'https://media1.tenor.com/images/37aa92ebab4f4657a8f1b913b4ea7da4/tenor.gif?itemid=5970516',
      'https://media1.tenor.com/images/b82e6a78b221f7dc2e41605b6aa2cbcc/tenor.gif?itemid=11503720f',
      'https://media1.tenor.com/images/58707124f314cebc98639478e295ea66/tenor.gif?itemid=8644350',
      'https://media1.tenor.com/images/f5cd33863e8319ea72990eefc8e697a8/tenor.gif?itemid=5417197',
      'https://media1.tenor.com/images/72d407300428e6f2ef3e469511d5f8ec/tenor.gif?itemid=5463317',
      'https://media1.tenor.com/images/f82fdfe817cfb8dacb5bd5c7dadb632d/tenor.gif?itemid=8718221',
      'https://media1.tenor.com/images/056c584d9335fcabf080ca43e583e3c4/tenor.gif?itemid=8994845',
      'https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif?itemid=8807701',
      'https://media1.tenor.com/images/d10c3d213be6893235d97ae768db8c07/tenor.gif?itemid=4608178',
      'https://media1.tenor.com/images/9ea72ef078139ced289852e8a4ea0c5c/tenor.gif?itemid=7537923',
      'https://media1.tenor.com/images/673726fd35121fc1e96755346328f3c1/tenor.gif?itemid=9473392',
      'https://media1.tenor.com/images/79f33c2f524cbfed4ef6896b39e67663/tenor.gif?itemid=9416181',
      'https://media1.tenor.com/images/a4d30300af7eded0f616578b9ebbeb40/tenor.gif?itemid=5354245',
      'https://media1.tenor.com/images/ae40603eddb6e4bb1ea56cc6de7d0f6e/tenor.gif?itemid=5142315',
      'https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  laughGifs() {
    gifs = [
      'https://media.tenor.com/images/c281eb235f5f6bc5667cf856e8c3eb1a/tenor.gif',
      'https://media.giphy.com/media/TORQpT78yQR5S/giphy.gif',
      'https://media.tenor.com/images/b92a29ad9c6dbb13e9d90ac8362657d3/tenor.gif',
      'https://66.media.tumblr.com/c687bc614458f294922daf880c24248b/tumblr_om93wdfZTF1tydz8to1_500.gif',
      'https://thumbs.gfycat.com/MagnificentBlueBlackandtancoonhound-small.gif',
      'https://media.giphy.com/media/NhdlgJRFXAScg/giphy.gif',
      'https://i.gifer.com/Bqda.gif',
      'https://media1.tenor.com/images/6d7008706bd15d1ed1dc47387f02f853/tenor.gif?itemid=10665609',
      'https://thumbs.gfycat.com/EverlastingCompetentArabianhorse-size_restricted.gif',
      'https://media.giphy.com/media/12scWlqkDOzDKo/giphy.gif',
      'https://i.pinimg.com/originals/f5/89/08/f58908fbc9096bb4bb995de242433bf5.gif',
      'https://i.gifer.com/YUyi.gif',
      'https://i.imgur.com/NpNoc0q.gif',
      'https://media1.tenor.com/images/df231a3d7ffa7a5b54ca4a8414897c8c/tenor.gif?itemid=8115122',
      'https://i.pinimg.com/originals/03/11/5c/03115c26a82a67b168829d5557662738.gif',
      'https://i.gifer.com/5Ws5.gif',
      'https://media1.tenor.com/images/fb80a2dd4fdb86c6eeee94125f23c161/tenor.gif?itemid=5060962',
      'https://media.giphy.com/media/tnxOOIUL0BCLe/giphy.gif',
      'https://i.gifer.com/778.gif',
      'https://gifimage.net/wp-content/uploads/2018/04/laughing-anime-girl-gif-4.gif',
      'https://i.pinimg.com/originals/89/71/72/897172b0212b823aca854e39651c03fc.gif',
      'https://i.imgur.com/ZxvmSih.gif',
      'https://gifimage.net/wp-content/uploads/2017/08/laughing-anime-gif-2.gif',
      'https://i.pinimg.com/originals/08/34/15/0834153562cc93fa75fd060396b6dee2.gif',
      'https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif?itemid=5566554',
      'https://thumbs.gfycat.com/IgnorantObviousDrever-small.gif',
      'https://i.pinimg.com/originals/13/38/08/13380886c6ba966f6a2183d3731cadb8.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/028/246/dc7.gif',
      'https://66.media.tumblr.com/5f4a497aff85557b25dfdc11db348f1c/tumblr_onn0sqdbXj1qiwp96o1_500.gif',
      'https://media1.tenor.com/images/7d7ea8a8d7135f3ded1f3f8f82b598ab/tenor.gif?itemid=10351560',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-girl-laughing-gif-9.gif',
      'https://i.gifer.com/ElgA.gif',
      'https://memesbams.com/wp-content/uploads/2018/01/15-Hilarious-Insane-Laugh-Gif.gif',
      'http://i.imgur.com/7zdFpPM.gif',
      'http://denarii.info/filedump/jpgs/anime-laughing.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  lewdGifs() {
    gifs = [
      'https://media.giphy.com/media/12lLTU2L0CIufC/giphy.gif',
      'https://media.giphy.com/media/Yhc1zjftHFFyo/giphy.gif',
      'https://media1.tenor.com/images/9862e3023816f54bc451ee1cfed2351f/tenor.gif?itemid=5453531',
      'https://media1.tenor.com/images/1624f26d722662044f50628122aaf8c8/tenor.gif?itemid=9317976',
      'https://media1.tenor.com/images/de18729f1a2c3cc3ac85e7d51cadb83d/tenor.gif?itemid=5360465',
      'https://media.giphy.com/media/ndYAqx8RKKUIE/giphy.gif',
      'https://media1.tenor.com/images/373af4782b5f5f7c38b37ca41b6db149/tenor.gif?itemid=13465247',
      'https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/090/634/fa1.gif',
      'https://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-12-1.gif',
      'https://i.gifer.com/2MlA.gif',
      'https://image.myanimelist.net/ui/5zdzFcBcrbnYLs3CUyho0M6z-pc_ApFJHBYEbjCpywac70dCzvvcuSU6UM9cunfmnctin5K1PWWdd_ZwEp_ap0msEkA44Bopy5XmaMx3JPTshanjR4VyQAo8XX3BHPde',
      'https://cdn161.picsart.com/227185323046202.gif',
      'https://media1.tenor.com/images/24fe43a6b040e3e63466441bcac7d061/tenor.gif?itemid=9275332',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/047/160/0f2.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  likeGifs() {
    gifs = [
      'https://media1.tenor.com/images/c0674774e1c5538d3e607f000278cbcf/tenor.gif?itemid=11949289',
      'https://media1.tenor.com/images/e24ae3ca5e9410203adaddf05692fd6b/tenor.gif?itemid=12255658',
      'https://media1.tenor.com/images/b7077296f9a4230e873bbe944e286486/tenor.gif?itemid=12004987',
      'https://media1.tenor.com/images/65489b07c007fb5f4ab911f9a2bc03a5/tenor.gif?itemid=12259624',
      'https://media1.tenor.com/images/6a2c6c04971893f0ad31516b7300c652/tenor.gif?itemid=11480347',
      'https://media1.tenor.com/images/5ad169f95ed2da2d7a36c82b07f9e61e/tenor.gif?itemid=11642922',
      'https://media1.tenor.com/images/54e8631b77e3612be9a217ed98961447/tenor.gif?itemid=9911334',
      'https://media1.tenor.com/images/a79649fc341ed02445706a592a0c6b46/tenor.gif?itemid=7967630',
      'https://media1.tenor.com/images/ae8dc8de985cacc2340f10b2b2db0f24/tenor.gif?itemid=9340442',
      'https://media1.tenor.com/images/38200478b91db2d19a12ecf4672391c9/tenor.gif?itemid=10138734',
      'https://media1.tenor.com/images/45cc8aa4755310a88cff35f6880f1aaa/tenor.gif?itemid=7659021',
      'https://media1.tenor.com/images/0285f73b12382b63159daec9d08851a2/tenor.gif?itemid=8871660',
      'https://media1.tenor.com/images/9940e441c9bd345735ac2c4944d0ea84/tenor.gif?itemid=7568792',
      'https://media1.tenor.com/images/1a97b46ae10696e276f90876cc3ac23c/tenor.gif?itemid=7563556',
      'https://media1.tenor.com/images/13d12906ab6c24e688a1144f85199e98/tenor.gif?itemid=10627589',
      'https://media1.tenor.com/images/ca63ad808481a956b5410349e42d1c9a/tenor.gif?itemid=5395893',
      'https://media1.tenor.com/images/e033d2254cd553d8169afa05492feb06/tenor.gif?itemid=10871297',
      'https://media1.tenor.com/images/fb9249a9a75b2e0129b496438d7c7ad8/tenor.gif?itemid=9517014',
      'https://media1.tenor.com/images/782efd91d01dae2b1534e52fbc076d37/tenor.gif?itemid=4065610',
      'https://media1.tenor.com/images/5069e1153e49f49b4e2d9228f9bc56ec/tenor.gif?itemid=5594910',
      'https://media1.tenor.com/images/ba3ce25c5749d06941aa340bc1e55f83/tenor.gif?itemid=4618312',
      'https://media1.tenor.com/images/378f3ed38789d24b494b85ae63f7e5ba/tenor.gif?itemid=9928402',
      'https://media1.tenor.com/images/bd1b53ff495f70aac1eaff370633e2bd/tenor.gif?itemid=3461590',
      'https://media1.tenor.com/images/192491eedee9c4220b177b28556a7852/tenor.gif?itemid=7480904',
      'https://media1.tenor.com/images/61805415090d1248d9358ef9b0c01090/tenor.gif?itemid=9807877',
      'https://data.whicdn.com/images/269065363/original.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  nervousGifs() {
    gifs = [
      'https://media1.tenor.com/images/097f46e1db35653902b10b0a322c908f/tenor.gif?itemid=12003933',
      'https://media1.tenor.com/images/54d729c929aa8baff4776df412910da4/tenor.gif?itemid=7302799',
      'https://media1.tenor.com/images/4f77ae60cf812d760decd359d1b26acf/tenor.gif?itemid=5648878',
      'https://media1.tenor.com/images/6d686b91a23ec01046a3df454bf7f17c/tenor.gif?itemid=12200718',
      'https://media1.tenor.com/images/85d7d7b1c14d3a373bbe5e89d15c799a/tenor.gif?itemid=6504086',
      'https://media1.tenor.com/images/213d366f03fd3aedd224f1db05a02cc4/tenor.gif?itemid=5452803',
      'https://media1.tenor.com/images/11e728572ca4bbd6d2ce7c47858bc4ac/tenor.gif?itemid=5970501',
      'https://media1.tenor.com/images/5d2e95adddec99719a6d440350fc81ad/tenor.gif?itemid=9438999',
      'https://media1.tenor.com/images/5fbeac46960d40b0d9b879b82ef7e1dd/tenor.gif?itemid=11976159',
      'https://media1.tenor.com/images/0388184ceaa3b1aa4dd108ab56c37b0e/tenor.gif?itemid=5418225',
      'https://media1.tenor.com/images/460002a55abcc9003ced733a57fc31cd/tenor.gif?itemid=4608201',
      'https://media1.tenor.com/images/cc8e9de133c384a4f5738713739a9714/tenor.gif?itemid=9841391',
      'https://media1.tenor.com/images/f32f1cb4c135229b5bc187293c6fb85c/tenor.gif?itemid=6203378',
      'https://media1.tenor.com/images/ad1c3d89942f14a5012912871710939a/tenor.gif?itemid=8754681',
      'https://media1.tenor.com/images/1536d0f8c52139f112605531904a1ecb/tenor.gif?itemid=12141692',
      'https://media1.tenor.com/images/c2942b0e965ccb8fee24a757de4f6ae5/tenor.gif?itemid=9439100',
      'https://media1.tenor.com/images/1929c77490dcb67b0acc83508cb86d70/tenor.gif?itemid=5378933'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  runGifs() {
    gifs = [
      'https://media.tenor.com/images/168c69e9c74d48ff9f6cca19506740cf/tenor.gif',
      'https://i.gifer.com/79o6.gif',
      'https://media1.tenor.com/images/e99d0a0812b2a5481c3d98d51950814d/tenor.gif?itemid=6181817',
      'https://thumbs.gfycat.com/ImpureDismalEgret-size_restricted.gif',
      'https://media.tenor.com/images/7a2ab7bd487ef2f0da1ec8d711c75acc/tenor.gif',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460140490-8b365d32a26712058adf10436dce0389.gif',
      'https://i.pinimg.com/originals/0c/e8/be/0ce8bec2543d81ba65eefd309f0f0c5b.gif',
      'https://media1.tenor.com/images/17edfb50ba26e75ffa27ba851034d627/tenor.gif?itemid=8737177',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460141222-926767558b23d47d23780a87abbc62dd.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-run-gif-11.gif',
      'https://i.kym-cdn.com/photos/images/original/000/987/562/b2d.gif',
      'https://media1.tenor.com/images/151a5c1d0f8434a1d42fbcecfed3e332/tenor.gif?itemid=9362305',
      'https://i.pinimg.com/originals/b1/26/ef/b126ef29fa3a37672425f551ca9c8704.gif',
      'https://66.media.tumblr.com/94d8555a19bfe2b58fa81ee336ad8ead/tumblr_oh7977y0mr1vztiw8o1_400.gif',
      'https://media1.giphy.com/media/RaeH5z5AlrkwU/source.gif',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460140013-9af557e16033fc5c19443f576cccb0d4.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-run-away-gif-13.gif',
      'https://data.whicdn.com/images/182749245/original.gif',
      'https://vignette.wikia.nocookie.net/central/images/c/cd/Run_Anime.gif/revision/latest?cb=20171128195718',
      'https://media3.giphy.com/media/SdW7SEleK00Ug/giphy.gif?cid=3640f6095c625e5669615a67494f05a3',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460139914-f1109b66f45c29d770e26da53e875508.gif',
      'http://31.media.tumblr.com/8c6b31d2da2d454014b8f4793f31b8e3/tumblr_mxm2p3R0ds1rayk5go1_500.gif',
      'https://i.imgur.com/9KBX1DB.gif',
      'https://i.kym-cdn.com/photos/images/original/001/290/210/3d0.gif',
      'https://animewithsky.files.wordpress.com/2016/01/omake-gif-anime-dagashi-kashi-episode-4-hotaru-kokonotsu-run.gif',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460140096-e75b38844a685a142f6a85da93ad9f2d.gif',
      'http://25.media.tumblr.com/2c7d36d49c3fe540be41c53da3a34389/tumblr_mkwql12m6P1qi0f9no1_500.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/081/817/909.gif',
      'https://room208.org/blog/media/tumblr_m09y37u3zJ1qim2zwo1_500.gif',
      'https://i.pinimg.com/originals/40/02/05/40020520eb8000c766b3f200bf528401.gif',
      'https://media1.tenor.com/images/aa686f7630a088871ac1689767dcd1f1/tenor.gif?itemid=3575973',
      'http://31.media.tumblr.com/dd599ff02b95184da5fe8f9eb215e25c/tumblr_msytjnMqTf1szukzdo1_400.gif',
      'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460139973-b7066d28787bf682eb32b0a31bddead2.gif',
      'https://media1.tenor.com/images/005afe63fe96001f8a05ef2e73499c98/tenor.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  screamGifs() {
    gifs = [
      'https://media1.tenor.com/images/f211b15ef1cf1bf491526f5f19647077/tenor.gif?itemid=8743522',
      'https://media.tenor.com/images/5d95d35aa4321d9d143ce83d3de81741/tenor.gif',
      'https://media1.tenor.com/images/668fda7d171ce5022fd0a1f3a6e0a780/tenor.gif?itemid=7355048',
      'https://media.giphy.com/media/9ErDHX2SOfFuM/giphy.gif',
      'https://thumbs.gfycat.com/ThoseApprehensiveAbyssiniangroundhornbill-size_restricted.gif',
      'https://i.gifer.com/SZDF.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/087/494/18d.gif',
      'https://i.gifer.com/3h9m.gif',
      'https://media.giphy.com/media/QI5208dlsC7fi/giphy.gif',
      'https://i.gifer.com/SZDC.gif',
      'https://thumbs.gfycat.com/LegitimateAnchoredBoa-size_restricted.gif',
      'http://i.imgur.com/jHNL3Ur.gif',
      'https://i.gifer.com/Lh5S.gif',
      'https://media.tenor.com/images/a8f1de53b2b50a54ff330a807a4588eb/tenor.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-scream-gif-11.gif',
      'https://i.pinimg.com/originals/47/b6/d5/47b6d52d148f3a9fb00be329c0a65570.gif',
      'https://data.whicdn.com/images/182519352/original.gif',
      'https://media1.tenor.com/images/2210534c85e9364cc091591428775816/tenor.gif?itemid=12037014',
      'https://media.giphy.com/media/h5VQQW3roNztm/giphy.gif',
      'https://i.gifer.com/PkgM.gif',
      'https://i.pinimg.com/originals/b0/ba/bd/b0babdd9554a7b57781b8bccba81edd8.gif',
      'http://37.media.tumblr.com/f3dade55d893bf73fc919e231d18d464/tumblr_mw4jqlDH741r3p71oo1_500.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  shrugGifs() {
    gifs = ['https://media1.tenor.com/images/dbe1ca7fdb532cf96a9bea40fa1f406e/tenor.gif?itemid=9724581', 'https://media1.tenor.com/images/62fb4a540cffdb3605201a31c428a0e4/tenor.gif?itemid=12286564', 'https://media1.tenor.com/images/054b2a08f39115ee052980484e1bec8b/tenor.gif?itemid=5964966', 'https://media1.tenor.com/images/dc93fb88e369e3b8affb9ff636a2fa8d/tenor.gif?itemid=3635517', 'https://media1.tenor.com/images/07ad4dff1580660dd009f041cdeac7be/tenor.gif?itemid=10759884', 'https://media1.tenor.com/images/9105ec1aa0c9c249e16483a48de3539b/tenor.gif?itemid=5252598', 'https://media1.tenor.com/images/053a9ece4298fbb81f0ae5406e5fc2e3/tenor.gif?itemid=12787691', 'https://media1.tenor.com/images/de1d806c4433afc7e7940ce9b8079224/tenor.gif?itemid=9377496'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  sleepGifs() {
    gifs = [
      'https://media1.tenor.com/images/81b39f20f9369290a0f3c8148427480e/tenor.gif?itemid=5469651',
      'https://media1.tenor.com/images/297a31dc45ba5402b338d6b7c0d6b5f8/tenor.gif?itemid=9340393',
      'https://media1.tenor.com/images/1cdece239ec7d0fb33d2976d623f5e77/tenor.gif?itemid=4718185',
      'https://media1.tenor.com/images/84d907b9ce470d7237d8222deb8ef209/tenor.gif?itemid=5418281',
      'https://media1.tenor.com/images/682f3d62027d2c718ff279f33ccde752/tenor.gif?itemid=12419264',
      'https://media1.tenor.com/images/4c8874c81c256b2e534ffde7ea7c0ee8/tenor.gif?itemid=7615229',
      'https://media1.tenor.com/images/6b1d8cf7b9880bcfea290eea918b16fc/tenor.gif?itemid=5535357',
      'https://media1.tenor.com/images/340108a4ac709fa76a93a148d3042f2b/tenor.gif?itemid=4671188',
      'https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142',
      'https://media1.tenor.com/images/51612fc78b9dae95497aa78997e077bb/tenor.gif?itemid=5959873',
      'https://media1.tenor.com/images/bc308ef7ed3753ae73f1ff047e14c554/tenor.gif?itemid=9920974',
      'https://media1.tenor.com/images/9650b39d78fd6b91456924ad51f79de2/tenor.gif?itemid=9352439',
      'https://media1.tenor.com/images/e35738edcf70fa24976fa862d0a9e32a/tenor.gif?itemid=9096283',
      'https://media1.tenor.com/images/6e65b9f4a265ffcc60b2a60e2fe48da5/tenor.gif?itemid=5428969',
      'https://media1.tenor.com/images/4c06772922fd591f0c4cd077b09de541/tenor.gif?itemid=5079238',
      'https://media1.tenor.com/images/4748f0e6e9d81eb16b10ab13ce861d0b/tenor.gif?itemid=11152749',
      'https://media1.tenor.com/images/766a25de69e36c91d06726ba3113b234/tenor.gif?itemid=3468672',
      'https://media1.tenor.com/images/0d8a6076bcb30c0733c6359b80ab4441/tenor.gif?itemid=4704647',
      'https://media1.tenor.com/images/8f2e820c55fd71deec3636e73794cf24/tenor.gif?itemid=5160049',
      'https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874',
      'https://media1.tenor.com/images/67899e4ce154518e656cb2337b180de0/tenor.gif?itemid=7329024',
      'https://media1.tenor.com/images/ce1290d1994e2da8407d53903809d774/tenor.gif?itemid=5209581',
      'https://media1.tenor.com/images/8656d05cbb568591b1423793ce4bc1f0/tenor.gif?itemid=5198795',
      'https://media1.tenor.com/images/5eeb848e2e40fdba7efec497c12b0e7e/tenor.gif?itemid=512292',
      'https://media1.tenor.com/images/62299afcedd465b631f9baa9786bd83b/tenor.gif?itemid=6238156',
      'https://media1.tenor.com/images/ddcaa8083c376d8679a3aa9e1001e85d/tenor.gif?itemid=5652453',
      'https://media1.tenor.com/images/518c04d0f5acb6eb1650d2ba58e89fb6/tenor.gif?itemid=5492373',
      'https://media1.tenor.com/images/8ac32a8e607dd874f2785eb75df78ed2/tenor.gif?itemid=5978209',
      'https://media1.tenor.com/images/5a519ab7fbf494265b7ba09de84b05aa/tenor.gif?itemid=12069369'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  smileGifs() {
    gifs = [
      'https://media1.tenor.com/images/bb0cbe662c9c7fb3bd59e75a7214475d/tenor.gif?itemid=4838964',
      'https://media1.tenor.com/images/123df3be1acfe3306b91e9c3dd6f9438/tenor.gif?itemid=5322596',
      'https://media1.tenor.com/images/683b40a9da270868366b0b43541ec2c7/tenor.gif?itemid=5109317',
      'https://media1.tenor.com/images/cc66ae959cb51c118c782325fcdc4f3f/tenor.gif?itemid=9869247',
      'https://media1.tenor.com/images/4e0a400d7621b5452854bcae00d9a98e/tenor.gif?itemid=5723668',
      'https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419',
      'https://media1.tenor.com/images/ecc8d5665f2698529d63b7c7c55fb5fc/tenor.gif?itemid=8674277',
      'https://media1.tenor.com/images/d627d2facd06abb496f97c5943b2f9ae/tenor.gif?itemid=11346577',
      'https://media1.tenor.com/images/a784d25bc90f5e81ac6615f2b165d2e6/tenor.gif?itemid=9097669',
      'https://media1.tenor.com/images/46d1dae94487db8353c2e5cd19957986/tenor.gif?itemid=5959846',
      'https://media1.tenor.com/images/29b71255760361c5f6c40f089847b1ab/tenor.gif?itemid=7338963',
      'https://media1.tenor.com/images/839addada9a7785b2da0aed97f441554/tenor.gif?itemid=9280880',
      'https://media1.tenor.com/images/a9c114df59d644d43e1da6f3e7db66ca/tenor.gif?itemid=4838961',
      'https://media1.tenor.com/images/5b69fcd25e2467003e675cf32a232260/tenor.gif?itemid=8808104',
      'https://media1.tenor.com/images/d40f71dfc053af4995d48de258931f44/tenor.gif?itemid=7909470',
      'https://media1.tenor.com/images/9861de116b567b054c560365092e9d28/tenor.gif?itemid=5129579',
      'https://media1.tenor.com/images/89f7b256ebe5397bf473fbacde975c4b/tenor.gif?itemid=5959848',
      'https://media1.tenor.com/images/2dff8879b3aa16404eedf586827c4085/tenor.gif?itemid=5109617',
      'https://media1.tenor.com/images/94cd0ea149daf82c6e6af8c444c40eb4/tenor.gif?itemid=8933103',
      'https://media1.tenor.com/images/8a549e6d7066bbc0aeb63d7c69a42c27/tenor.gif?itemid=4838963'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  suckGifs() {
    gifs = ['https://cdn.discordapp.com/attachments/541290399155748867/600355984401104915/10227587.gif', 'https://cdn.discordapp.com/attachments/541290399155748867/600355984983982100/tumblr_ncs3wwsTEz1tkjb6ao1_500.gif', 'https://cdn.discordapp.com/attachments/541290399155748867/571463408634036230/0df01abf891f747634ec2a70e2f8e03fa8ff85a8_hq.gif'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  suicideGifs() {
    gifs = [
      'https://media1.tenor.com/images/bf6816f9b80fa48d0f7522840ca0223c/tenor.gif?itemid=10252904',
      'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706',
      'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166',
      'https://media1.tenor.com/images/f4396333a690b57ef168fc8d2b56d561/tenor.gif?itemid=10000193',
      'https://i.imgur.com/604w7Uk.gif',
      'https://i.imgur.com/pr6lR8A.gif',
      'https://i.imgur.com/R3U7fz4.gif',
      'https://i.imgur.com/ncvcNHp.gif',
      'https://i.imgur.com/EMFsNQi.gif',
      'https://media.giphy.com/media/BgVwNombFusbC/giphy.gif',
      'https://media.giphy.com/media/yZf5WeLUsi0JG/giphy.gif',
      'https://media.giphy.com/media/26FPz4po4ycD9nmMg/giphy.gif',
      'https://data.whicdn.com/images/310859253/original.gif',
      'https://data.whicdn.com/images/290510883/original.gif',
      'http://33.media.tumblr.com/tumblr_lxfqnyYrAX1qio1obo1_500.gif',
      'https://cdn60.picsart.com/182542841000202.gif?r1024x1024',
      'https://www.gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-11.gif',
      'https://www.gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-9.gif',
      'https://thumbs.gfycat.com/EquatorialGleefulArabianhorse-size_restricted.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  thinkGifs() {
    gifs = [
      'https://media1.tenor.com/images/64306aa282911478274b7bddd64da2f2/tenor.gif?itemid=11150074',
      'https://media1.tenor.com/images/a2e9889567a894d48328ebfaf3924de0/tenor.gif?itemid=5206184',
      'https://media1.tenor.com/images/88b24e972bc9b57e48e4c99e336623e5/tenor.gif?itemid=8141505',
      'https://media1.tenor.com/images/2cadd861fc8d2ed38e236f4f8b973788/tenor.gif?itemid=12283155',
      'https://media1.tenor.com/images/cb9ff654bb97b2550a5be56cc18a1092/tenor.gif?itemid=5680697',
      'https://media1.tenor.com/images/b353dcd4eb7b36ae6ce50e83824dc66e/tenor.gif?itemid=11579685',
      'https://media1.tenor.com/images/9c3a5d34880ba1a3ad7989b108536a6f/tenor.gif?itemid=12137036',
      'https://media1.tenor.com/images/046c5cfdfb264975a4ed2bb10f71d778/tenor.gif?itemid=5236580',
      'https://media1.tenor.com/images/e236a7582b104289ddc49a3e9c3c21b2/tenor.gif?itemid=8871039',
      'https://media1.tenor.com/images/406dea3c20cda3680a54de5f0c2ddd91/tenor.gif?itemid=5121344',
      'https://media1.tenor.com/images/13c350882e43500c32a85e26e3e46418/tenor.gif?itemid=9340321',
      'https://media1.tenor.com/images/89ad793bba0a210af06bb1742fdf52df/tenor.gif?itemid=12390530',
      'https://media1.tenor.com/images/2e973daae1aa0d2bf832da01a4274cf8/tenor.gif?itemid=9486832',
      'https://media1.tenor.com/images/8859c424c2cdfe40bb388c4616396741/tenor.gif?itemid=12071176',
      'https://media1.tenor.com/images/8e695c00b30bba7c63d6b1f7d4f3cc1c/tenor.gif?itemid=10411224',
      'https://media1.tenor.com/images/cecd2a814f8d82e529c933c72737d7d3/tenor.gif?itemid=12390238',
      'https://media1.tenor.com/images/e307cea10a1393ae400776a4091d8b6f/tenor.gif?itemid=12407885',
      'https://media1.tenor.com/images/a790e458eb86a4f191536ef9c174d122/tenor.gif?itemid=12396059'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  tiredGifs() {
    gifs = [
      'https://media1.tenor.com/images/4ffe9358324eafa2f6dde8c7c8ed1efa/tenor.gif?itemid=5634576',
      'https://media1.tenor.com/images/68fe5063a6e69b0c6e3ebdffd18158b8/tenor.gif?itemid=9920855',
      'https://thumbs.gfycat.com/HarmoniousReflectingBanteng-small.gif',
      'https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874',
      'https://media.giphy.com/media/CoeFBrfvxzZ2U/giphy.gif',
      'https://pa1.narvii.com/6208/10d75a542bdec084bbcdc84828a406bd1d246115_hq.gif',
      'https://media1.tenor.com/images/6bdb3db46f08c1738fa6fb2c3302eb83/tenor.gif?itemid=9595436',
      'https://i.gifer.com/84PK.gif',
      'https://i.gifer.com/JlN.gif',
      'https://i.pinimg.com/originals/b2/c3/bf/b2c3bf5858bf19437b30468d3934c208.gif',
      'https://i.imgur.com/KpFmMzf.gif',
      'https://data.whicdn.com/images/174120631/original.gif',
      'https://i.imgur.com/cfdfgVq.gif',
      'https://pa1.narvii.com/6277/232293dda8ac665f485605047099b086f60f76d4_hq.gif',
      'https://media.giphy.com/media/jAe22Ec5iICCk/giphy.gif',
      'https://i.pinimg.com/originals/e1/80/64/e18064e6a5b6f6cfd3f4f1520c662807.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-tired-gif-5.gif',
      'https://pa1.narvii.com/6369/b26e5df4a3738745a6808a2db83abc59839cac32_hq.gif',
      'http://68.media.tumblr.com/23daf6b9228a698e00f4c3e3e768caa6/tumblr_nya6haoSXA1u5x5xyo1_500.gif',
      'https://pa1.narvii.com/6111/1b06e58a2ea36b1bc8e5b813b67d0f0f9f209172_hq.gif',
      'https://data.whicdn.com/images/152143207/original.gif',
      'https://i.pinimg.com/originals/e7/82/0a/e7820a120fc491e6ef99eb82c33b768d.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  biteGifs() {
    gifs = [
      'https://media1.tenor.com/images/128c1cfb7f4e6ea4a4dce9b487648143/tenor.gif?itemid=12051598',
      'https://media1.tenor.com/images/3632813a0264ec1fc44525ff86cb1224/tenor.gif?itemid=9060303',
      'https://media1.tenor.com/images/6ab39603ef0dd6dbfc78ba20885b991f/tenor.gif?itemid=8220087',
      'https://media1.tenor.com/images/418a2765b0bf54eb57bab3fde5d83a05/tenor.gif?itemid=12151511',
      'https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565',
      'https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585',
      'https://media1.tenor.com/images/6dd67bd831780c4a754cb33697cddcb6/tenor.gif?itemid=10095819',
      'https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif?itemid=10364764',
      'https://media1.tenor.com/images/cb5b6f8b267be7f9f0e1dd4ac52e6439/tenor.gif?itemid=4696679',
      'https://media1.tenor.com/images/34a08d324868d33358e0a465040f210e/tenor.gif?itemid=11961581',
      'https://media.giphy.com/media/fhkRUj3BWmMnu/giphy.gif',
      'https://media.giphy.com/media/OqQOwXiCyJAmA/giphy.gif',
      'https://data.whicdn.com/images/280828748/original.gif',
      'https://media1.tenor.com/images/7b9575ccf2a5b33f97d0eaa053e1892c/tenor.gif?itemid=12180198',
      'https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif',
      'https://i.pinimg.com/originals/17/9a/16/179a16220f6cf2712073ccdc759ff3e1.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/027/044/1cd.gif',
      'https://pa1.narvii.com/6206/ede2a18b479c1a4b95bfa444559a1d3b4b3fcb0b_hq.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  feedGifs() {
    gifs = [
      'https://media1.tenor.com/images/93c4833dbcfd5be9401afbda220066ee/tenor.gif?itemid=11223742',
      'https://media1.tenor.com/images/15e7d9e1eb0aad2852fabda1210aee95/tenor.gif?itemid=12005286',
      'https://media1.tenor.com/images/4194e30c7b05f11fea0b2834764b39a8/tenor.gif?itemid=4815790',
      'https://media1.tenor.com/images/d08d0825019c321f21293c35df8ed6a9/tenor.gif?itemid=9032297',
      'https://media1.tenor.com/images/33cfd292d4ef5e2dc533ff73a102c2e6/tenor.gif?itemid=12165913',
      'https://media1.tenor.com/images/8efff4185dfb404532d6132023775bcd/tenor.gif?itemid=6004308',
      'https://media1.tenor.com/images/72268391ffde3cd976a456ee2a033f46/tenor.gif?itemid=7589062',
      'https://media.indiedb.com/images/groups/1/1/84/kanzashi-eating.gif',
      'http://s3.narvii.com/image/ovthwpsbuspmqzslkmmqek6k5lm7gljt_00.jpg',
      'https://media1.tenor.com/images/187ff5bc3a5628b6906935232898c200/tenor.gif?itemid=9340097',
      'https://media1.tenor.com/images/571da4da1ad526afe744423f7581a452/tenor.gif?itemid=11658244'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  fightGifs() {
    gifs = [
      'https://media1.tenor.com/images/c409b7031d3768c24db8bc0cbb1a2cb5/tenor.gif?itemid=5516967',
      'https://media1.tenor.com/images/1288323d6a58b5e0e5b045d1abd66255/tenor.gif?itemid=11425457',
      'https://media1.tenor.com/images/1772f2124b26969c63487927416adf42/tenor.gif?itemid=12217026',
      'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136',
      'https://media1.tenor.com/images/de289d8f02fc810eb1389aca8df6a417/tenor.gif?itemid=9778017',
      'https://media1.tenor.com/images/3daa078c7128766260beea97172e5c46/tenor.gif?itemid=9920846',
      'https://media1.tenor.com/images/12dd347f9f49537ebc93d76dabb5a732/tenor.gif?itemid=5222656',
      'https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=5012110',
      'https://media1.tenor.com/images/42262e67af9b60e7d45c52408c6201cb/tenor.gif?itemid=10973351',
      'https://media1.tenor.com/images/23d43cfa9a9c394117516634fd2c1954/tenor.gif?itemid=4869488',
      'https://media1.tenor.com/images/5422eff8cb023258632f3d58cdfac2ec/tenor.gif?itemid=6092338',
      'https://media1.tenor.com/images/38747ecba2123ce45b7bb567aeec0baa/tenor.gif?itemid=4708959',
      'https://media1.tenor.com/images/576b4aa919d864b4fc78163a8abd8776/tenor.gif?itemid=5598802',
      'https://media1.tenor.com/images/0b1848bfa5250702bbc5d4605795c8cc/tenor.gif?itemid=8932894',
      'https://media1.tenor.com/images/40c7813c5204434ec152fc1e97d6c262/tenor.gif?itemid=4912392',
      'https://media1.tenor.com/images/92e9d1a88b42a360429fffa6f1bf7c33/tenor.gif?itemid=9340319',
      'https://media1.tenor.com/images/612fdcc19a34fe678c41a0265dbedde3/tenor.gif?itemid=5634615',
      'https://media1.tenor.com/images/73282e555bd28212280a94a42b879648/tenor.gif?itemid=5663357',
      'https://media1.tenor.com/images/3dc10c5b587751b1a9f5fd6df72c8415/tenor.gif?itemid=4881495'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  goodbyeGifs() {
    gifs = [
      'https://media1.tenor.com/images/43b26f57280c43f77e87a546bf6c6011/tenor.gif?itemid=5634610',
      'https://media1.tenor.com/images/33fdd8dc7564b56d5905428484f5aee4/tenor.gif?itemid=5604313',
      'https://media1.tenor.com/images/0f0abf75029a2db62b80ae0c3505004c/tenor.gif?itemid=4731137',
      'https://media.tenor.com/images/454cae3260426b7357adee5ed07c7aee/tenor.gif',
      'https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940',
      'https://media1.tenor.com/images/8bbf9194008e3f8f2f2665c2cbe8dbca/tenor.gif?itemid=10837648',
      'https://media1.tenor.com/images/5aae3b8bfb1e1b897a8818db469ec5c4/tenor.gif?itemid=5634641',
      'https://media1.tenor.com/images/8076cb1014859132f8792d0b4c241e16/tenor.gif?itemid=4605177',
      'https://media1.tenor.com/images/0f6922ce0e6bee7ddf0ecbab7cb4a053/tenor.gif?itemid=9214454',
      'https://media1.tenor.com/images/d6c91bbd08433ea6c3c074f348d5f8e7/tenor.gif?itemid=11269893',
      'https://media1.tenor.com/images/a0d2ab82d3650fa0a8e527519d48f558/tenor.gif?itemid=5634626',
      'https://media1.tenor.com/images/d46726d67e8348bcd0500b29093787bc/tenor.gif?itemid=12252507',
      'https://media1.tenor.com/images/f6eb2f25c584518bdf2be1ecbbb4cb0b/tenor.gif?itemid=8806070',
      'https://media1.tenor.com/images/f3cdd4b857d34dd31702529519da4056/tenor.gif?itemid=7364540',
      'https://media1.tenor.com/images/d823ee899bc35a61701796b3b2f27282/tenor.gif?itemid=8463004',
      'https://media1.tenor.com/images/e9b8171dbbc00eb6734bfbe03bd262a6/tenor.gif?itemid=8463000',
      'https://media1.tenor.com/images/6a9fe457a9bbadccc1a851a573923ee2/tenor.gif?itemid=8654074',
      'https://media1.tenor.com/images/02367e34631ec1cdeb1f7ab0d4f483f4/tenor.gif?itemid=7213145',
      'https://media1.tenor.com/images/dc5f420c67a36df162240d47ac9bba51/tenor.gif?itemid=11579994'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  greetGifs() {
    gifs = [
      'https://media1.tenor.com/images/f453ca22fdcc961710cdaae4537057f1/tenor.gif?itemid=9886599',
      'https://media1.tenor.com/images/25efbc5b552958238dded252ab0fc31d/tenor.gif?itemid=10403612',
      'https://media1.tenor.com/images/2585170d55cf54d2e890e3028b3b0b9f/tenor.gif?itemid=12395965',
      'https://media1.tenor.com/images/8f5430367d6c8ded5778fb1c850021c1/tenor.gif?itemid=12395961',
      'https://media1.tenor.com/images/3c2054130fb03de2d8549a98a3e2685a/tenor.gif?itemid=6195457',
      'https://media1.tenor.com/images/37aa92ebab4f4657a8f1b913b4ea7da4/tenor.gif?itemid=5970516',
      'https://media1.tenor.com/images/b82e6a78b221f7dc2e41605b6aa2cbcc/tenor.gif?itemid=11503720f',
      'https://media1.tenor.com/images/58707124f314cebc98639478e295ea66/tenor.gif?itemid=8644350',
      'https://media1.tenor.com/images/f5cd33863e8319ea72990eefc8e697a8/tenor.gif?itemid=5417197',
      'https://media1.tenor.com/images/72d407300428e6f2ef3e469511d5f8ec/tenor.gif?itemid=5463317',
      'https://media1.tenor.com/images/f82fdfe817cfb8dacb5bd5c7dadb632d/tenor.gif?itemid=8718221',
      'https://media1.tenor.com/images/056c584d9335fcabf080ca43e583e3c4/tenor.gif?itemid=8994845',
      'https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif?itemid=8807701',
      'https://media1.tenor.com/images/d10c3d213be6893235d97ae768db8c07/tenor.gif?itemid=4608178',
      'https://media1.tenor.com/images/9ea72ef078139ced289852e8a4ea0c5c/tenor.gif?itemid=7537923',
      'https://media1.tenor.com/images/673726fd35121fc1e96755346328f3c1/tenor.gif?itemid=9473392',
      'https://media1.tenor.com/images/79f33c2f524cbfed4ef6896b39e67663/tenor.gif?itemid=9416181',
      'https://media1.tenor.com/images/a4d30300af7eded0f616578b9ebbeb40/tenor.gif?itemid=5354245',
      'https://media1.tenor.com/images/ae40603eddb6e4bb1ea56cc6de7d0f6e/tenor.gif?itemid=5142315',
      'https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  highfiveGifs() {
    gifs = ['https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431', 'https://media1.tenor.com/images/c3263b8196afc25ddc1d53a4224347cd/tenor.gif?itemid=9443275', 'https://media1.tenor.com/images/d9789c904472970f6654633ac2b03aa1/tenor.gif?itemid=4746486', 'https://media1.tenor.com/images/b910eef482ebf7f15aa6da0cc648f827/tenor.gif?itemid=5618288', 'https://media1.tenor.com/images/106c8e64e864230341b59cc892b5a980/tenor.gif?itemid=5682921', 'https://media1.tenor.com/images/9730876547cb3939388cf79b8a641da9/tenor.gif?itemid=8073516', 'https://media1.tenor.com/images/7d01627fbc6236659aea48d965e88956/tenor.gif?itemid=10216947', 'https://media1.tenor.com/images/e96d2396570a2fadd9c83e284a1ca675/tenor.gif?itemid=5390726'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  holdhandsGifs() {
    gifs = [
      'https://media1.tenor.com/images/3392891ba596dd0aaf9b8947b00f8bef/tenor.gif?itemid=9229388',
      'https://media1.tenor.com/images/58e903eee47f8c656081f28faace86a1/tenor.gif?itemid=10277063',
      'https://media1.tenor.com/images/5ff3612e7add0eb5494140ab1d5a9e13/tenor.gif?itemid=7374313',
      'https://media1.tenor.com/images/47ad09db47d7770b5f944890bb09a089/tenor.gif?itemid=9783970',
      'https://media1.tenor.com/images/788241d27a6568664c527b720e89f654/tenor.gif?itemid=12427220',
      'https://media1.tenor.com/images/f7f025336d41eca1acc695268e5e76d5/tenor.gif?itemid=11937855',
      'https://media1.tenor.com/images/638b57e297aa903caec60778f50e4801/tenor.gif?itemid=7419635',
      'https://media1.tenor.com/images/47d18b56a850217a46b517da4325d132/tenor.gif?itemid=11496625',
      'https://media1.tenor.com/images/a5dbae268b6ed66ac9bf469babd02490/tenor.gif?itemid=11060765',
      'https://media1.tenor.com/images/4d3cce7fe44adc2ad944ecb6f02e98ba/tenor.gif?itemid=7917111'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  hugGifs() {
    gifs = [
      'https://media1.tenor.com/images/da90b86dbf6a49a413b85444be417f4a/tenor.gif?itemid=9862193',
      'https://media1.tenor.com/images/a10ac0476dbdaa673f292991da470373/tenor.gif?itemid=5466082',
      'https://media1.tenor.com/images/c67e9d0cf6b9126540c4e490bacbceee/tenor.gif?itemid=4127486',
      'https://media1.tenor.com/images/6c26cc8164712b7f54980070199b8e7f/tenor.gif?itemid=8833018',
      'https://media1.tenor.com/images/5e099eab0bf89a847c25b907761e3cce/tenor.gif?itemid=9449283',
      'https://media1.tenor.com/images/aa19db28e27a2399ca27bae5de1103e6/tenor.gif?itemid=9983136',
      'https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935',
      'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788',
      'https://media1.tenor.com/images/54b28ce956b2f7af27c3286c78c70f44/tenor.gif?itemid=8568288',
      'https://media1.tenor.com/images/45b1dd9eaace572a65a305807cfaec9f/tenor.gif?itemid=6238016',
      'https://media1.tenor.com/images/b4ba20e6cb49d8f8bae81d86e45e4dcc/tenor.gif?itemid=5634582',
      'https://media1.tenor.com/images/949d3eb3f689fea42258a88fa171d4fc/tenor.gif?itemid=4900166',
      'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788',
      'https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500',
      'https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif?itemid=9920978',
      'https://media1.tenor.com/images/074d69c5afcc89f3f879ca473e003af2/tenor.gif?itemid=4898650',
      'https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093',
      'https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716',
      'https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705',
      'https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630',
      'https://media1.tenor.com/images/f9c540c2b5cdb52f22ed835478b0a36f/tenor.gif?itemid=10751424',
      'https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif?itemid=10522729',
      'https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589',
      'https://media1.tenor.com/images/8055f0ab4e377e35f5884dfe3e3fec52/tenor.gif?itemid=5210972',
      'https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif?itemid=5044460',
      'https://media1.tenor.com/images/11889c4c994c0634cfcedc8adba9dd6c/tenor.gif?itemid=5634578',
      'https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif?itemid=7552077',
      'https://media1.tenor.com/images/54e97e0cdeefea2ee6fb2e76d141f448/tenor.gif?itemid=11378437',
      'https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079',
      'https://media0.giphy.com/media/svXXBgduBsJ1u/200.gif?cid=e1bb72ff5c311b324e3033686f6780cd',
      'https://media1.giphy.com/media/kFTKQfjK4ysZq/200.gif?cid=e1bb72ff5c311a6f5577664a77b48fd0',
      'https://media0.giphy.com/media/IcqmgdFPmehyM/200.gif?cid=e1bb72ff5c311a6f5577664a77b48fd0',
      'https://media1.giphy.com/media/du8yT5dStTeMg/200.gif?cid=e1bb72ff5c311cba7765547a32d22fd1',
      'https://media3.giphy.com/media/qscdhWs5o3yb6/200.gif?cid=e1bb72ff5c311cf430446e4a4120b132',
      'https://media0.giphy.com/media/iMrHFdDEoxT5S/200.gif?cid=e1bb72ff5c311cf430446e4a4120b132',
      'https://media2.giphy.com/media/JTjSlqiz63j5m/200.gif?cid=e1bb72ff5c311d4a494b7230451a889b',
      'https://media1.giphy.com/media/BXrwTdoho6hkQ/200.gif?cid=e1bb72ff5c311cf430446e4a4120b132'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  killGifs() {
    gifs = [
      'https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101',
      'https://media1.tenor.com/images/2c945adbbc31699861f411f86ce8058f/tenor.gif?itemid=5459053',
      'https://media1.tenor.com/images/9a4cd29ab5552bfee389e028806f9d03/tenor.gif?itemid=5319705',
      'https://media1.tenor.com/images/aa5a82dcaff6309dfd5ee5cfeaad4bed/tenor.gif?itemid=10616092',
      'https://media1.tenor.com/images/e0f1beaf7251ee73ec5eb5fff1ec824c/tenor.gif?itemid=6203303',
      'https://media1.tenor.com/images/d6f924fe726f56c5fadc19720e632588/tenor.gif?itemid=3537093',
      'https://media1.tenor.com/images/27f82ef4f27ebad9c51259365cacd62e/tenor.gif?itemid=5472977',
      'https://media1.tenor.com/images/deba9fe8d7fc25a3a319200014dc72fa/tenor.gif?itemid=10137787',
      'https://media1.tenor.com/images/d872c04160b124114a925e66f79a6c1c/tenor.gif?itemid=3430135',
      'https://media1.tenor.com/images/45ec8ee66e87cf7603a43d5105f883c3/tenor.gif?itemid=5459055',
      'https://media1.tenor.com/images/4643c170278fa1168ae7fd000ecea2ac/tenor.gif?itemid=5521029',
      'https://media1.tenor.com/images/46051e203deaefc5642916c1eafa54a7/tenor.gif?itemid=3660367',
      'https://media1.tenor.com/images/25f853a32137e24b11cd13bc2142f63a/tenor.gif?itemid=7172028'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  kissGifs() {
    gifs = [
      'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
      'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
      'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
      'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
      'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
      'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif',
      'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
      'https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif',
      'https://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
      'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
      'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
      'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
      'https://media.giphy.com/media/L3rumss7XR4QM/giphy.gif',
      'https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif',
      'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
      'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
      'https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif',
      'https://media.giphy.com/media/ll5SPh4ocE/giphy.gif',
      'https://media.giphy.com/media/7QkZap9kQ1iy4/giphy.gif',
      'https://media.giphy.com/media/Gg5yu43iFhO6Y/giphy.gif',
      'https://media.giphy.com/media/IdzovcoOUoUM0/giphy.gif',
      'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
      'https://media.giphy.com/media/JFnW2F8gvdACQ/giphy.gif',
      'https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif',
      'https://media.giphy.com/media/K4VEsbuHfcj6g/giphy.gif',
      'https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif?itemid=4829336',
      'https://media1.tenor.com/images/d9115cb8f24162cf70428d8cb8d96558/tenor.gif?itemid=9382690',
      'https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618',
      'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
      'https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722',
      'https://media1.tenor.com/images/a562410344e8b88fd737dfc9a4b6b1e1/tenor.gif?itemid=3560801',
      'https://media1.tenor.com/images/e81ca9886564ce7469a5736e5c3a77b1/tenor.gif?itemid=12194456',
      'https://media1.tenor.com/images/e858678426357728038c277598871d6d/tenor.gif?itemid=9903014',
      'https://media1.tenor.com/images/896519dafbd82b9b924b575e3076708d/tenor.gif?itemid=8811697',
      'https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670',
      'https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649',
      'https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449',
      'https://media1.tenor.com/images/105a7ad7edbe74e5ca834348025cc650/tenor.gif?itemid=9158317',
      'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
      'https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552',
      'https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409',
      'https://media1.tenor.com/images/6519e870af23780241a17e90ca91306d/tenor.gif?itemid=9881778',
      'https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557',
      'https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314',
      'https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif?itemid=5448064',
      'https://media1.tenor.com/images/a0b68f4704f811bfcc517574425e96a5/tenor.gif?itemid=5291693',
      'https://media1.tenor.com/images/df692538bbf513f7bd94709435e96342/tenor.gif?itemid=10358839',
      'https://media.giphy.com/media/afXX9ioU7XCjS/giphy.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  lickGifs() {
    gifs = [
      'https://media1.tenor.com/images/5f73f2a7b302a3800b3613095f8a5c40/tenor.gif?itemid=10005495',
      'https://media1.tenor.com/images/150beaca7524aea6cd6f3a14b1b777da/tenor.gif?itemid=4854805',
      'https://media1.tenor.com/images/0a2cdce1fc35a069cdcb992f89c8855b/tenor.gif?itemid=4859151',
      'https://media1.tenor.com/images/d702fa41028207c6523b831ec2db9467/tenor.gif?itemid=5990650',
      'https://media1.tenor.com/images/42a2aa3a3bee0c5dfe53e51cd8e4fe0d/tenor.gif?itemid=10575259',
      'https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738',
      'https://media1.tenor.com/images/1a2d051f28155db0e4cf175d987cdac2/tenor.gif?itemid=12141721',
      'https://media1.tenor.com/images/6b701503b0e5ea725b0b3fdf6824d390/tenor.gif?itemid=12141727',
      'https://media1.tenor.com/images/192619dc81644d3d97db945d325f294f/tenor.gif?itemid=8162118',
      'https://media1.tenor.com/images/13e46713e184aa2b7a505ab9612f4433/tenor.gif?itemid=9709343',
      'https://media1.tenor.com/images/feeef4685f9307b76c78a22ba0a69f48/tenor.gif?itemid=8413059',
      'https://media1.tenor.com/images/6b701503b0e5ea725b0b3fdf6824d390/tenor.gif?itemid=12141727',
      'https://i.pinimg.com/originals/e6/1d/a7/e61da774938e4f209818edcbc0d4a671.gif',
      'https://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-12.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  poutGifs() {
    gifs = [
      'https://media1.tenor.com/images/c9c9ff2eed3dff5c3b9f7c0c033704da/tenor.gif?itemid=8657468',
      'https://media1.tenor.com/images/a2cde795512dffb7ed89448a14d7e68e/tenor.gif?itemid=12007445',
      'https://media1.tenor.com/images/885cdbb1e6950cefdc981db000079c85/tenor.gif?itemid=7230359',
      'https://media1.tenor.com/images/58a26a738703565f7fc276aedabfcfb3/tenor.gif?itemid=5754157',
      'https://media1.tenor.com/images/0c350d4e4a44a20c0b93aa2d9a6d0346/tenor.gif?itemid=8692729',
      'https://media1.tenor.com/images/eba7e031e08314d0d7eee7a16941f997/tenor.gif?itemid=7514096',
      'https://media1.tenor.com/images/d52117b1bbec0fa89baa8095e2c0fe87/tenor.gif?itemid=11686117',
      'https://media1.tenor.com/images/b3896a1b2f467cad24840634b0d0043d/tenor.gif?itemid=10932049',
      'https://media1.tenor.com/images/92832fef95eb162e73fe15756ee1bf90/tenor.gif?itemid=6181675',
      'https://media1.tenor.com/images/3088ccd8b567a915e957b70cf9bbec17/tenor.gif?itemid=11836890',
      'https://media1.tenor.com/images/73afb40f4becbab10aee349b75a6b4ab/tenor.gif?itemid=12069252',
      'https://media1.tenor.com/images/d6936f7341ca27f325046101b588b1d7/tenor.gif?itemid=7447290'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  punchGifs() {
    gifs = [
      'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
      'https://media1.tenor.com/images/c621075def6ca41785ef4aaea20cc3a2/tenor.gif?itemid=7679409',
      'https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310',
      'https://media1.tenor.com/images/b2308e16fa5b71c541efdd13dea4f9ba/tenor.gif?itemid=10462739',
      'https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335',
      'https://media1.tenor.com/images/6d77cf1fdaa2e7c6a32c370240a7b77c/tenor.gif?itemid=9523306',
      'https://media1.tenor.com/images/63cfc3a949aaaa89d17c687ba0eb5f85/tenor.gif?itemid=12659250',
      'https://media1.tenor.com/images/63cfc3a949aaaa89d17c687ba0eb5f85/tenor.gif?itemid=12659250',
      'https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829',
      'https://media1.tenor.com/images/d7c30e46a937aaade4d7bc20eb09339b/tenor.gif?itemid=12003970',
      'https://media1.tenor.com/images/b82427b0507d43afb17a6c9ddddfa0a9/tenor.gif?itemid=4903584',
      'https://media1.tenor.com/images/0dbb53b0f2a8730ea3c8a0e2502b6bac/tenor.gif?itemid=10194762',
      'https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=5012110',
      'https://media1.tenor.com/images/d37431cbc9bd68eca0d700c787bf33d0/tenor.gif?itemid=5521090',
      'https://media1.tenor.com/images/d7d52d0592bbc77bd5c629c2132c1b33/tenor.gif?itemid=9409159',
      'https://media1.tenor.com/images/58510521544a727a92b4253577afec50/tenor.gif?itemid=11836513',
      'https://i.gifer.com/3Qwj.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  reviveGifs() {
    gifs = ['https://media1.tenor.com/images/17719dc4499c6d866420f4449db39710/tenor.gif?itemid=9997555', 'https://thumbs.gfycat.com/PointlessFlatBushbaby-small.gif', 'https://cdn.discordapp.com/attachments/541402053998673950/606206209737097216/6e096d06d5bc7a54dfe09329e596cbe8316559ce_00.gif', 'https://cdn.discordapp.com/attachments/541402053998673950/606206173808427030/original_1.gif', 'https://cdn.discordapp.com/attachments/541402053998673950/606206189872742474/tumblr_inline_ot3heqGyju1uvbeib_540.gif', 'https://cdn.discordapp.com/attachments/541402053998673950/606206149905350686/tumblr_mwq2uu7KzD1rnm2nso3_250.gif', 'https://cdn.discordapp.com/attachments/541402053998673950/606206217748217926/ec87d55c8a58fae220eb62a37da4c6259ef894ef_00.gif'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  secretGifs() {
    gifs = ['https://media1.tenor.com/images/4b7135e1a729a2996ba95e8dc1722125/tenor.gif?itemid=5620572', 'https://media1.tenor.com/images/ffc73aba1aebf8cde524e5ebbb23ca5b/tenor.gif?itemid=6192278', 'https://media1.tenor.com/images/bb5ef4377f82091c7aaa01188d7708d5/tenor.gif?itemid=8330775', 'https://image.myanimelist.net/ui/ueRS3W4eVdEzb4WVsqz9NzUaDOlev5DDJWgkZ8F9ZBpMoqRiC805GQ-e_02i0YPOC1MdcqupF1HFbZmVHCviZkfb3JjHzRuVmzAuhsoLpKj3UPYdDM8XIQR6-iEuW9FO', 'https://i.kym-cdn.com/photos/images/newsfeed/000/990/135/e2d.gif'];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  slapGifs() {
    gifs = [
      'https://media1.tenor.com/images/fd14f63a93796ed26bd385c015df57b8/tenor.gif?itemid=4665506',
      'https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif?itemid=4436362',
      'https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394',
      'https://media1.tenor.com/images/741cad565c0e08a5e03b33e52a500b9a/tenor.gif?itemid=5417104',
      'https://media1.tenor.com/images/35c1ecae2168c49be997871adc2a5d75/tenor.gif?itemid=3412059',
      'https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304',
      'https://media1.tenor.com/images/cf881d79afde980ea7cf58219167bfb7/tenor.gif?itemid=12178034',
      'https://media1.tenor.com/images/c153d972e7a35d43608e87252290718a/tenor.gif?itemid=5160096',
      'https://media1.tenor.com/images/87d8c345c46744babab5c921edcfb3d8/tenor.gif?itemid=4963178',
      'https://media1.tenor.com/images/f619012e2ec268d73ecfb89af5a8fb51/tenor.gif?itemid=8562186',
      'https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254',
      'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136',
      'https://media1.tenor.com/images/0a3e109296e16977a61ed28c1e5bf7bf/tenor.gif?itemid=5122897',
      'https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720',
      'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
      'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
      'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
      'https://media.giphy.com/media/exaa8OED1vvq/giphy.gif',
      'https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif',
      'https://media.giphy.com/media/LB1kIoSRFTC2Q/giphy.gif',
      'https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif',
      'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943',
      'https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028',
      'https://i.imgur.com/Agwwaj6.gif',
      'https://media1.tenor.com/images/c1246556aa5726ad6c0ee50f2c3998ce/tenor.gif?itemid=7864657',
      'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif',
      'https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif',
      'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-12.gif',
      'https://i.imgur.com/oOCq3Bt.gif',
      'https://orig00.deviantart.net/f7a4/f/2013/277/b/1/goldentime_by_setonami-d6p62pj.gif',
      'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif',
      'https://i.kym-cdn.com/photos/images/original/001/390/712/289.gif',
      'https://data.whicdn.com/images/230128566/original.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  tickleGifs() {
    gifs = [
      'https://media.giphy.com/media/sQV2u6KDpv03e/giphy.gif',
      'https://media1.tenor.com/images/fea79fed0168efcaf1ddfb14d8af1a6d/tenor.gif?itemid=7283507',
      'https://media1.tenor.com/images/05a64a05e5501be2b1a5a734998ad2b2/tenor.gif?itemid=11379130',
      'https://media1.tenor.com/images/d38554c6e23b86c81f8d4a3764b38912/tenor.gif?itemid=11379131',
      'https://media1.tenor.com/images/f43da23b4ed0938ce362b0374b88e42c/tenor.gif?itemid=8054679',
      'https://media1.tenor.com/images/48756e36251937e8568e5dbd2d3d0978/tenor.gif?itemid=7885643',
      'https://media1.tenor.com/images/b1fc22bec9d5e8fed0c2269ef14824bf/tenor.gif?itemid=5235178',
      'https://media1.tenor.com/images/00910f43e2a13ec68c034bb7ff1f86b0/tenor.gif?itemid=4317132',
      'https://media1.tenor.com/images/d917b292aa2199bd6a1fbe63f3ffea6b/tenor.gif?itemid=6039479'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  },
  wetGifs() {
    gifs = [
      'https://media1.tenor.com/images/267e9b16cccc91a5d7b7a8abf8f4317b/tenor.gif?itemid=10898525',
      'https://i.gifer.com/VQnd.gif',
      'https://i.gifer.com/MEP8.gif',
      'https://media1.tenor.com/images/678dd5acc1ef609f31e81802c02388f0/tenor.gif?itemid=5235223',
      'https://media1.tenor.com/images/69626ca3c751842f9fe262ceccb2af1d/tenor.gif?itemid=13928794',
      'https://i.gifer.com/Sw6X.gif',
      'https://media1.tenor.com/images/829d9279fd406e29542e873fa673a7bf/tenor.gif?itemid=9832682',
      'https://data.whicdn.com/images/264128815/original.gif',
      'https://i.kym-cdn.com/photos/images/original/000/965/395/cd5.gif',
      'https://i.makeagif.com/media/8-05-2017/jEPnQ7.gif',
      'https://media1.tenor.com/images/3a8bd5f5a7ed2d75b7f61ac4e30d5d26/tenor.gif?itemid=11786280',
      'https://i.kym-cdn.com/photos/images/newsfeed/000/985/188/dee.gif',
      'http://pa1.narvii.com/6063/f09c3ea0233d17c4d8a1f4e47e3698a0e3e00b94_hq.gif',
      'https://media.tenor.com/images/cf04da9f6a6c374d7a8a464f2b009e7d/tenor.gif',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/007/495/cd5.gif'
    ];
    select = Math.floor(Math.random() * gifs.length);
    return gifs[select];
  }
};
