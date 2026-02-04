let noCount = 0;
let yesScale = 1;

const noTexts = [
  "luhh, bakit ayaw mo??",
  "gago ka ah, ayaw mo ah",
  "naneto, no nang no",
  "luhh, no talaga pinipindot oh",
  "may kabet ka siguro?",
  "tangina mo ah, sige"
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Yay! 💘</h1>
    <p>galing mo ah, samg sa feb 14 ah, isang
    coke lang dapat.
    </p>
    <p>Happy Valentine's Day! 💖</p>
  `;
});

noBtn.addEventListener("click", () => {
  if (noCount < noTexts.length - 1) {
    noCount++;
    noBtn.textContent = noTexts[noCount];
  } else {
    noCount++;
  }

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount >= 6) {
    yesBtn.classList.add("fullscreen-yes");
    yesBtn.textContent = "YES 💖 CLICK ME";
  }
});
