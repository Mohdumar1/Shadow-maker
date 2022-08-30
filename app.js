
const inputcolor = document.querySelector(".color-picker");
const outputDiv = document.querySelector(".output-div");
const shadowCss = document.querySelector(".shadow-css");
const horizontal = document.querySelector("#horizontal");
const verticaly = document.querySelector("#vartical");
const blur = document.querySelector("#blur");
const spread = document.querySelector("#spread");
const opacity= document.querySelector("#r5");
const shadowcolor = document.querySelector("#color-picker2");
const radio = document.querySelectorAll("radio");
const inset = document.querySelector("#inset");

// box background change 
inputcolor.addEventListener("input", event=>{
    outputDiv.style.background = inputcolor.value;
});

function boxshadow(event){
    let boxshadow = `${horizontal.value}px ${verticaly.value}px ${blur.value}px ${spread.value}px ${shadowcolor.value} ${inset.checked ? "inset" : ""}`;
    outputDiv.style.boxShadow = boxshadow;
    shadowCss.innerHTML = "box-shadow:"+boxshadow;

}
