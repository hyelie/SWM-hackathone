import axios from 'axios';

const BASE_URL = "https://flask-awesome-game-rhmph.run.goorm.io"


export async function insertUser(name, email, score) {
	try {
		const form = new FormData()
		form.append('name', name)
		form.append('email', email)
		form.append('score', score)
		const result = await axios.post(`${BASE_URL}/insertUser`, form)
		return result
	} catch(err) {
		console.log(err);
	}
}
export async function getScoreList() {
	try {
		const {data} = await axios(`${BASE_URL}/getScoreList`);
		return data
	} catch(err) {
		console.err(err);
	}
}

export async function getQuizList(num) {
	try {
		const {data} = await axios(`${BASE_URL}/getQuizList`, {params: {num:num}});
		return data
	} catch(err) {
		console.log(err);
	}
}

