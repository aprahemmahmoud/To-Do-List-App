let input = document.querySelector("input[type='text']")
let btn = document.querySelector("input[type='button']")
let main = document.querySelector("main")
let ul = document.createElement("ul")
let deleteAll = document.createElement("button")
deleteAll.className = "deleteAll"
deleteAll.textContent ="Delete All"
main.append(ul)



//Create
btn.addEventListener("click",function(){
  createElements()
  input.value = ""
})


//return the data from localStorage
if(localStorage.dataItem !== ""){
  ul.innerHTML = localStorage.getItem("dataItem")
  ul.append(deleteAll)
}


function createElements(){
  if(input.value !== ""){
  ul.append(deleteAll)
  //createElement
    let li = document.createElement("li")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let span = document.createElement("span")
    let p = document.createElement("p")
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")

    //setAttribute
    span.setAttribute("class","check-box")
    button1.setAttribute("class","update")
    button2.setAttribute("class","delete")
    div2.setAttribute("class","btns")

    // set value
    p.textContent = input.value
    button1.textContent = "edit"
    button2.innerHTML = `<i class="fa-solid fa-trash"></i>`
    //append
    div1.append(span,p)
    div2.append(button1,button2)
    li.append(div1,div2)
    ul.append(li)
    
    //update data
      localStorage.setItem("dataItem",ul.innerHTML)
  }
}


//check and delete item
ul.addEventListener('click',function(e){
  if(e.target.classList.contains("check-box")){
    e.target.classList.toggle("active")
    e.target.nextElementSibling.classList.toggle("active")
    localStorage.setItem("dataItem",ul.innerHTML)
  }else if(e.target.tagName === "P"){
    e.target.classList.toggle("active")
    e.target.previousElementSibling.classList.toggle("active")
    localStorage.setItem("dataItem",ul.innerHTML)
  }
  //update item
  if(e.target.classList.contains("update")){
    input.value = e.target.parentElement.parentElement.firstElementChild.textContent
    e.target.parentElement.parentElement.remove()
    localStorage.setItem("dataItem",ul.innerHTML)
  }
//delete item
if(e.target.classList.contains("delete")){
    e.target.parentElement.parentElement.remove()
    //update data
    localStorage.setItem("dataItem",ul.innerHTML)
  }else if(e.target.classList.contains("fa-trash")){
    e.target.parentElement.parentElement.parentElement.remove()
    //update data
    localStorage.setItem("dataItem",ul.innerHTML)
  }
})

//delete all items
deleteAll.addEventListener('click',function(e){
    localStorage.setItem("dataItem","")
    ul.innerHTML = ""
})


  
