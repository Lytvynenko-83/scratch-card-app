function openAuthModal() {
    document.getElementById("authModal").style.display = "block";
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function login() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login === "admin" && password === "!Admin2707") {
        alert("Успішний вхід в адмінку!");
        window.location.href = "edit_cards.html";
    } else {
        alert("Невірний логін або пароль!");
    }
}

function register() {
    let name = document.getElementById("reg-name").value;
    let surname = document.getElementById("reg-surname").value;
    let phone = document.getElementById("reg-phone").value;
    let email = document.getElementById("reg-email").value;

    if (name && surname && phone && email) {
        alert("Реєстрація успішна!");
        closeAuthModal();
    } else {
        alert("Будь ласка, заповніть усі поля!");
    }
}
