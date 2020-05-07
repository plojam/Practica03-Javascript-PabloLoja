function valor(x){
    document.getElementById("total").value += x;
}

function reset(){
    document.getElementById("total").value = "";
}

function igual(){
    document.getElementById("total").value = eval(document.getElementById("total").value);
}