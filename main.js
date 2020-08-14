var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");

btn.addEventListener("click", function() {
  var s = editorContent.innerHTML;
  content.style.display = "block";
  content.textContent = s;
});

getText.addEventListener("click", function() {
  const old = editorContent.textContent;
  content.style.display = "block";
  content.textContent = old;
});



