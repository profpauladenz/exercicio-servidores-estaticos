let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assíncrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let lista = "<ol>";
        for (const user of data) {
            let item = `<li>Title: ${user.title}</li>`;
            lista += item;
        }
        div.innerHTML = lista + "</ol>";
    })
});