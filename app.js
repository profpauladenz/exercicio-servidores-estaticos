let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assíncrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        div.textContent = json;
        // div.textContent = JSON.stringify(json, null, 2); // JSON Puro
        // div.textContent = json.title;
    })
});