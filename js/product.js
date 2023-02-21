const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://blandselvslik-8d50.restdb.io/rest/blandselvslik?q={"id":` + id + `}`, {
  method: "get",
  headers: {
    "x-apikey": "63f4d351478852088da68528",
  },
})
  .then((e) => e.json())
  .then(showProducts);

function showProducts(products) {
  console.log("showProducts");
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("showProduct");
  //fang template
  const templateContent = document.querySelector("#candy_content").content;
  //lav en kopi
  const clone = templateContent.cloneNode(true);
  //ændre indhold
  clone.querySelector("h2").textContent = product.name;
  clone.querySelector("h3").textContent = product.brandname;
  clone.querySelector(".content").textContent = product.content;
  clone.querySelector(".energy").textContent = product.energy;
  clone.querySelector(".fat").textContent = product.fat + " g.";
  clone.querySelector(".saturated").textContent = product.saturatedFat + " g.";
  clone.querySelector(".carbohydrate").textContent = product.carbohydrate + " g.";
  clone.querySelector(".sugars").textContent = product.sugars + " g.";
  clone.querySelector(".protein").textContent = product.protein + " g.";
  clone.querySelector(".salt").textContent = product.salt + " g.";

  //appende
  document.querySelector("#readmore").appendChild(clone);

  document.querySelector("#readmore").classList.add("appear");
}
