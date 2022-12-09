let move = document.getElementById("font-size-control");
let text = document.getElementById("text");
move.addEventListener("input", () => {
  let size = move.value;
  text.style.fontSize = size + "px";
});
