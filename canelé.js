
var id = document.getElementById("vari");
let x = 0;
var idd = document.getElementById("varia");
let n_furnace = 1;
function add() {
  x = x + n_furnace;
  id.innerHTML = x;
 
  if (x >= 25) {
     document.getElementById("four").removeAttribute('disabled');
  } else {
     document.getElementById("four").disabled = true;
  }
};
function addd() {
  x -= 25;
  n_furnace++;
  id.innerHTML = x;
  idd.innerHTML = n_furnace;     
  if (x >= 25) {
     document.getElementById("four").removeAttribute('disabled');
  } else {
     document.getElementById("four").disabled = true;
  }
};


