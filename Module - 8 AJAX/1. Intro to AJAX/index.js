var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');

var currentInputValue = '';
inputBox.addEventListener('input', function(e){
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addListItem();
    }
});

function createNewNode() {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}

function addListItem() {
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = createNewNode();
    
        list.appendChild(newListElement);
        console.log(list.childElementCount);
    
        inputBox.value = ''
        currentInputValue = ''
    } else {
        alert('Please enter a valid TODO item')
    }
}

btnAdd.addEventListener('click', createTODOItemAtBackend);

btnUpdate.addEventListener('click', function() {
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

function createTODODynamically(id, title) {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(title)
    newListElement.appendChild(textNode);
    newListElement.id = id;

    return newListElement;
}

function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                var response = JSON.parse(this.responseText);
                for(var i=0; i<response.length; i++) {
                    list.appendChild(createTODODynamically(response[i].id, response[i].title));
                }
            } else {
                console.log('Call Failed')
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}

getTODOListFromBackend()

function createTODOItemAtBackend() {
    var http = new XMLHttpRequest();
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                var response = JSON.parse(this.responseText);
                list.appendChild(createTODODynamically(response.id, currentInputValue));
                console.log('Add Item to the List')
            } else {
                console.log('Call Failed')
            }
        }
    }
    var obj = JSON.stringify({
        "userId": 1,
        "title": currentInputValue,
        "completed": false
    });
    http.send(obj);
}