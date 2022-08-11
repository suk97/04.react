import axios from "axios";

// fetch()
export const fetchData = async() => {
    const response = await fetch('https://lecture-shin.github.io/data/data.json');
    return response;
}
// axios()
export const axiosData = async() => {
    const response = await axios.get('https://lecture-shin.github.io/data/data.json');
    return response;
}