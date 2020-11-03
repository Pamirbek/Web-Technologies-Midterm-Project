window.addEventListener("scroll", function() {
    const distance = window.scrollY;

    if (window.scrollY < 500) {
        document.querySelector("h1").style.transform = `translateY(${distance * 0.3}px)`;
        document.querySelector(".first_block p").style.transform = `translateY(${distance * 0.4}px)`;
    }

    console.log(window.scrollY);

    if (window.scrollY > 200) {
        document.getElementById("nav").style.top = "0px";
    } else {
        document.getElementById("nav").style.top = "-45px";
    }
});