/* 
  <a href="">Home</a>
  <a href="">Upcoming treks</a>
  <a href="">Treks for family</a>
  <a href="">Contact us</a>
*/

let navItemsHtml = document.querySelector('#navItems');
let navItemsList = [
  {
    pealkiri: 'Pealeht',
    viide: 'index.html'
  },
  {
    pealkiri: 'Tulevad maktad',
    viide: 'treks.html'
  },
  {
    pealkiri: 'Pildid',
    viide: 'family.html'
  },
  {
    pealkiri: 'Kontakt',
    viide: 'contact.html'
  }
];

for (let i = 0; i < navItemsList.length; i++) {
  navItemsHtml.innerHTML += `<a href="${navItemsList[i].viide}">${navItemsList[i].pealkiri}</a>`;
}