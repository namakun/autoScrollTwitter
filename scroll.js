// スクロールするピクセル数とスクロールの方向を指定します
const scrollDistance = 100; // 1回のスクロールで移動するピクセル数
const scrollInterval = 1000; // スクロールのインターバル（ミリ秒）：1000ミリ秒=1秒
const scrollDirection = 'down'; // 'up'か'down'を指定

let scrolling = false;

function startAutoScroll() {
  if (!scrolling) {
    scrolling = true;
    autoScroll();
  }
}

function stopAutoScroll() {
  scrolling = false;
}

function autoScroll() {
  if (scrolling) {
    if (scrollDirection === 'down') {
      window.scrollBy(0, scrollDistance);
    } else if (scrollDirection === 'up') {
      window.scrollBy(0, -scrollDistance);
    }

    setTimeout(autoScroll, scrollInterval);
  }
}

// 自動スクロールを即時実行
startAutoScroll();

// 開始と停止のためのコマンドを表示
console.log('自動スクロールを開始しました。');
console.log('自動スクロールを停止するには、stopAutoScroll()を実行してください。');
