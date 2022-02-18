

window.addEventListener("load", function() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(function(response) {
                response.json().then(function(json) {
                    let container = document.getElementById("container");
                    console.log(json)
                    for (let i=0; i < 200; i++) {
                    container.innerHTML += `
                    <div class = "todos">
                        <p>${json[i].title}</p>
                    </div>`;
                    }
                });
         });    
});

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    body: JSON.stringify({
        userId: 201,
        title: "wash dishes",
        completed: false
    }),
    headers: {
        "Content-type": "applications/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos/103', {
    method: 'DELETE'
})
.then(response => response.json())
.then(json => console.log(json))