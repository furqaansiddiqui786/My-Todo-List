$(function(){
    $(".blink").typed({
        strings:["Enter your To-Do", "Deisgned by Furqaan Siddiqui", "My ToDo List"],
        typeSpeed: 0
    });
});

var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

removeAll.onclick = function(){
    list.innerHTML = ""
}

add.onclick = function(){
    addlist(list);
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
}

function addlist(targetUl){
    var inputText = document.getElementById('userInput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');

    if(inputText != ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times;';
        removeButton.setAttribute('onclick', 'removeMe(this)');

        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li)
    }else{
        alert('please enter a todo')
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}