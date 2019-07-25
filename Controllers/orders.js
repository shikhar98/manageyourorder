const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    id:Number,
    email:String,
    gateway:String,
    total_price:String,
    subtotal_price:String,
    total_tax:String,
    contact_email: String,
    order_status_url: String,
    line_items: [{
        id:Number,
        varient_id:Number,
        title:String,
        quantity:Number,
        vendor:String,
        name:String,
        price:String,
        product_id:Number
    }],
    billing_address: {
        first_name: String,
        address1: String,
        phone: String,
        city: String,
        zip: String,
        province: String,
        country: String,
        last_name: String,
        name: String,
        country_code: String,
        province_code: String
      },
      customer:{
          id:Number,
          email:String,
          created_at:String,
          updated_at:String,
          first_name:String,
          last_name:String,
          phone:String
      }
});

module.exports = mongoose.model('order',OrderSchema);
