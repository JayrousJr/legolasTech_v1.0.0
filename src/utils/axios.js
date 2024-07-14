import axiosLib from "axios";

const axios = axiosLib.create({
	baseURL: "https://legolas.tech/api",
	headers: {
		Accept: "application/json",
	},
});

export default axios;
