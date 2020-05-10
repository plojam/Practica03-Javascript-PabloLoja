var s=false;
function valor(x){
    if(s==true && x>=0 && x<=9){
        document.getElementById("total").value = x;
    }else{
        document.getElementById("total").value += x;
    }
    s=false;
}

function reset(){
    document.getElementById("total").value = "";
}

function igual(){
    document.getElementById("total").value = eval(document.getElementById("total").value);
    s=true;
}