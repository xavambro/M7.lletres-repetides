//Ejercicio 1
var nom=['X','A','V','I','E','R'];
for(var i=0;i<nom.length;i++){
    console.log(nom[i]);
}
//Ejercicio 2
var regVocales = /[aeiou]/i;
var regNumeros = /[0-9]/;
for(var i=0;i<nom.length;i++){
    if(regVocales.test(nom[i])){
        console.log("Ha trobat la vocal: "+nom[i]);
    }else if(regNumeros.test(nom[i])){
        console.log("Els noms de persones no contenen el número: "+nom[i]);
    }else{
        console.log("Ha trobat la consonant: "+nom[i]);
    }
    
}
//Ejercicio 3
var nomMap = new Map();
for(var i=0;i<nom.length;i++){
    if(nomMap.get(nom[i])==null){
        nomMap.set(nom[i],1);
    }else{
        nomMap.set(nom[i],nomMap.get(nom[i])+1);
    }
}
console.log(nomMap);

//Ejercicio 4
var cognom = ['A','M','B','R','O','S','I','O'];
var nomCognom = nom.concat(" ",cognom);
console.log(nomCognom);

//Nivel 2
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
var regEmail = /[\w\-]+@[\w\-ñ]+(\.es)/gi
var emails = str.match(regEmail);
console.log(emails);

