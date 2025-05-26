const resultEl = document.getElementById("result");
const btn = document.getElementById("diagnoseBtn");

const breads = [
  {
    name: "さくさくバタークロワッサン",
    message: "気持ちがちょっと軽やかな日。サクッと進めることが、今日はちゃんと進む。"
  },
  {
    name: "ほろほろスコーン",
    message: "心が落ち着きたい日。無理にがんばらず、ちょっと休憩していいって合図かも。"
  },
  {
    name: "ふわカリメロンパン",
    message: "見た目よりずっと繊細な気持ちがある日。やさしさをまとう強さって、案外すごいよね。"
  },
  {
    name: "とろけるクリームパン",
    message: "甘さに包まれたい気分の日。たまには“甘えていい”って思えることが、心を整えてくれる。"
  }
];

btn.addEventListener("click", () => {
  const pick = breads[Math.floor(Math.random() * breads.length)];
  resultEl.innerHTML = `<strong>${pick.name}</strong><p>${pick.message}</p>`;
  resultEl.classList.remove("hidden");
});