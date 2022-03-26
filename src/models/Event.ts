import mongoose from "mongoose";
import moment from "moment";

const EventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model(`tbl_accounts`, EventSchema);

export default Event;
