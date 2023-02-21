window.addEventListener("load", slikfixVelkommen);

function slikfixVelkommen() {
  console.log("slikfixVelkommen");

  document.querySelector("header").classList.add("hide");
  document.querySelector("#categori_section").classList.add("hide");
  document.querySelector("#products").classList.add("hide");
  // document.querySelector("#readmore").classList.add("hide");
  document.querySelector("footer").classList.add("hide");

  document.querySelector("#welcome_img").classList.add("zoom_out");

  document.querySelector("#welcome_img").addEventListener("animationend", fetchProducts);

  document.querySelector(`[data-category="karamel"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="vingummier"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="surt"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="chokolade"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="lakrids"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="skum"]`).addEventListener("click", fetchCandy);
}

function fetchProducts() {
  document.querySelector("#welcome_img").classList.add("hide");
  document.querySelector("header").classList.remove("hide");
  document.querySelector("footer").classList.remove("hide");
  document.querySelector("#categori_section").classList.remove("hide");
  document.querySelector("#categori_section").classList.add("appear");

  fetch("https://blandselvslik-8d50.restdb.io/rest/blandselvslik", {
    method: "get",
    headers: {
      "x-apikey": "63f4d351478852088da68528",
    },
  })
    .then((e) => e.json())
    .then(showProducts);
}

function showProducts(products) {
  console.log("showProducts");
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("showProduct");
  //fang template
  const template = document.querySelector("#candy_product").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.name;

  copy.querySelector(".more_here").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("#products").appendChild(copy);
  document.querySelector("#products").classList.remove("hide");
  document.querySelector("#products").classList.add("appear");
}

function fetchCandy(evt) {
  console.log(evt.target.dataset.category);

  if (document.querySelector("#products") !== null) {
    document.querySelector("#products").remove();
  } else {
    console.log("hallo");
    document.querySelector("#products2").textContent = "";
  }

  fetch(`https://blandselvslik-8d50.restdb.io/rest/blandselvslik?q={"category":"${evt.target.dataset.category}"}`, {
    method: "get",
    headers: {
      "x-apikey": "63f4d351478852088da68528",
    },
  })
    .then((e) => e.json())
    .then(showGummies);
}

function showGummies(products) {
  console.log("showGummies");
  products.forEach(showGummi);
}

function showGummi(product) {
  console.log("showGummi");
  //fang template
  const template = document.querySelector("#candy_product").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.name;

  copy.querySelector(".more_here").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("#products2").appendChild(copy);

  document.querySelector("#products2").classList.add("appear");

  document.querySelector(`[data-category="karamel"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="vingummier"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="surt"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="chokolade"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="lakrids"]`).addEventListener("click", fetchCandy);
  document.querySelector(`[data-category="skum"]`).addEventListener("click", fetchCandy);
}

//https://blandselvslik-8d50.restdb.io/rest/blandselvslik?h={%22$fields%22:{%22category%22:1}}
