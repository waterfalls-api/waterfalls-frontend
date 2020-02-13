import axios from "axios";
import auth from "./service";

export default function() {
  const token = auth.getAccessToken();
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
}
