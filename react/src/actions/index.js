import axios from 'axios';

const BASE_URL = "https://flask-awesome-game-rhmph.run.goorm.io"


export async function insertUser(name, email, score) {
	try {
		await axios({
			method:'post',
			url: `${BASE_URL}/insertUser`,
			data: {
			name: name,
			email: email,
			score: score
		}});
		
	} catch(err) {
		console.err(err);
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
		console.err(err);
	}
}

