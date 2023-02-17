window.addEventListener("load", slikfixVelkommen);

function slikfixVelkommen() {
  console.log("slikfixVelkommen");

  // document.querySelector("header").classList.add("hide");
  document.querySelector("#categori_section").classList.add("hide");
  document.querySelector("#products").classList.add("hide");
  document.querySelector("#readmore").classList.add("hide");

  document.querySelector("#welcome_img").classList.add("zoom_out");

  document.querySelector("#welcome_img").addEventListener("animationend", produktSiden);
}

function produktSiden() {
  console.log("produktSiden");
  document.querySelector("#welcome_img").classList.add("hide");
}

//https://blandselvslik-8d50.restdb.io/rest/blandselvslik?h={%22$fields%22:{%22category%22:1}}
