let input = document.querySelector("input[type='text']")
let btn = document.querySelector("input[type='button']")
let btnDelete = document.getElementById("delete")
let check = document.getElementsByClassName("image")
let result = document.querySelector("ul")
// let valueResult = document.createElement("li")



//create
let dataTasks = []
btn.addEventListener("click",function(){
   //get data 
   let dataObj = {
      task:input.value,
   }
   
   //set in localStorage
   dataTasks.push(dataObj)
   localStorage.tasks = JSON.stringify(dataTasks)

   //use read to renew the data
   read()
})

//Read
result.innerHTML = ""
function read(){
   if(localStorage.tasks != undefined){
      //get from localStorage
      let dataCome = JSON.parse(localStorage.tasks)
      //set data in web page
      for(let i=0;i < dataCome.length;i++){
         result.innerHTML += `<li>
                              <div><div onclick="toggleChecked()" class="image unchecked" ></div><p>${dataCome[i].task}</p></div> 
                              <span id="delete">x</span>
                              </li> `
      }
   }
}
read()

//check
function toggleChecked(){
   this.classList.toggle("checked")
   this.classList.toggle("unchecked")
}

