// const mongoose = require("mongoose");

// const AddressSchema = new mongoose.AddressSchema({
//     fullName: String,
//     streetAddress:String,
//     city: String,
//     state:String,
//     postalCode:String,
//     country: String,
// });

// const Address = mongoose.model('Address',AddressSchema);
// module.exports = Address;


const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  // define your fields here
  street: String,
  city: String,
  zipCode: String,
  country: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
