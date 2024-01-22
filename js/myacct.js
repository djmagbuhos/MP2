//-------------------------------
///ADDING ADDRESS
async function putData(data, address) {
  let req = await fetch(data, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(address),
  });
  let res = await req.json();
  console.log(res);

  getData("https://mp2-express-pebt.onrender.com/api/address");
}

///GETTING ADDRESS
async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let address = JSON.parse(my_text);

  $("#tbody_address").empty();

  for (let i = 0; i < address.length; i++) {
    let modalId = "edit_modal_" + i; // Unique modal ID
    let modalTarget = "#" + modalId; // Unique modal target

    let modal =
      '<div class="modal fade edit-modal" id="' +
      modalId +
      '" tabindex="-1"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><button class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><div class="row text-center"><div class="col-lg-3"></div><div class="col-lg-6"><h1 class="display-5 my-3">Edit Address</h1><form id="edit_address_' +
      [i] +
      '"><label class="form-label" for="r_region">Region</label><select class="form-select form-control"><option selected>Metro Manila</option></select><label class="form-label" for="r_city">City</label><select class="form-select form-control" id="r_city"><option value="' +
      address[i].city +
      '" selected>' +
      address[i].city +
      '</option><option disabled>----------------</option><option value="Caloocan City">Caloocan</option><option value="Makati City">Makati</option><option value="Mandaluyong City">Mandaluyong</option><option value="Manila City">Manila</option><option value="Marikina City">Marikina</option><option value="Muntinlupa City">Muntinlupa</option><option value="Paranaque City">Paranaque</option><option value="Pasay City">Pasay</option><option value="Pasig City">Pasig</option><option value="Quezon City">Quezon City</option><option value="Taguig City">Taguig</option><option value="Valenzuela City">Valenzuela</option></select><label class="form-label" for="re_barangay">Barangay</label><input type="text" id="re_barangay" class="form-control" placeholder="' +
      address[i].barangay +
      '"/><label class="form-label" for="re_street">Street Name, Bldg/House No.</label><input type="text" id="re_street" class="form-control" placeholder="' +
      address[i].street +
      '"/><label class="form-label" for="re_name">Recipient Name</label><input type="text" id="re_name" class="form-control" placeholder="' +
      address[i].rec_name +
      '"/><label class="form-label" for="re_number">Mobile Number</label><div class="input-group mb-4"><span class="input-group-text">+63</span><input type="text" id="re_number" class="form-control" minlength="10" maxlength="10" placeholder="' +
      address[i].rec_mnumber +
      '"/></div><input type="submit" class="btn btn-success"/></form></div></div></div></div></div></div>';

    let add_address =
      "<tr><td>" +
      address[i].street +
      " " +
      address[i].barangay +
      " " +
      address[i].city +
      " Metro Manila</td><td>" +
      address[i].rec_name +
      "</td><td>+63" +
      address[i].rec_mnumber +
      "</td><td class='text-center'><button id='btedit' class='btn btn-warning py-1' data-bs-toggle='modal' data-bs-target='#edit_modal_" +
      i +
      "'>Edit</button> || <button id='btdel_address_" +
      address[i].address_id +
      "' class='btn btn-danger py-1'>Delete</button></td>";

    $("#tbody_address").append(add_address);
    $("body").append(modal);
  }
}

getData("https://mp2-express-pebt.onrender.com/api/address");

//ADDING ADDRESS UPON SUBMIT
$(document).ready(function (x) {
  $("#add_address").submit(function (x) {
    let address_data = {
      city: $("#r_city").val(),
      barangay: $("#r_barangay").val(),
      street: $("#r_street").val(),
      rec_name: $("#r_name").val(),
      rec_mnumber: $("#r_number").val(),
    };
    x.preventDefault();

    putData("https://mp2-express-pebt.onrender.com/api/address", address_data);
    getData("https://mp2-express-pebt.onrender.com/api/address");
  });
});
///END OF ADDING ADDRESS
//-------------------------
//----------------------------
//DELETING ADDRESS
$(document).ready(function () {
  $(document).on("click", "button.btn-danger", function () {
    let addressId = $(this).attr("id").split("_")[2];
    console.log("Deleting address with ID:", addressId);
    deleteAddress(
      "https://mp2-express-pebt.onrender.com/api/address/" + addressId
    );
  });
});

async function deleteAddress(data) {
  try {
    let req = await fetch(data, {
      method: "DELETE",
    });
    let res = await req.json();
    console.log("Delete response:", res);

    getData("https://mp2-express-pebt.onrender.com/api/address");
  } catch (error) {
    console.error("Error deleting address:", error);
  }
}
// END OF DELETING ADDRESS
//---------------------------
//---------------------------
$(document).ready(function () {
  $(document).on("submit", "form[id^='edit_address_']", function (event) {
    event.preventDefault();
    let formId = $(this).attr("id");
    let addressIndex = formId.split("_")[2];
    let editedAddress = {
      city: $("#r_city", this).val(),
      barangay: $("#re_barangay", this).val(),
      street: $("#re_street", this).val(),
      rec_name: $("#re_name", this).val(),
      rec_mnumber: $("#re_number", this).val(),
    };
    editAddress(
      "https://mp2-express-pebt.onrender.com/api/address/" + addressIndex,
      editedAddress
    );
  });
});

async function editAddress(data, editedAddress) {
  try {
    let req = await fetch(data, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAddress),
    });
    let res = await req.json();
    console.log("Edit response:", res);
    getData("https://mp2-express-pebt.onrender.com/api/address");
    $(`.edit-modal`).modal("hide");
  } catch (error) {
    console.error("Error editing address:", error);
  }
}
