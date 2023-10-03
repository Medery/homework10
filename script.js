const checkbox = document.querySelector(".discount-checkbox");
const input = document.getElementById("discount-input");

function setBgColor(color) {
    input.style.backgroundColor = color;
}

setBgColor("#EEEEEE");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        input.removeAttribute("disabled");
        setBgColor("#F4F2FF");
    } else {
        input.setAttribute("disabled", "true");
        setBgColor("#EEEEEE");
    }
});
