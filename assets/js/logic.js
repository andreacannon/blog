let currentTheme = localStorage.getItem('theme') || 'light-mode'
let theme = document.body

function setTheme(){
  theme.classList.add(currentTheme)
}

function switchTheme(){

    if (currentTheme === 'light-mode'){
      theme.classList.add("dark-mode");
      theme.classList.remove("light-mode")
      currentTheme='dark-mode'
    }
    else {
      theme.classList.add("light-mode");
      theme.classList.remove('dark-mode')
      currentTheme='light-mode'
    }
    
    writeToLocalStorage()
    return (currentTheme)
}

setTheme()

function writeToLocalStorage(){
  localStorage.setItem("theme", currentTheme)
}