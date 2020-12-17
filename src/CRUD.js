import axios from "axios";
import { setImages } from "./components/List";

const restApi = axios.create({
    baseURL: "http://localhost:8081/players",
    responseType: "json",
});

export const fetchData = async () => {
    try {
        let responseData = await restApi.get("/");
        console.log(responseData);
        return setImages(responseData.data);
    } catch {
        console.log("error");
    }
};

export const fetchDataById = async (id) => {
    try {
        let responseForElements = await restApi.get("/" + id);
        console.log(responseForElements);
        return setImages([responseForElements.data]);
    } catch {
        console.log("error");
    }
};

export const patchData = async (element) => {
    console.log("in the process");
    try {
        let responseForElements = await restApi.put("/" + element.id, element);
        console.log(responseForElements);
        console.log("process is stopping");
        return setImages([responseForElements.data]);
    } catch (e) {
        console.log("error");
        console.log(e);
    }
};