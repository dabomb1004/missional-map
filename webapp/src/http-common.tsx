import axios from "axios";

export default axios.create({
    //http://api.joshuaproject.net/[api_version_number]/[resource_path].[format]?api_key=[your_api_key]&[other_parameters]
    baseURL: "http://api.joshuaproject.net/v1/",
    headers: {
        "Content-type": "application/json"
    }
})