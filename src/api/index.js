import axios from "axios";

const url = "https://dev.dashmed.in/sample-data";

export const fetchData = () => axios.get(url);
