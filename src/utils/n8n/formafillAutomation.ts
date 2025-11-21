import axios from "axios";

export async function userFormAutomation (url: string, data: any) {
    try {
        await axios.post(url, data);
    } catch (error) {
        throw error;
    }
}