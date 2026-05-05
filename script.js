const timerEl = document.getElementById("timer");

// TIMER
const target = new Date("2026-05-05T16:40:00+07:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    timerEl.innerText = "00:00:00";
    return;
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  timerEl.innerText =
    String(h).padStart(2,'0') + ":" +
    String(m).padStart(2,'0') + ":" +
    String(s).padStart(2,'0');
}

setInterval(updateTimer, 1000);
updateTimer();

// UPLOAD
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");
const text = document.getElementById("uploadText");

if (upload) {
  upload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      preview.style.display = "block";
      preview.src = URL.createObjectURL(file);
      text.innerText = "✔ Bukti berhasil dipilih";
    }
  });
}

// COPY
function copy(text) {
  navigator.clipboard.writeText(text);
}
