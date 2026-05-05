// PIN AUTO INPUT
function setupPin(id, btn) {
  const inputs = document.querySelectorAll(`#${id} input`);

  inputs.forEach((input, i) => {
    input.addEventListener("input", () => {
      if (input.value && i < inputs.length - 1) {
        inputs[i + 1].focus();
      }
      check(inputs, btn);
    });

    input.addEventListener("keydown", e => {
      if (e.key === "Backspace" && !input.value && i > 0) {
        inputs[i - 1].focus();
      }
    });
  });
}

function check(inputs, btn) {
  btn.disabled = [...inputs].some(i => i.value === "");
}

// SCREEN PINDAH
function nextScreen(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
}

// NOMOR HP VALIDASI
const phone = document.getElementById("phone");
const btnNext = document.getElementById("btnNext");

phone.addEventListener("input", () => {
  let val = phone.value.replace(/[^0-9]/g, "");

  if (!val.startsWith("62")) val = "62" + val;

  phone.value = "+" + val;

  btnNext.disabled = val.length < 10;
});

btnNext.onclick = () => nextScreen(3);

// SETUP PIN
const btnPin = document.getElementById("btnPin");
setupPin("pin", btnPin);

// PIN CLICK → OTP
btnPin.onclick = () => {
  document.getElementById("popup").classList.add("active");
};

// OTP SETUP
setupPin("otp", { disabled: false });

// TIMER
let time = 60;
setInterval(() => {
  if (time > 0) {
    time--;
    document.getElementById("timer").innerText = `Kirim ulang (${time}s)`;
  }
}, 1000);
