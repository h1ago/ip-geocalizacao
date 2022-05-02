import axios from "axios";

export async function getIpAdressTracker(){
    const url = 'http://ip-api.com/json/170.84.225.164';
    return await axios.get(url)
}