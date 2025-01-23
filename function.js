
const contentCelda = document.getElementById('celda1');



function cambiar () {
    if(contentCelda.innerHTML=="X"){
        contentCelda.innerHTML="O";
    }else{
        contentCelda.innerHTML="X"
    }
   
}

document.getElementById("celda1").onclick=function(){
    cambiar();
}