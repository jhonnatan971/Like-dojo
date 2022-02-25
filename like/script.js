var likes = [9, 12, 9]
var spans = [
    document.querySelector("#caja-1"),
    document.querySelector("#caja-2"),
    document.querySelector("#caja-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}   