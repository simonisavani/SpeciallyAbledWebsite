const form = document.querySelector('form');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = form.name.value;
	const message = form.message.value;
	const li = document.createElement('li');
	li.textContent = `${name}: ${message}`;
	messages.appendChild(li);
	form.reset();
});
