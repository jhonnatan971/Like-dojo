var likes = [3]
var spans = [
    document.querySelector("#post-1")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}   