import http from "./http-common";
import data from "./types/countries";

const get = (id: any) => {
    return http.get<Array<data>>(`/countries/${id}.json?api_key=60dac3ed6d25`);
};

const services = {
    get,
};

export default services;