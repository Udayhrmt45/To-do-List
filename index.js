var item = document.querySelector("#item")
var todobox = document.querySelector("#to-do-box")

item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = "";
    };
});

const addToDo = function(item){
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");//selects and unselects
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    todobox.appendChild(listItem)//adds new list
}
