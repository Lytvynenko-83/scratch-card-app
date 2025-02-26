document.getElementById("copy-link").addEventListener("click", function() {
    navigator.clipboard.writeText(window.location.href);
    alert("Посилання скопійовано!");
});
