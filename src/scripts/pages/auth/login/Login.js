export default class Login {
  async render() {
    return `
      <section id="login-section">
        <h2>Login</h2>
        <form id="login-form" autocomplete="on">
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required autocomplete="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required autocomplete="current-password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div id="login-message" role="alert" style="color:red;"></div>
      </section>
    `;
  }

  afterRender() {
    const form = document.getElementById('login-form');
    const message = document.getElementById('login-message');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      message.textContent = '';
      const email = form.email.value;
      const password = form.password.value;
      try {
        // Login ke API Dicoding
        const response = await fetch('https://story-api.dicoding.dev/v1/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok && data.loginResult && data.loginResult.token) {
          localStorage.setItem('token', data.loginResult.token);
          message.style.color = 'green';
          message.textContent = 'Login berhasil!';
        } else {
          message.textContent = data.message || 'Login gagal.';
        }
      } catch (err) {
        message.textContent = 'Terjadi kesalahan. Coba lagi.';
      }
    });
  }
};
