async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let product = JSON.parse(my_text);

  function generateProductCard(product) {
    const productCard =
      '<div class="col-lg-3 my-2"><div class="card card-products h-100"><a href="product_site/games_' +
      product.item_id +
      '.html"><img src="' +
      product.image_card +
      '" class="img-fluid card-img-top card_img_prod" alt="' +
      product.item_name +
      '"/></a><div class="card-body"><hr /><a class="card_name" href="product_site/games_' +
      product.item_id +
      '.html"><h4 class="card_name" title="' +
      product.item_name +
      '">' +
      product.item_name +
      '</h4></a><p class="card_price fs-5">₱' +
      product.price +
      '</p><div><button class="btn add_cart_bt text-light w-100" id="add_cart' +
      product.item_id +
      '">Add to cart</button></div></div></div></div>';

    $("#games_display").append(productCard);

    $("#add_cart" + product.item_id).click(function () {
      let item_data = {
        item_name: product.item_name,
        price: product.price,
        image_card: product.image_card,
      };

      putData("http://localhost:3001/api/cart", item_data);
    });
  }

  function displayProducts(filteredProducts) {
    $("#games_display").empty();
    filteredProducts.forEach((item) => {
      generateProductCard(item);
    });
  }

  $("#gcategories-dropdown").change(function () {
    const selectedCategory = $(this).val();
    if (selectedCategory == "all") {
      displayProducts(product);
    } else {
      const filteredProducts = product.filter(
        (item) => item.genre == selectedCategory
      );
      displayProducts(filteredProducts);
    }
  });

  displayProducts(product);
}

async function putData(data, cart) {
  let req = await fetch(data, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });
  let res = await req.json();
  console.log(res);
}

getData("http://localhost:3001/api/games");
