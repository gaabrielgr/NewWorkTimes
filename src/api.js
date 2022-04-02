import axios from "axios";
export default axios.create({
  baseURL:
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LK7ZHPbBRzDb2WvGKTWDDOJmkjKppZ80",
});
