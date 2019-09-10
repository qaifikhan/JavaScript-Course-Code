$(document).ready(function () {
    var list = $('#todo-list');
    var inputBox = $('#todo-input');
    var btnUpdate = document.getElementById('update-item');
    var todoCount = document.getElementById('todo-count');

    var currentInputValue = '';
    inputBox.on({
        'input': function (e) {
            currentInputValue = e.target.value;
        },
        'keyup': function (e) {
            if (e.keyCode === 13) {
                createTODOItemAtBackend();
            }
        }
    })

    $('#add-item').click(createTODOItemAtBackend);

    btnUpdate.addEventListener('click', function () {
        var firstElement = list.firstElementChild;
        var newListElement = createTODODynamically(firstElement.id, currentInputValue);

        list.replaceChild(newListElement, firstElement);
        clearInputData();
    });

    function clearInputData() {
        inputBox.val('');
        currentInputValue = '';
    }

    function createTODODynamically(id, title) {
        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(title)
        newListElement.append(textNode);
        newListElement.id = id;
        newListElement.className = 'list-item'

        return newListElement;
    }

    function getTODOListFromBackend() {
        $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
            var response = data;
            for (var i = 0; i < response.length; i++) {
                list.append(createTODODynamically(response[i].id, response[i].title));
                todoCount.innerHTML = response.length;
            }
        })
        // var http = new XMLHttpRequest();
        // http.onreadystatechange = function () {
        //     if (this.readyState === 4) {
        //         if (this.status === 200) {
        //             var response = JSON.parse(this.responseText);
        //             for (var i = 0; i < response.length; i++) {
        //                 list.append(createTODODynamically(response[i].id, response[i].title));
        //                 todoCount.innerHTML = response.length;
        //             }
        //         } else {
        //             console.log('Call Failed')
        //         }
        //     }
        // }
        // http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        // http.send();
    }

    getTODOListFromBackend()

    function createTODOItemAtBackend() {
        // var http = new XMLHttpRequest();
        // http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
        // http.onreadystatechange = function () {
        //     if (this.readyState === 4) {
        //         if (this.status === 201) {
        //             var response = JSON.parse(this.responseText);
        //             list.append(createTODODynamically(response.id, currentInputValue));

        //             todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
        //             clearInputData();
        //         } else {
        //             console.log('Call Failed')
        //         }
        //     }
        // }
        // 
        // http.send(obj);

        var obj = {
                "userId": 1,
                "title": currentInputValue,
                "completed": false
            };

        $.post('https://jsonplaceholder.typicode.com/todos', obj, function(data, status) {
            var response = data;
            list.append(createTODODynamically(response.id, currentInputValue));

            todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
            clearInputData();
        })
    }
})