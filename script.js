
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');

setInterval(() => {
  activate_lights();
}, 9000);

function activate_lights() {
  setTimeout(() => {
    g1.classList.add('green');
    r2.classList.add('red');
    r3.classList.add('red');
    o2.classList.remove('green');
  }, 1000);
  
  setTimeout(() => {
    g1.classList.remove('green');
    o1.classList.add('orange');
    r3.classList.remove('red');
    o3.classList.add('orange');
    g2.classList.add('green');
    o2.classList.remove('orange');
    r2.classList.remove('red');
  },3000);
  
  setTimeout(() => {
    r1.classList.add('red');
    g3.classList.add('green');
    o3.classList.remove('orange');
    o1.classList.remove('orange');
    g1.classList.remove('green');
    o2.classList.add('orange');
    g2.classList.remove('green');
  }, 6000);
  
  setTimeout(() => {
    g1.classList.add('green');
    r1.classList.remove('red');
    o1.classList.remove('orange');
    g3.classList.remove('green');
    r3.classList.add('red');
    r2.classList.add('red');
    o2.classList.remove('orange');

  }, 9000);
}
