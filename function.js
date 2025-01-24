
// const contentCelda = document.getElementById('celda1');



// function cambiar () {
//     if(contentCelda.innerHTML=="X"){
//         contentCelda.innerHTML="O";
//     }else{
//         contentCelda.innerHTML="X"
//     }
   
// }

// document.getElementById("celda1").onclick=function(){
//     cambiar();
// }

const cells = document.querySelectorAll('.celda');

cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      handleClick(event.target);
    });
  });

  function handleClick(clickedCell) {
    // Check if the cell is already filled
    if (clickedCell.innerHTML === 'X') {
      clickedCell.innerHTML = 'O'; // Change the text inside the clicked cell
    } else {
      clickedCell.innerHTML = 'X';;
    }
  }