// サイトのリスト
const uselessWebsites = [
  "https://pointerpointer.com/",
  "https://screamintothevoid.com/",
  "https://cat-bounce.com/",
  "https://www.omfgdogs.com/",
  "https://alwaysjudgeabookbyitscover.com/",
  "http://www.staggeringbeauty.com/",
  "http://www.ismycomputeron.com/",
  "https://lacquerlacquer.com/",
  "https://weirdorconfusing.com/",
  "http://www.republiquedesmangues.fr/",
  "http://www.patience-is-a-virtue.org/",
  "https://www.corgiorgy.com/",
  "http://www.fallingfalling.com/",
  "http://www.koalastothemax.com/",
  "http://www.endless.horse/",
  "http://www.everydayim.com/",
  "https://www.trypap.com/",
  "http://pixelsfighting.com/",
  "http://www.corndog.io/",
  "http://www.partridgegetslucky.com/",
  "https://longdogechallenge.com/",
  "https://onesquareminesweeper.com/",
  "https://checkboxolympics.com/",
  "http://heeeeeeeey.com/",
  "http://thatsthefinger.com/",
  "http://randomcolour.com/",
  "https://binarypiano.com/",
  "http://www.yesnoif.com/",
  "https://potato.io/"
];

//  リストからランダムに1つのURLを選ぶ
const randomIndex = Math.floor(Math.random() * uselessWebsites.length);
const randomSite = uselessWebsites[randomIndex];

// 選んだサイトにリダイレクトする

window.location.href = randomSite;
// window.open(randomSite, "_blank");

