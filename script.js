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

// ボタンが押されたときにランダムなURLを新しいタブで開く関数
function openRandomSiteInNewTab() {
  // リストからランダムに1つのURLを選ぶ
  const randomIndex = Math.floor(Math.random() * uselessWebsites.length);
  const randomSite = uselessWebsites[randomIndex];

  // 新しいタブで開く。noopener と noreferrer を付けてセキュリティを強化
  // （クリックイベント由来なので、ポップアップブロッカーに引っかかる可能性は低いです）
  window.open(randomSite, '_blank', 'noopener,noreferrer');
}

// ボタンにイベントリスナーを追加（script は body の最後で読み込まれるため DOM は存在している想定）
const pleaseButton = document.getElementById('pleaseButton');
pleaseButton.addEventListener('click', openRandomSiteInNewTab);
