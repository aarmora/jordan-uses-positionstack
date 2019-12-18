import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// https://positionstack.com/documentation
(async () => {
	forward();


})();


async function forward() {
	const baseUrl = `http://api.positionstack.com/v1`;
	const query = 'Rua 9 A 199';

	// const axiosResponse = await axios.get(`${baseUrl}/forward?access_key=${process.env.apiKey}&query=${query}&limit=1`);

	// console.log("axiosResponse.data", axiosResponse.data);


	// const axiosResponse = await axios.get(`${baseUrl}/forward?access_key=${process.env.apiKey}&query=${query}&limit=1&timezone_module=1`);

	// console.log("axiosResponse.data", axiosResponse.data, axiosResponse.data.data[0].timezone_module);

	// const axiosResponse = await axios.get(`${baseUrl}/forward?access_key=${process.env.apiKey}&query=${query}&limit=1&sun_module=1`);

	// console.log("axiosResponse.data", axiosResponse.data, new Date(axiosResponse.data.data[0].sun_module.rise.time * 1000));

	const axiosResponse = await axios.get(`${baseUrl}/forward?access_key=${process.env.apiKey}&query=${query}&limit=1&country_module=1`);

	console.log("axiosResponse.data", axiosResponse.data, axiosResponse.data.data[0].country_module);

}