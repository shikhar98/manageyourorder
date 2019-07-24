const mongoose = require("mongoose");


const billingaddressSchema = mongoose.Schema({
    first_name: String,
        address1: String,
        phone: Number,
        city: String,
        zip: String,
        province: String,
        country: String,
        last_name: String,
        address2: String,
        company: String,
        latitude: String,
        longitude: String,
        name: String,
        country_code: String,
        province_code: String
})
const OrderSchema = mongoose.Schema({
  
    user: {
           type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    _id                     : mongoose.Schema.Types.ObjectId,
    order_number: Number,
    contact_email: String,
    order_status_url: String,
    line_items: Array,
    billing_address: {
        first_name: String,
        address1: String,
        phone: Number,
        city: String,
        zip: String,
        province: String,
        country: String,
        last_name: String,
        address2: String,
        company: String,
        latitude: String,
        longitude: String,
        name: String,
        country_code: String,
        province_code: String
      },
      shipping_address: {
        "first_name": "Steve",
        "address1": "123 Shipping Street",
        "phone": "555-555-SHIP",
        "city": "Shippington",
        "zip": "40003",
        "province": "Kentucky",
        "country": "United States",
        "last_name": "Shipper",
        "address2": null,
        "company": "Shipping Company",
        "latitude": null,
        "longitude": null,
        "name": "Steve Shipper",
        "country_code": "US",
        "province_code": "KY"
      },
});

module.exports = mongoose.model('Orders',OrderSchema);
