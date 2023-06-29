import axios from "axios";

export const getNext100Articles = async (payload) => {
  return await axios.post("/infinite-articles", payload);
}