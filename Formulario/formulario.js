function validacion(){
    var bandera = true;
    var vc = validarCedula();
    var vn = validarNA(document.getElementById('name'), 'mnombre');
    var va = validarNA(document.getElementById('lastname'), 'mapellido')

    if(vc==false || vn==false || va==false){
        bandera = false;
    }

    return bandera;
}

//LIMITACION CARACTERES
function noLetras(cedula){
    if(cedula.value.length >0){
        var valorCed = cedula.value.charCodeAt(cedula.value.length-1);

        if(valorCed >= 48 && valorCed <= 57){
            return true;
        }else{
            cedula.value = cedula.value.substring(0, cedula.value.length-1);
            return false;
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


//FORMATO ERROR
function error(inp, spa, men){
    document.getElementById(spa).innerHTML = men;
    inp.style.border = '2px red solid';
    inp.className = 'error';
}


//VALIDACION CEDULA
function validarCedula (){
    var bandera = true;
    var ced = document.getElementById("dni");
    //console.log(ced.length)
    if(ced.value.length!==10 && ced.type == 'text'){
        error(ced, 'mcedula', '<br>Datos invalidos')
        bandera = false;
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
        }

    }
    /*
    if(bandera == true){
        alert('Cedula ingresada correctamente');
    }*/

    return bandera;
}


//VALIDACION NOMBRES Y APELLIDOS
function validarNA(atri, men){
    var bandera = true;
    if(atri.value!==''){
        var partes = atri.value.split(" ");
        //console.log(partes)
        if(partes.length !== 2 || partes[0]=='' || partes[1]==''){
            error(atri, men, '<br>Los datos ingresados no son aceptados')
            bandera = false;
        }
    }else{
        error(atri, men, '<br>Los datos ingresados no son aceptados')
        bandera = false;
    }
    /*
    if(bandera == true){
        alert('Nombres ingresados correctamente');
    }*/
    return bandera;
}


//VALIDACION 
function validarTelefono(telef){
    if(telef.value.length > 0){
        if(telef.value.length > 10){
            telef.value = telef.value.substring(0, telef.value.length-1);
            return false;
        }else{
            var numa = telef.value.charCodeAt(telef.value.length-1);
            if(numa>=48 && numa<=57){
                return true;
            }else{
                telef.value = telef.value.substring(0, telef.value.length-1);
                return false;
            }
        }
        
    }else{
        return true;
    }
}

