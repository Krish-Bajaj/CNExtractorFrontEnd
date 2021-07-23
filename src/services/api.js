const axios = require('axios')
const base_url = 'http://127.0.0.1:5000/'
// const base_url = "https://random-data-api.com/api/"

export const getReq = async endpoint => {
	const url = base_url + endpoint
	try {
		const response = await axios.get(url)
		return response
	} catch (error) {
		console.log(error)
	}
}

export const postReq = async (endpoint, data) => {
	const url = base_url + endpoint
	try {
		const response = await axios.post(url, data)
		return response
	} catch (error) {
		return error
	}
}
