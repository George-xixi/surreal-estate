import axios from "axios";

const addProperty = (fields, setAlert) => {
  try {
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((res) => {
        console.log(res.config.data);
        setAlert({
          message: "Property added successfully",
          isSuccess: true,
        });
      });
  } catch (e) {
    console.log(e, "error");
    setAlert({
      message: "Server error. Please try again later.",
      isSuccess: false,
    });
  }
};

export default addProperty;
