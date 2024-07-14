import axiosLib from "axios";

const axios = axiosLib.create({
	baseURL: "http://legolas.tech/api",
	headers: {
		Accept: "application/json",
	},
});

export default axios;
