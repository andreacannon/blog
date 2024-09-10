let formContent = document.querySelector("#content")

formContent.addEventListener('submit', handleFormSubmit)

let blogArr = JSON.parse(localStorage.getItem("post")) || []

function handleFormSubmit(event){
  event.preventDefault()

  let username = document.querySelector('#username').value
  let title = document.querySelector('#title').value
  let blog = document.querySelector('#blog').value
  let post = {username, title, blog}

  blogArr.push(post)
  localStorage.setItem('post', JSON.stringify(blogArr))

  redirect()
}

function redirect(){
    window.location.href="./blog.html";
}