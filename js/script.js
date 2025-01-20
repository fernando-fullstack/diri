function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "fernando" && password === "123") {
        window.localStorage.setItem('loggedIn', true); // Simpan status login
        window.location.href = "profile.html"; // Pindah ke halaman data diri
    } else {
        document.getElementById('loginMessage').textContent = "Login gagal! Username atau password salah.";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('profile.html') && !window.localStorage.getItem('loggedIn')) {
        window.location.href = "index.html"; // Kembali ke login jika belum login
    }
});