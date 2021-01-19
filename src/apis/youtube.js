import axios from "axios";

const KEY = "AIzaSyAH6iea3VaXXncyCgB2KF1JkbnaONH8YDM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
