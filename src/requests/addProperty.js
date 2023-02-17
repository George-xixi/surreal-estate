import axios from "axios";

const addProperty = (fields) => {
  try {
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((res) => {
        console.log(res.config.data);
      });
  } catch (e) {
    console.log(e, "error");
  }
};

export default addProperty;
