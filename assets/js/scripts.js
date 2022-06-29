const h1 = document.getElementById('page-title');
const button = document.getElementsByTagName('button')[0];
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

function toggleScheme() {
	button.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
	body.classList.toggle('dark-mode');
	
	if (body.classList.contains('dark-mode')) {
		h1.textContent = "Dark Mode ON";
		button.textContent = 'Light Mode';
	} else {
		h1.textContent = "Light Mode ON";
		button.textContent = 'Dark Mode';
	}
}

button.addEventListener('click', toggleScheme);