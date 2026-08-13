// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Portfolio Contact - " + name;

    const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message;

    const mailtoLink =
        "mailto:vs1525771@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;

});


// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Web Developer",
    "Student",
    "HTML & CSS Learner"
];

let index = 0;
let char = 0;

function typingEffect() {

    if (char < text[index].length) {

        document.getElementById("typing").textContent +=
            text[index].charAt(char);

        char++;

        setTimeout(typingEffect, 100);

    } else {

        setTimeout(() => {

            document.getElementById("typing").textContent = "";

            char = 0;

            index = (index + 1) % text.length;

            typingEffect();

        }, 1500);
    }
}

typingEffect();


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "🌞";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
