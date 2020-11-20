function todoList(){


    var item=document.getElementById("todoInput").value;
    
    if(item=="")
        alert("Enter Data to add");

    else{
        var text = document.createTextNode(item);
        var newItem=document.createElement("li");
        newItem.appendChild(text);
        document.getElementById("todoList").appendChild(newItem);
        document.getElementById("todoInput").value="";
        let remove = document.createElement("button");
        remove.setAttribute("id", "cls");
        let close = document.createTextNode("x");
        remove.appendChild(close);
        newItem.appendChild(remove);
        remove.setAttribute("onclick", "this.parentNode.remove();");
    }
    


}