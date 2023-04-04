const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".sub");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelector(".nav-link").forEach(n =>
     n.addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

var counter = 1;
                setInterval(function () {
                    document.getElementById('radio' + counter).checked = true;
                    counter++;
                    if (counter > 4) {
                        counter = 1;
                    }
}, 5000);







                