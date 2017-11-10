
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==
document.getElementById("add").addEventListener("click", function(event){
    var newItem = document.createElement("li");
    var textnode = document.createTextNode(document.getElementById("input-form").value);
        newItem.appendChild(textnode);
    document.getElementById("list-item").appendChild(newItem);


})