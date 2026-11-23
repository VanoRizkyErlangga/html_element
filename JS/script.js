// ============================================
// Login Page - Script
// ============================================

// Ambil elemen dari HTML
const gmailInput = document.getElementById("gmail");
const passwordInput = document.getElementById("password");
const loginBtn = document.querySelector(".btn");

// Event ketika tombol Login diklik
loginBtn.addEventListener("click", function () {
  const gmail = gmailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validasi: cek apakah field kosong
  if (gmail === "" || password === "") {
    alert("❌ Gmail dan Password harus diisi!");
    return;
  }

  // Validasi: cek format email
  if (!gmail.includes("@") || !gmail.includes(".")) {
    alert("❌ Format Gmail tidak valid!");
    return;
  }

  // Validasi: cek panjang password minimal 6 karakter
  if (password.length < 6) {
    alert("❌ Password minimal 6 karakter!");
    return;
  }

  // Jika semua validasi lolos
  alert("✅ Login berhasil!\nSelamat datang, " + gmail);
  console.log("Login berhasil dengan Gmail:", gmail);
});
