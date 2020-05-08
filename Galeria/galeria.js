function generarImagenes(){
    var listaIng = [
        "images/i0.jpg", "images/i1.jpg", "images/i2.jpg", "images/i3.jpg", "images/i4.jpg", "images/i5.jpg", "images/i6.jpg", "images/i7.jpg", "images/i8.jpg", "images/i9.jpg"
    ];
    var num = Math.round(Math.random()*9);
    //console.log(num);
    document.getElementById("im1").src = listaIng[num];
}