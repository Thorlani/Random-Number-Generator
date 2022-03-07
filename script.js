const display = document.getElementById("display")
const click = document.getElementById("click")
const restart = document.getElementById("restart")


display.textContent = 0
click.textContent = "Randomize"
restart.textContent = "Restart"

click.addEventListener("click", function() {
    display.textContent = Math.floor(Math.random() * 1001)
})

restart.addEventListener("click", function() {
    display.textContent = 0
})