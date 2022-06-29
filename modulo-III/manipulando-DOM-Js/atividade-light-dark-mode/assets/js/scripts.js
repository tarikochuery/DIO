const button = document.getElementById('mode-selector')

const changeTitleText = () => {
  const title = document.getElementById('page-title')

  title.innerHTML = title.innerHTML === 'Light Mode ON' ? 'Dark Mode ON' : 'Light Mode ON'
}

const changeButtonText = () => {
  button.innerHTML = button.innerHTML === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
}

toggleClassDarkMode = () => {
  const background = document.getElementsByTagName('body')[0]
  const footer = document.getElementsByTagName('footer')[0]
  
  const elements = [button, background, footer]
  
  for (element of elements) {
    element.classList.toggle('dark-mode')
  }
}

const changeMode = () => {
  toggleClassDarkMode()
  changeTitleText()
  changeButtonText()
}

button.addEventListener('click', changeMode)