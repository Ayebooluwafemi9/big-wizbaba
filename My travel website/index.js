var options = {
    strings: ["France","Spain","Germany","Nigeria","Ghana","London"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: false
};

var typed = new
Typed(".change-content", options);

// Select all the star icons 
const stars =
document.querySelectorAll('.card-rating .bi-star');

//ALL click event to each star 
stars.forEach((star, index) => {
    star.addEventListener('click', () =>
    {
        setRating(index + 1);
    });
});
function setRating(rating) {
    stars.forEach((star, index) => {
        star.classList.remove('bi-star-fill');
            star.classList.add('bi-star');

        if (index < rating) {
            star.classList.add("bi-star-fill");

            star.classList.remove("bi-star");
        }
    });
}
    