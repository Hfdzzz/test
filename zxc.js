document.addEventListener('DOMContentLoaded', function () {
    const myAccountDiv = document.getElementById('my_account');
    const overlay = document.getElementById('overlay');
    const loginBox = document.getElementById('login-box');
    const loginButton = document.getElementById('login-button');

    myAccountDiv.addEventListener('click', function () {
      overlay.style.display = 'flex';
    });

    document.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    });

    loginButton.addEventListener('click', function () {
      // Lakukan aksi login di sini (misalnya, validasi dan penanganan formulir)
      const username = document.getElementById('username').value;
      myAccountDiv.innerText = username;
      overlay.style.display = 'none';
      console.log('Script loaded!');

    });
  });