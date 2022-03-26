import mongoose from "mongoose";
import moment from 'moment'

const AccountSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  yearLvl: {
    type: String
  },
  division: {
    type: String
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: moment(new Date())
  }

})


const Account = mongoose.model(`tbl_accounts`, AccountSchema)

export default Account

