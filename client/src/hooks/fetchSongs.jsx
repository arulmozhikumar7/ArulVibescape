import axios from "axios";
export const useFetchSongs = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/songs");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
