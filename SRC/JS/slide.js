
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

function showSlide(n) {
    index = n;

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index > slides.length - 1) {
        index = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

prev.addEventListener("click", function () {
    showSlide(index - 1);
});

next.addEventListener("click", function () {
    showSlide(index + 1);
});

dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
        showSlide(i);
    });
});
setInterval(function () {
    showSlide(index + 1);
}, 10000);

