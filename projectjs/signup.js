const form = document.getElementById('signupForm');
const username = document.getElementById('su-username');
const password = document.getElementById('su-password');
const errorDiv = document.getElementById('su-error');

function setCookie(name, value, days) {
	const d = new Date();
	d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
	const expires = "expires=" + d.toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
	const cname = name + "=";
	const decoded = decodeURIComponent(document.cookie);
	const parts = decoded.split(';');
	for (let p of parts) {
		p = p.trim();
		if (p.indexOf(cname) === 0) return p.substring(cname.length);
	}
	return null;
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const userVal = username.value.trim();
	const passVal = password.value;

	if (userVal.length <= 3) {
		errorDiv.textContent = 'Username must be longer than 3 characters.';
		return;
	}

	if (!/^[A-Za-z]+$/.test(userVal)) {
		errorDiv.textContent = 'Username must contain only letters.';
		return;
	}

	if (passVal.length < 6) {
		errorDiv.textContent = 'Password must be at least 6 characters long.';
		return;
	}

	if (!/[A-Z]/.test(passVal)) {
		errorDiv.textContent = 'Password must contain at least one uppercase letter.';
		return;
	}

	if (!/[0-9]/.test(passVal)) {
		errorDiv.textContent = 'Password must contain at least one number.';
		return;
	}

	if (!/[!@#$%^&*(),.?":{}|<>]/.test(passVal)) {
		errorDiv.textContent = 'Password must contain at least one special character.';
		return;
	}

	// store credentials in cookies (demo). In production, never store plain passwords in cookies.
	setCookie('username', userVal, 7);
	// after signup, go to home page
	window.location.href = 'login.html';
});
