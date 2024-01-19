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
    if (a[i].id == Number(req.params.id)) {
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

// app.put("/api/pets/:id", (req, res) => {
//   let pet = false;
//   for (let i = 0; i < p.length; i++) {
//     if (p[i].id == Number(req.params.id)) {
//       pet = p[i];
//       break;
//     }
//   }

//   if (pet) {
//     if (req.body.species) {
//       pet.species = req.body.species;
//     }
//     if (req.body.eating_habit) {
//       pet.eating_habit = req.body.eating_habit;
//     }
//     if (req.body.pet_name) {
//       pet.pet_name = req.body.pet_name;
//     }
//     console.log(pet);
//     res.send(pet);
//   } else {
//     let err = "Pet not found!";
//     res.status(404);
//     console.log(err);
//     res.send(err);
//   }
// });

// app.delete("/api/pets/:id", (req, res) => {
//   let pet = false;
//   for (let i = 0; i < p.length; i++) {
//     if (p[i].id == Number(req.params.id)) {
//       pet = p[i];
//       break;
//     }
//   }

//   if (pet) {
//     let index = p.indexOf(pet);
//     console.log(pet);
//     p[index] = {};
//     res.send(pet);
//   } else {
//     let err = "Pet not found!";
//     res.status(404);
//     console.log(err);
//     res.send(err);
//   }
// });

let port = 3001;
app.listen(port);
console.log("Starting server at port " + port + "...");
