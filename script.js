const target = new Date("2026-05-05T16:40:00+07:00").getTime();
const timerEl = document.getElementById("timer");

function updateTimer() {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    timerEl.innerText = "00:00:00";
    return;
  }

  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timerEl.innerText =
    String(h).padStart(2,'0') + ":" +
    String(m).padStart(2,'0') + ":" +
    String(s).padStart(2,'0');

  // 🔥 perubahan warna
  if (diff < 600000) {
    timerEl.classList.add("danger");
  } else if (diff < 3600000) {
    timerEl.classList.add("warning");
  }
}

setInterval(updateTimer, 1000);
updateTimer();

// COPY + TOAST
function copy(text) {
  navigator.clipboard.writeText(text);
  showToast("Disalin!");
}

function showToast(msg) {
  let toast = document.getElementById("toast");

  toast.innerText = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
