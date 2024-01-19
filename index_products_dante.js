const ex = require("express");
const ad = require("./address.js");
const cors = require("cors");

const app = ex();
const a = ad.address;

app.use(ex.json());
app.use(cors());

//get
app.get("/api/address", (req, res) => {
  res.send(a);
});

app.get("/api/address/:id", (req, res) => {
  let address = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].address_id == Number(req.params.id)) {
      address = a[i];
      break;
    }
  }

  if (address) {
    res.send(address);
    console.log(address);
  } else {
    let err = "Address not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});

// no need to filter address - save only incase needed to use
// app.get("/api/pets/list/species", (req, res) => {
//   let species = [];
//   for (let i = 0; i < p.length; i++) {
//     if (species.includes(p[i].species) == false) {
//       species.push(p[i].species);
//     }
//   }

//   res.send(species);
// }); ////
//
//
// NEW ADDRESS
app.put("/api/address", (req, res) => {
  let new_address = {
    address_id: a.length,
    city: req.body.city,
    barangay: req.body.barangay,
    street: req.body.street,
    rec_name: req.body.rec_name,
    rec_mnumber: req.body.rec_mnumber,
  };

  console.log(new_address);
  a.push(new_address);
  res.send(new_address);
});

app.put("/api/address/:id", (req, res) => {
  let address = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].address_id == Number(req.params.id)) {
      address = a[i];
      break;
    }
  }

  if (address) {
    if (req.body.city) {
      address.city = req.body.city;
    }
    if (req.body.barangay) {
      address.barangay = req.body.barangay;
    }
    if (req.body.street) {
      address.street = req.body.street;
    }
    if (req.body.rec_name) {
      address.rec_name = req.body.rec_name;
    }
    if (req.body.rec_mnumber) {
      address.rec_mnumber = req.body.rec_mnumber;
    }
    console.log(address);
    res.send(address);
  } else {
    let err = "Address not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

app.delete("/api/address/:id", (req, res) => {
  let address = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].address_id == Number(req.params.id)) {
      address = a[i];
      break;
    }
  }

  if (address) {
    let index = a.indexOf(address);
    console.log(address);
    // a[index] = {};
    a.splice(index, 1);
    console.log("Deleted address_id: " + address.address_id);
    res.send(address);
  } else {
    let err = "Address not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

let port = 3001;
app.listen(port);
console.log("Starting server at port " + port + "...");
