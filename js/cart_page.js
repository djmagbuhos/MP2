// cart_page.js

async function getAddressData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let address = JSON.parse(my_text);

  for (let i = 0; i < address.length; i++) {
    let add_address =
      "<option value='" +
      address[i].street +
      " " +
      address[i].barangay +
      " " +
      address[i].city +
      "Metro Manila'>" +
      address[i].street +
      " " +
      address[i].barangay +
      " " +
      address[i].city +
      "</option>";

    $("#payment_address").append(add_address);
  }
}

async function getCartData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let cart = JSON.parse(my_text);

  let total_price = 0;

  for (let i = 0; i < cart.length; i++) {
    let add_card =
      '<div class="card mb-3 shadow bg-white rounded"><button class="btn-close custom-align-right"></button>' +
      '<div class="card-body">' +
      '<div class="d-flex justify-content-between">' +
      '<div class="d-flex flex-row align-items-center">' +
      '<div class="border d-none d-lg-block">' +
      '<img src="' +
      cart[i].image_card +
      '" class="img-fluid rounded-3 me-2" alt="' +
      cart[i].item_name +
      '" style="width: 100px" />' +
      "</div>" +
      '<div class="ms-2 fs-5 d-none d-sm-block">' +
      "<strong><p>" +
      cart[i].item_name +
      "</p></strong>" +
      "</div>" +
      '<div class="ms-2 d-block d-sm-none">' +
      "<strong><p>" +
      cart[i].item_name +
      "</p></strong>" +
      "</div>" +
      "</div>" +
      '<div class="d-flex flex-row align-items-center">' +
      "<p class='product_price'>₱" +
      cart[i].price +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    semi_total = Number(cart[i].price);
    total_price += semi_total;

    $("#add_to_cart").append(add_card);
    console.log(total_price);
  }
  $("#sub_total").text(total_price.toFixed(2));
  $("#grand_total").text((total_price + 90).toFixed(2));
}

// Call functions to get data
getAddressData("https://mp2-express-pebt.onrender.com/api/address");
getCartData("https://mp2-express-pebt.onrender.com/api/cart");
