function createItemList (task){
  let listItem = document.createElement('li')
  let checkbox = document.createElement('input')
  let p = document.createElement('p')
  let taskText = document.createTextNode(`${task}`)
  
  p.appendChild(taskText)
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('onchange', 'handleCheck()')
  listItem.appendChild(checkbox)
  listItem.appendChild(p)

  return listItem
}


function handleSubmit (e){
  e.preventDefault()

  let taskWrapper = document.getElementById('task')
  let task = taskWrapper.value;

  if (task){


  let taskItem = createItemList(task)
  let taskList = document.getElementById('list')

  taskList.appendChild(taskItem)
  taskWrapper.value = ''
  } else {
    alert('Insira uma tarefa')
    return
  } 
}

function handleCheck (){
  let itemList = document.getElementById('list')
  let listItems = itemList.children
  
  for(const item of listItems){
    var checkbox = item.firstElementChild
    
    if (checkbox.checked){
      item.classList.add('checked')
    } else {
      item.classList.remove('checked')
    }
  }
}

var form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)
