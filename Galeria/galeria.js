var listaIng = [
    "images/i0.jpg", "images/i1.jpg", "images/i2.jpg", "images/i3.jpg", "images/i4.jpg", "images/i5.jpg", "images/i6.jpg", "images/i7.jpg", "images/i8.jpg", "images/i9.jpg"
];
var posicion=0;
var imgs= [-1];
function generarImagenes(){
    imgs= [-1];
    var i=0;
    var ran;
    var sen;
    do{
        ran = Math.round(Math.random()*9);
        for(var j=0; j<imgs.length; j++){
            if(imgs[j]==ran){
                sen = false;
                j = imgs.length;
            }else{
                sen = true;
            }
        }
        if(sen==true){
            imgs[i] = ran;
            i++;
        }
    }       while(i<5);
    for(i=0; i<5; i++){
        imgs[i]=listaIng[imgs[i]];
    }
    //console.log(imgs)
    //var num = Math.round(Math.random()*9);
    ///console.log(num);
    posicion=0;
    document.getElementById("anterior").disabled = true;
    document.getElementById("siguiente").disabled = false;
    document.getElementById("i1").src = imgs[0];
}

function bloSu(){
    //console.log(posicion)
    if(posicion>2){
        document.getElementById("siguiente").disabled = true;
    }else{
        document.getElementById("anterior").disabled = false;
    }
}
function bloIn(){
    //console.log(posicion)
    if(posicion<2){
        document.getElementById("anterior").disabled = true;
    }else{
        document.getElementById("siguiente").disabled = false;
    }
}

function siguiente(){
    console.log(imgs[posicion])
    posicion++;
    var as;
    var pleft;
    if(posicion%2==0){
        document.getElementById('i1').src = imgs[posicion];
        as =document.getElementById('a1');
        console.log(as)
        pleft = parseInt(as.style.left);

        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";


    }else{
        document.getElementById('i2').src = imgs[posicion];
        as = document.getElementById('a2');
        console.log(as)
        pleft = parseInt(as.style.left);

        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";
        pleft = pleft-5;
        as.style.left = pleft + "px";
    }
}

function anterior(){
    console.log(imgs[posicion])
    posicion--;
    if(posicion%2==0){
        document.getElementById('i1').src = imgs[posicion];
        //document.getElementById('a1');

    }else{
        //document.getElementById('a2');
        document.getElementById('i2').src = imgs[posicion];
    }
}