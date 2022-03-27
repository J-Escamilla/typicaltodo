const userInput = document.querySelector('#todo')
const button = document.querySelector('.add')
const toDo = document.querySelector('.todo-list')


button.addEventListener('click', addItem)
// toDo.addEventListener('click', deleteItem)



function addItem(e) {
  e.preventDefault()
  
  //create new div + li
  const newDiv = document.createElement('div')
  const newToDo = document.createElement('li')
  const trash = document.createElement('button')
  trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
  
  //add class to new item
  newToDo.classList.add('card')
  toDo.classList.add('newItem')

  //append to page
  newToDo.innerText = userInput.value
  newDiv.appendChild(newToDo)
  newToDo.appendChild(trash)
  trash.classList.add('trashClass')
  

  toDo.appendChild(newDiv)

  //reset input
  userInput.value = ''
  
  //create event for trash button
  trash.addEventListener('click', deleteItem)
}

function deleteItem(e) {
  const item = e.target
  const toDoItem = item.parentElement
  toDoItem.remove()

//delete item
}
