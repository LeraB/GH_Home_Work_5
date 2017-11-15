var input = document.getElementById("input-form"),
    list = document.getElementById("list_todo"),
    counter = 0;
document.getElementById("add").addEventListener("click", function (event) {

    if (input.value !== "") {
        var newItem_li = document.createElement("li");
        newItem_li.id = "todo";
        var newItem_p = document.createElement("p");
        var textnode = document.createTextNode(input.value);
        newItem_p.appendChild(textnode);
        newItem_li.appendChild(newItem_p);
        list.insertBefore(newItem_li, list.childNodes[0]);
//buttons
        var buttons = document.createElement('div');
        buttons.classList.add('buttons');
        newItem_li.appendChild(buttons);
//complete
        var complete = document.createElement('a');
        complete.classList.add('btn-floating');
        complete.classList.add('btn-small');
        complete.innerHTML = ' <i class="material-icons small ">done</i>';
        complete.classList.add('complete');
        buttons.appendChild(complete);
        complete.addEventListener('click', function () {
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var id = parent.id;
            var target = (id === 'todo') ? list : document.getElementById('list_complete');
            parent.removeChild(item)
            target.insertBefore(item, target.childNodes[0])
        });
        //remove
        var remove = document.createElement('a');
        remove.classList.add('remove');
        remove.classList.add('btn-floating');
        remove.classList.add('btn-small');
        remove.innerHTML = ' <i class="material-icons small ">clear</i>';
        buttons.appendChild(remove);
        remove.addEventListener('click', function () {

            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            parent.removeChild(item);
        });
        input.value = '';
    }

})

