const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);
let time = document.getElementById("currenttime");
setInterval(() => {
	let d = new Date();
	time.innerHTML = d.toLocaleTimeString();
}, 1000);

//--------------------------- forms------------
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validation();
});

const setError = (element, message) => {
	const inputcontrol = element.parentElement;
	const display = inputcontrol.querySelector(".error");
	display.innerText = message;
	inputcontrol.classList.add("error");
	inputcontrol.classList.remove("success");
};
const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");

	errorDisplay.innerText = "";
	inputControl.classList.add("success");
	inputControl.classList.remove("error");
};

const validation = () => {
	const usernameValue = username.value.trim();

	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();

	if (usernameValue === "" || usernameValue == null) {
		setError(username, "Username is required");
	} else {
		setSuccess(username);
	}

	if (emailValue === "" || emailValue == null) {
		setError(email, "email is required");
	} else {
		setSuccess(email);
	}

	if (phoneValue.length == 10) {
		setSuccess(phone);
	} else {
		setError(phone, "should contain 10 digits ");
	}

	if (passwordValue === "") {
		setError(password, "Password is required");
	} else if (passwordValue.length < 8) {
		setError(password, "Password must be at least 8 character.");
	} else {
		setSuccess(password);
	}
};
