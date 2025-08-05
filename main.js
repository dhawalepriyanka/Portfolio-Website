
const textArray = ["Full Stack Web Developer", "Frontend Enthusiast", "Creative Coder"];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    const currentText = textArray[typingIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

