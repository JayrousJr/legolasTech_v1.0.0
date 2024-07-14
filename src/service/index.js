import axios from "../utils/axios";

export async function handleSubmitMEssage(formData) {
	const { data } = await axios.post("/send", formData);
	return data;
}
