const resultEl = document.getElementById("result");
const btn = document.getElementById("diagnoseBtn");

const breads = [
  {
    name: "さくさくバタークロワッサン",
    message: "朝にひとつあるだけで、なんだか今日はうまくいきそう。さくっと気持ちに火をつけてくれるパン"
  },
  {
    name: "ほろほろスコーン",
    message: "心をそっとゆるめる一服パン。静かな時間に、あたたかい飲み物と一緒にどうぞ。"
  },
  {
    name: "ふわカリメロンパン",
    message: "外はカリっと、中はふんわり。ギャップが魅力なあなたにちょうどいいパンです。"
  },
  {
    name: "とろけるクリームパン",
    message: "甘さがやさしく満たしてくれる、癒し系パン。ほっとしたいときのおともにどうぞ。"
  }
];

btn.addEventListener("click", () => {
  const pick = breads[Math.floor(Math.random() * breads.length)];
  resultEl.innerHTML = `<strong>${pick.name}</strong><p>${pick.message}</p>`;
  resultEl.classList.remove("hidden");
});