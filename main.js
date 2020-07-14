let span = document.querySelector("span");
let body = document.querySelector("body");

// For the color picker;

const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("input", ()=>{

    // setting background color what user selected;
    document.body.style.backgroundColor = colorPicker.value;

    // updating span text;
    span.innerText = colorPicker.value;
})



// for the random hex code generation;

// setting the initial value, what has been set
body.style.backgroundColor = span.innerText;


function generate() {

    let randomColor = "";

    // characters used in hex codes;
    let chars = "0123456789abcdef";

    for(i = 0; i < 6; i++)
    {
        randomColor += chars[Math.floor(Math.random() * 16)];
    }

    span.innerText = "#" + randomColor;

    // setting background color what was randomly generated;
    body.style.backgroundColor = span.innerText;

    // updating color picker value;
    colorPicker.value = span.innerText;
}