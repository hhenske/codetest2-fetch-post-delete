

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

const deleteData = async ( ) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/103', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
 
   const data = await response.json( ); 
    console.log(data);
 };

 deleteData( );
