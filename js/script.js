document.getElementById("add-btn").addEventListener("click",()=>{
    const inputValue=document.getElementById("todoinput").value;
    document.getElementById("todoinput").value="";
    let todoList=document.querySelector("#todolist");
    let listItem=document.createElement("li");
     listItem.innerHTML=`${inputValue} <i class="fa-solid fa-xmark"></i>`;
     todoList.appendChild(listItem);
   
  let xmark= document.querySelectorAll(".fa-xmark");
      xmark.forEach(element => {
        element.addEventListener("click",()=>{
            listItem.remove();
        })
      });
   
})


