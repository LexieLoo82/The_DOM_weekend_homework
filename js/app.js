document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-christmas-list');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);
})


const handleFormSubmit = function(event) {
  event.preventDefault();

  const newLineItem = document.createElement('li');
  newLineItem.textContent = `${event.target.person.value}  has been ${event.target.niceness.value}! So Santa will buy a  ${event.target.item.value} from ${event.target.shop.value} !`;
  const inputForm = document.querySelector('#christmas-list');
  inputForm.appendChild(newLineItem)
  document.querySelector('#new-christmas-list').reset()
};

const handleDeleteAllClick = function (event) {
  const christmasList = document.querySelector('#christmas-list');
  christmasList.innerHTML = '';
}





//
//
//
//
// ****DOESNT WORK****
// document.addEventListener('DOMContentLoaded', () => {
//   const newItemform = document.querySelector('#new-christmas-list');
//   newItemform.addEventListener('submit', handleNewItemFormSubmit);
//
//   const deleteAllButton = document.querySelector('#delete-all');
//   deleteAllButton.addEventListener('click', handleDeleteAllClick);
// })
//
// const handleNewItemFormSubmit = function (event) {
//   event.preventDefault();
//
//   const christmasListItem = createChristmasListItem(event.target);
//
//   const christmasList = document.querySelector('#christmas-list');
//   christmasList.appendChild(christmasListItem);
//
//   event.target.reset();
// }
//
// const createChristmasListItem = function (event) {
//
//   const christmasListItem = document.createElement('li');
//   christmasListItem.classList.add('christmas-list-item');
// 
//   const person = document.createElement('h2');
//   person.textContent = form.person.value;
//   christmasListItem.appendChild(person);
//
//   const shop = document.createElement('h3');
//   shop.textContent = form.shop.value;
//   christmasListItem.appendChild(shop);
//
//   const niceness = document.createElement('p');
//   niceness.textContent = form.niceness.value;
//   christmasListItem.appendChild(niceness);
//
//   return christmasListItem;
// }
//
// const handleDeleteAllClick = function (event) {
//   const christmasList = document.querySelector('#christmas-list');
//   christmasList.innerHTML = '';
// }
