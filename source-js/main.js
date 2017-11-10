document.getElementById("add").addEventListener("click", function (event) {

    if (document.getElementById("input-form").value !== "") {
        var newItem_li = document.createElement("li");
        var newItem_p = document.createElement("p");
        var textnode = document.createTextNode(document.getElementById("input-form").value);
        newItem_p.appendChild(textnode);
        newItem_li.appendChild(newItem_p);
        document.getElementById("list-item").appendChild(newItem_li);
    }

})