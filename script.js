let tRows = document.getElementsByTagName('tr');
let tbody = document.getElementsByTagName('tbody')[0];

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', addRow);
function addRow(){
  let newTr = document.createElement('tr');
  for(let i = 1; i <= 3; i++  ){
    let newTd = document.createElement('td');
    newTd.innerHTML = `Texte ${i}`;
    newTr.appendChild(newTd);
  }
  tbody.appendChild(newTr);
}


let delBtn = document.getElementById('del');
delBtn.addEventListener('click', delRow);
function delRow(){
  tbody.removeChild(tbody.lastChild);
}


let moreBtn = document.getElementById('more');
let lessBtn = document.getElementById('less');
moreBtn.addEventListener('click', function(){changeSize(2);});
lessBtn.addEventListener('click', function(){changeSize(-2);});
function changeSize(param){
  let currFontsize = (tbody.style.fontSize === '') ?  15 : parseInt(tbody.style.fontSize);
  tbody.style.fontSize = (currFontsize + param) + 'px';
}
