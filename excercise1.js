"use strict";

const postAPI = "https://api.dataforsyningen.dk/postnumre";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript Kører!");

  document.querySelector("form").addEventListener("submit", submitting);
  document.querySelector("#postal_number").addEventListener("change", postalInput);
}

function submitting(event) {
  console.log(event);
  event.preventDefault();
  buildObject(event);
}
function buildObject(event) {
  const elements = document.querySelector("#form").elements;
  const data = {
    navn: elements.name.value,
    gade: elements.street.value,
    postnummer: elements.postal_number.value,
    by: elements.city.value,
    co: elements.co.value,
    telefon: elements.telephone.value,
    email: elements.email.value,
  };
  console.log(event);
}

async function postalInput(event) {
  const postalNumber = document.querySelector("#postal_number").value;
  console.log(`post input: ${postalNumber}`);
  if (postalNumber.length == 4) {
    const rawData = await fetch(postAPI + "/" + postalNumber, {
      method: "GET",
    });
    const data = await rawData.json();
    console.log(event);
    document.querySelector("#city").value = `${data.navn}`;
  }
}
