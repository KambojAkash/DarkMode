let input = document.querySelector("input");
let btn = document.querySelector(".toggle-switch");
let slider = document.querySelector("i");
let color = "light";


btn.addEventListener("click", () => {



    if (input.checked) {
        document.body.classList.remove("light");
        slider.classList.add("fa-moon")
        color = changeColor("dark");

        document.body.classList.add(color);



    } else {
        document.body.classList.remove("dark");
        slider.classList.remove("fa-moon")
        color = changeColor("light");
        document.body.classList.add(color);

    }



});

function changeColor(c) {
    localStorage.setItem("mode", c)
    color = localStorage.getItem("mode");
    return color;
    // console.log(color)


}

if (localStorage.getItem("mode") === "dark") {
    slider.classList.add("fa-moon")

    document.body.classList.add("dark");

    input.checked = true;
}