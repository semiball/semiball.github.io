function addheader() {
	const header = document.querySelectorAll("header");
	const logo = document.createElement("a");
		logo.classList.add("logo");
		logo.href = "/";
	const logotext1 = document.createElement("h1");
		logotext1.textContent = "Semib";
	const logoimage = document.createElement("img");
		logoimage.classList.add("logo");
		logoimage.alt = "logo that looks like a discoball";
		logoimage.src = "/2024/content/brand/logo.svg";
	const logotext2 = document.createElement("h1");
		logotext2.textContent = "ll";
	const navigation = document.createElement("nav");
	const navigationlink1 = document.createElement("a");
		navigationlink1.classList.add("button");
		navigationlink1.href = "/thema";
		navigationlink1.textContent = "Thema";
	const navigationlink2 = document.createElement("a");
		navigationlink2.classList.add("button");
		navigationlink2.href = "/info";
		navigationlink2.textContent = "Info";
	const navigationlink3 = document.createElement("a");
		navigationlink3.classList.add("button");
		navigationlink3.href = "/kurs";
		navigationlink3.textContent = "Kurs";
	const navigationlink4 = document.createElement("a");
		navigationlink4.classList.add("button");
		navigationlink4.href = "/kontakt";
		navigationlink4.textContent = "Kontakt";
	
		logo.appendChild(logotext1);
		logo.appendChild(logoimage);
		logo.appendChild(logotext2);
		nav.appendChild(navigationlink1);
		nav.appendChild(navigationlink2);
		nav.appendChild(navigationlink3);
		nav.appendChild(navigationlink4);
		header.appendChild(logo);
		header.appendChild(navigation);
}

document.addEventListener("DOMContentLoaded", addheader);
