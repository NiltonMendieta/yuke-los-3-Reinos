// Animaciones de aparición (scroll)
const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
});

sections.forEach(sec => observer.observe(sec));

const video = document.getElementById("bg-video");
const btnSound = document.getElementById("btn-sound");

btnSound.addEventListener("click", () => {
    video.muted = false;
    video.play();
    btnSound.style.display = "none"; // Oculta el botón después
});

const cursor = document.querySelector(".cursor-magic");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});