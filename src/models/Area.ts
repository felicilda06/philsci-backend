import mongoose from "mongoose";

const AreaSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
});

const Areas = mongoose.model(`tbl_areas`, AreaSchema);

export default Areas;
