// suaraGenZ — edit nomor WhatsApp dan email redaksi sebelum publikasi.
const CONFIG = {
  whatsappNumber: "6285340219603", // format internasional tanpa + atau spasi
  editorialEmail: "andimassarappi078.com" // ganti dengan email yang aktif
};

const today = document.getElementById("today");
const year = document.getElementById("year");
if (today) today.textContent = new Intl.DateTimeFormat("id-ID", { day:"numeric", month:"long", year:"numeric" }).format(new Date());
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}

const whatsappLink = document.getElementById("whatsappLink");
if (whatsappLink && CONFIG.whatsappNumber) {
  whatsappLink.href = `https://wa.me/${CONFIG.whatsappNumber}`;
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !topic || !message) {
      document.getElementById("formHelp").textContent = "Mohon lengkapi semua kolom terlebih dahulu.";
      return;
    }

    const subject = encodeURIComponent(`[suaraGenZ] ${topic} — ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nTopik: ${topic}\n\nPesan:\n${message}`);
    const mailto = `mailto:${CONFIG.editorialEmail}?subject=${subject}&body=${body}`;

    if (CONFIG.editorialEmail === "redaksi@contoh.com") {
      document.getElementById("formHelp").textContent = "Form siap digunakan, tetapi email redaksi masih contoh. Edit CONFIG.editorialEmail di script.js dengan alamat email aktif sebelum menerima pesan.";
      return;
    }
    window.location.href = mailto;
    document.getElementById("formHelp").textContent = "Aplikasi email kamu akan terbuka untuk mengirim pesan. Pesan belum terkirim sampai kamu menekan tombol Kirim di aplikasi email.";
  });
}
