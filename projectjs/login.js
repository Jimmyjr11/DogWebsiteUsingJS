let form = document.getElementById('loginForm');
let username = document.getElementById('username');
let password = document.getElementById('password');
let errorDiv = document.getElementById('error');
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

function deleteCookie(name) {
     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
     const storedUser = getCookie('username');
     const storedPass = getCookie('password');

     if (storedUser === null || storedPass === null) {
          errorDiv.textContent = 'No account found. Please sign up first.';
          window.location.href = 'signup.html';
          return;
     }
     if(storedUser !== userVal || storedPass !== passVal) {
          errorDiv.textContent = 'Invalid username or password.';
          return;
     }
     if (storedUser === userVal && storedPass === passVal) {
          window.location.href = 'home.html';
          return;
     }
});
let signupbtn = document.getElementById('signupbtn');
signupbtn.addEventListener('click', function() {
     window.location.href = 'signup.html';
});