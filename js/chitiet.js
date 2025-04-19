
const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
        const newComment = document.createElement("div");
        newComment.className = "comment-box";
        newComment.innerHTML = `<strong>Anonymous:</strong> ${text}`;
        commentsList.prepend(newComment);
        input.value = "";
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const gameId = getQueryParam('id');

if (gameId) {
    fetch('../json/data.json')
    .then(response => response.json())
    .then(data => {
        const game = data.find(item => item.id === gameId);
        if (game) {
            document.getElementById('gameTitle').innerText = game.title;
            document.getElementById('gameDescription').innerText = game.description;
            document.getElementById('gameImage').src = game.image;
            document.getElementById('gameDeveloper').innerText = game.developer;
            document.getElementById('gamePrice').innerText = game.price;

            const tagsContainer = document.getElementById('gameTags');
            game.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.innerText = tag;
                tagsContainer.appendChild(span);
            });
        }
    });
}
