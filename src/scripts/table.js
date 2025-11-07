const faveMedia = fetch('./faves.json')
for (let i in faveMedia) {
  x += faveMedia[i];
  let table = document.createElement('table');

  let row1 = document.createElement('tr');
  let row2 = document.createElement('tr');
  let row3 = document.createElement('tr');
  
  let imageCell = document.createElement('td', { rowspan:"3"});
  let titleCell = document.createElement('tr');
  let synopsisCell = document.createElement('td');
  let thoughtsCell = document.createElement('td');

  imageCell = faveMedia[i].link;
  titleCell = faveMedia[i].title;
  synopsisCell = faveMedia[i].synopsis;
  thoughtsCell = faveMedia[i].thoughts;

  row1.appendChild(imageCell);
  row1.appendChild(titleCell);
  row2.appendChild(synopsisCell);
  row3.appendChild(thoughtsCell);
  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);

  document.getElementById('body').appendChild(table);
} 
