let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assíncrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let post = new Post(json.userId, json.id, json.title, json.body);
        console.log(post);
        // div.innerText = json.body;
        // div.innerText = JSON.stringify(json, null, 0);
    })
});