function modifyContent() {
	const paragraph = document.querySelector('p');
	paragraph.textContent = "Test";
}

window.onload = modifyContent;
