let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assíncrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts/101')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erro");
        }
    })
    .then(function (json) {
        let post = Post.fromRaw(json);
        div = post.renderFrom(div);
    })
    .catch(function (err) {
        console.log(err);
    })
});