const shopContent = document.getElementById("shopContent");

const cart = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.productName}</h3>
      <p class="price">${product.price} $</p>
    `;
  shopContent.append(content);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Buy";

  content.append(buyButton);

  buyButton.addEventListener("click", () => {
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quanty++;
          displayCartCounter();
        }
      });
    } else {
      cart.push({
        id: product.id,
        img: product.img,
        productName: product.productName,
        price: product.price,
        quanty: product.quanty,
      });
      displayCartCounter();
    }
  });
});
