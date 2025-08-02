const form = document.querySelector('#message-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const messageContainer = document.querySelector('#message-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	sendMessage();
});

function sendMessage() {
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	// Create new message element
	const messageElement = document.createElement('div');
	messageElement.classList.add('message');
	messageElement.innerHTML = `
		<h3>${name} (${email})</h3>
		<p>${message}</p>
	`;

	// Append message element to container
	messageContainer.appendChild(messageElement);

	// Clear form inputs
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';

	alert('Message sent successfully!');
}
