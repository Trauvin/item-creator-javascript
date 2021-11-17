const form = document.querySelector('.form');
const gridDiv = document.querySelector('.grid-generated');

function handleChange(event) {
  console.log(event.target.value);
  for(let i = 0; i < event.target.value; i++) {
    const newElement = document.createElement('span');
    newElement.classList.add('item');
    newElement.innerText = document.forms[0].elements[0].value;
    gridDiv.appendChild(newElement);
  }
}

form.addEventListener('change', handleChange);