import {axiosClient} from "../../../api/axios.js";
import axios from "axios";

const getAllTournament = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/tournaments');
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
}

export default {
    getAllTournament
}