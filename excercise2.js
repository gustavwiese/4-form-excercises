"use strict";

const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const blueColor = document.querySelector("#blue");

window.addEventListener("load", start);

function start() {
  console.log("Hej");
  redColor.addEventListener("change", colorChange);
  greenColor.addEventListener("change", colorChange);
  blueColor.addEventListener("change", colorChange);
}

function colorChange() {
  console.log(`Color value: ${redColor.value}, ${greenColor.value}, ${blueColor.value}`);
  document.querySelector("#red_label").textContent = `R: ${redColor.value}`;
  document.querySelector("#green_label").textContent = `G: ${greenColor.value}`;
  document.querySelector("#blue_label").textContent = `B: ${blueColor.value}`;
  document.querySelector(
    "#rgb_block"
  ).style.backgroundColor = `rgb(${redColor.value}, ${greenColor.value}, ${blueColor.value})`;
}
