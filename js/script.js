const hamburgerToggler = document.querySelector(".hamburger")

const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () =>{
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries =>
{
if(entries[0].contentRect.width <= 842) {
    navLinksContainer.style.transition = "transform 0.3s ease-out"
} else {
    navLinksContainer.style.transition = "none"
}
}).observe(document.body)

const modalContainer = document.querySelector(".modal-container");
const modalTriggers =document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal() {
modalContainer.classList.toggle("active")
}