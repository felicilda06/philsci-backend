import mongoose from "mongoose";

const DateSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  exclusiveDates: [{
    type: String,
    required: true
  }]
})

const Dates = mongoose.model(`tbl_dates`, DateSchema)

export default Dates