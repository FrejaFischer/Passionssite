fetch("https://blandselvslik-8d50.restdb.io/rest/blandselvslik", {
  method: "get",
  headers: {
    "x-apikey": "63ecc171478852088da682f2",
  },
})
  .then((e) => e.json())
  .then(showCategories);

// function doSomething(data) {
//   console.log(data);
// }

function showCategories(candies) {
  console.log(candies);
  //looper og kalder showProduct
  candies.forEach(showCategory);
}

function showCategory(candy) {
  console.log("hallo?");
  //fang template
  const template = document.querySelector(".categories").content;
  //lav en kopi
  const clone = template.cloneNode(true);
  //ændre indhold
  clone.querySelector("h2").textContent = candy.category;

  clone.querySelector(".category_link").href = `productlist.html?category=${candy.category}`;

  //appende
  document.querySelector("main").appendChild(clone);
}

//https://blandselvslik-8d50.restdb.io/rest/blandselvslik?h={%22$fields%22:{%22category%22:1}}
