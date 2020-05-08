var vgeneral = [false, false, false, false, false, false, false, false];

function validacion(){
    var bandera = true;/*
    var vc = validarCedula();
    var vn = validarNA(document.getElementById('name'), 'mnombre');
    var va = validarNA(document.getElementById('lastname'), 'mapellido')
    var vf = validarFecha();
    var vco = verificarCorreo();
    var vps = verificarContrasena();
    var vd = verificarDT(document.getElementById('address'), 'mdireccion');
    var vt = verificarDT(document.getElementById('telf'), 'mtelefono');*/
    for(var i=0; i<8 ; i++){
        if(vgeneral[i]==false){
            bandera = false;
            i = 8;
        }
    }

    if(vc==false || vn==false || va==false || vf==false || vco==false || vps==false){
        bandera = false;
    }else{
        alert('Datos ingresados correctamente');
    }

    return bandera;
}

//LIMITACION CARACTERES
function noLetras(texto){
    if(texto.value.length >0){
        if(texto.value.length>10){
            texto.value = texto.value.substring(0, texto.value.length-1);
            return false;
        }else{
            var valor = texto.value.charCodeAt(texto.value.length-1);
            if(valor >= 48 && valor <= 57){
                return true;
            }else{
                texto.value = texto.value.substring(0, texto.value.length-1);
                return false;
            }
        } 
    }else{
        return true;
    }
}

function noNumeros(texto){
    if(texto.value.length > 0){
        var as = texto.value.charCodeAt(texto.value.length-1);

        if((as >= 97 && as <= 122)||(as>=65 && as<=90) || as==32){
            return true;
        }else {
            texto.value = texto.value.substring(0, texto.value.length-1);
            return false;
        }
    }else{
    return true;
    }
}


//FORMATO ERROR/ARREGLO
function error(inp, spa, men){
    document.getElementById(spa).innerHTML = men;
    inp.style.border = '2px red solid';
    inp.className = 'error';
}
function arreglo(inp, spa){
    document.getElementById(spa).innerHTML = '';
    inp.style.border = '2px green solid';
    inp.className = 'none';
}


//VALIDACION CEDULA
function validarCedula (id){
    var bandera = true;
    var ced = document.getElementById("dni");
    //console.log(ced.length)
    if(ced.value.length!==10 && ced.type == 'text'){
        error(ced, 'mcedula', '<br>Datos invalidos')
        bandera = false;
        vgeneral[id]=bandera;
    }else{
        var suma =0;
        for(var i=0; i<(ced.value.length-1); i++){
            var num = ced.value.charCodeAt(i) - 48;
            if(i%2==0){
                num = num*2;
                if(num>=10){
                    num = num-9;
                }
            }
            suma = suma + num;
        }
        suma = suma/10;
        var isuperior = Math.ceil(suma);
        var resul = isuperior - suma;
        resul = resul * 10;
        resul = Math.ceil(resul);
        //console.log(resul)
        //console.log(ced.value.charCodeAt(9)-48)
        if(resul !== (ced.value.charCodeAt(9)-48)){
            error(ced, 'mcedula', '<br>La cedula ingresada no es correcta')
            bandera = false;
            vgeneral[id]=bandera;
        }else{
            arreglo(ced, 'mcedula');
            bandera = true;
            vgeneral[id]=bandera;
        }

    }
    /*
    if(bandera == true){
        alert('Cedula ingresada correctamente');
    }*/

    return bandera;
}


//VALIDACION NOMBRES Y APELLIDOS
function validarNA(atri, men, id){
    var bandera = true;
    if(atri.value!==''){
        var partes = atri.value.split(" ");
        //console.log(partes)
        if(partes.length !== 2 || partes[0]=='' || partes[1]==''){
            error(atri, men, '<br>Los datos ingresados no son aceptados')
            bandera = false;
            vgeneral[id]=bandera;
        }else{
            arreglo(atri, men);
            bandera = true;
            vgeneral[id]=bandera;
        }
    }else{
        error(atri, men, '<br>Los datos ingresados no son aceptados')
        bandera = false;
        vgeneral[id]=bandera;
    }
    /*
    if(bandera == true){
        alert('Nombres ingresados correctamente');
    }*/
    return bandera;
}


//VALIDACION telefono



//VALIDAR FECHA
function soloFecha(fec){
    if(fec.value.length > 0){
        if(fec.value.length > 10){
            fec.value = fec.value.substring(0, fec.value.length-1);
            return false;
        }else{
            var feca = fec.value.charCodeAt(fec.value.length-1);
            if(feca>=47 && feca<=57){
                if(fec.value.length==2 || fec.value.length==5){
                    fec.value = fec.value+'/';
                }
                return true;
            }else{
                fec.value = fec.value.substring(0, fec.value.length-1);
                return false;
            }
            
        }
    }else{
        return true;
    }
}

function validarFecha(id){
    var bandera = true;
    var fecha = document.getElementById("nac").value
    var partes = fecha.split("/");
    
    if(fecha.length==10){
        if(partes.length!==3 || partes[0].length!==2 || partes[1].length!==2 || partes[2].length!==4){
            error(document.getElementById("nac"), 'mnac', '<br>Los datos no estan en el formato')
            bandera = false;
            vgeneral[id]=bandera;
        }else{
            //console.log(partes[0]);
            //console.log(partes[1]);
            //console.log(partes[2]);
            if(partes[0]<32 && partes[1]<13 && partes[2]<2021){
                arreglo(document.getElementById("nac"), 'mnac');
                bandera = true;
                vgeneral[id]=bandera;
            }else{
                error(document.getElementById("nac"), 'mnac', '<br>Los datos no son una fecha valida')
                bandera = false;
                vgeneral[id]=bandera;
            }
        }
    }else{
        error(document.getElementById("nac"), 'mnac', '<br>Los datos no estan completos');
        bandera = false;
        vgeneral[id]=bandera;
    }
    return bandera;
}

//VERIFICACION DE CORREO
function verificarCorreo(id){
    var bandera = true;
    var corr = document.getElementById("email").value;
    var partes = corr.split("@");

    if(partes.length==2){
        if(partes[0].length>=3){
            if(partes[1]=='ups.edu.ec' || partes[1]=='est.ups.edu.ec'){
                arreglo(document.getElementById("email"), 'mmail');
                bandera = true;
                vgeneral[id]=bandera;
            }else{
                error(document.getElementById("email"), 'mmail', '<br>El correo no pertenece a la UPS')
                bandera = false;
                vgeneral[id]=bandera;
            }
        }else{
            error(document.getElementById("email"), 'mmail', '<br>El nombre de la cuenta es muy corta')
            bandera = false;
            vgeneral[id]=bandera;
        }
    }else{
        error(document.getElementById("email"), 'mmail', '<br>El dato ingresado no es un correo electronico')
        bandera = false;
        vgeneral[id]=bandera;
    }

}

//VERIFICAR CONTRASENIA
function verificarContrasena(id){
    var bandera = true;
    var senmayus = false;
    var senminus = false;
    var may;
    var min;
    var ltascii;
    var contra = document.getElementById('password').value;
    
    if(contra.length>=8){
        if(contra.includes('_')==true || contra.includes('@')==true || contra.includes('$')==true){
            
            for(var i=0; i<contra.length; i++){
                ltascii = contra.charCodeAt(i);
                if((ltascii>=65 && ltascii<=90) || (ltascii>=97 && ltascii<=122)){
                    may = contra.charAt(i).toUpperCase();
                    min = contra.charAt(i).toLowerCase();
                    if(contra.charCodeAt(i)===may.charCodeAt(0)){
                        senmayus = true;
                    }
                    if(contra.charCodeAt(i)===min.charCodeAt(0)){
                        senminus = true;
                    }
                    if(senmayus==true && senminus==true){
                        i = contra.length;
                    }
                }
                
            }
            if(senmayus==true && senminus==true){
                arreglo(document.getElementById('password'), 'mcontrasena');
                bandera = true;
                vgeneral[id]=bandera;
            }else{
                error(document.getElementById('password'), 'mcontrasena', '<br>La contrasena no contiene mayusculas o minusculas')
                bandera = false;
                vgeneral[id]=bandera;
            }
        }else{
            error(document.getElementById('password'), 'mcontrasena', '<br>La contrasena no contiene caracteres especiales')
            bandera = false;
            vgeneral[id]=bandera;
        }
    }else{
        error(document.getElementById('password'), 'mcontrasena', '<br>Contraseña muy corta')
        bandera = false;
        vgeneral[id]=bandera;
    }
    return bandera;
}

//Verificar direccion y telefono
function verificarDT(atrib, mens, id){
    var bandera = true;
    if(atrib.value.length > 0){
        arreglo(atrib, mens);
        bandera = true;
        vgeneral[id]=bandera;
    }else{
        error(atrib, mens, '<br>El campo esta vacio')
        bandera = false;
        vgeneral[id]=bandera;
    }
    return bandera;
}