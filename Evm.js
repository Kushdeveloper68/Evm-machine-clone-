/* element collection
 aak variable me sare party ke vote store ho jaye.
  input jo party ke vote dekhne hai uska name dalte hi aajayage
*/
// collection 
const btnA = document.getElementById('btn-a');
const btnB = document.getElementById('btn-b');
const btnC = document.getElementById('btn-c');
const btnD = document.getElementById('btn-d');
const btnE = document.getElementById('btn-e');
let A = 0;
btnA.addEventListener("click", () => A += 1);
let B = 0;
btnB.addEventListener("click", () => B += 1);
let C = 0;
btnC.addEventListener("click", () => C += 1);
let D = 0;
btnD.addEventListener("click", () => D += 1);
let E = 0;
btnE.addEventListener("click", () => E += 1);
// element Selector
const btn = document.getElementById('number-btn');
const p = document.getElementById('show-para');
const input = document.getElementById('number');
btn.addEventListener("click", () => {
  if(input.value == 'A' || 'B' || 'C' || 'D' || 'E') {
    if(input.value == 'A') {
      p.innerText = A;
    }
    if(input.value == 'B') {
      p.innerText = B;
    }
    if(input.value == 'C') {
      p.innerText = C;
    }
    if(input.value == 'D') {
      p.innerText = D;
    }
    if(input.value == 'E') {
      p.innerText = E;
    }
  } else {
    alert('please enter correct party name');
  }
} )