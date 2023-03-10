
function saveTolocalStorage(event){
   event.preventDefault();
   const name = event.target.name.value;
   const email = event.target.email.value;
   const phonenumber = event.target.phonenumber.value;

   const obj = {
      name,
      email, 
      phonenumber
   }
   localStorage.setItem(obj.email, JSON.stringify(obj));
   showUserOnScreen(obj);
}
function showUserOnScreen(obj){
   const parentElement = document.getElementById('listOfitems');
   const childElement = document.createElement('li');
   childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber 
   parentElement.appendChild(childElement);
}