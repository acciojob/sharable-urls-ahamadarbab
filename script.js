// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlHeading = document.getElementById("url");

button.addEventListener("click", () => {
	const name = nameInput.value.trim();
	const year = yearInput.value.trim();

	let params = [];

	if(name) {
		params.push(`name=${encodeURIComponent(name)}`);
	}

	if(year) {
		params.push(`year=${encodeURIComponent(year)}`);
	}

	let url = "https://localhost:8080/";

	if(params.length > 0) {
		url += "?" + params.join("&");
	}

	urlHeading.textContent = url;
})