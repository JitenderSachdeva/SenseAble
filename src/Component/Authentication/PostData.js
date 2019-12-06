export function PostData( userData) {
	//let BaseURL = 'http://localhost:8182/drum/login/';
	return new Promise((resolve, reject) => {
		fetch('http://localhost:8182/drum/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		}
		)
		.then((response) => response.json())
		.then((res) => {
			resolve(res);
		})
		.catch((error) => {
			reject(error);
		});
		console.log(userData);
	});
}