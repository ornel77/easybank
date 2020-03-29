/* ------------------------------ DOM SELECTION ----------------------------- */
const menu = document.querySelector(".menu")
const input = document.getElementById("dropdown")

console.log(input);
input.addEventListener('click', (e) => {
    if (input.checked === true) {
        menu.style.display = "flex"
        document.body.classList.add('active')
    } else {
        menu.style.display = "none"
        document.body.classList.remove('active')
    }
})