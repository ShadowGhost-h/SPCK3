const searchtool= document.getElementById('search');
const url = `https://spotify23.p.rapidapi.com/search/?q=${searchtool.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ff04a2c23mshcef18fb576c8237p1dc70djsne8abfc37c6fb',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}