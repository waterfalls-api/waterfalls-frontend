import axios from "axios";
import auth from "./service";

export default function() {
  // const token = "faskldfasdfaskdlf3kllkasdjf-asdfj";
  const token = localStorage.getItem("token");
  console.log("Token", token);
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
}
