function clickFollowButtonsWithoutFollowing(labelText, notFollowingText) {
  function clickNextButton(buttons, index) {
    if (index >= buttons.length) {
      console.log('すべてのボタンをクリックしました。');
      return;
    }

    buttons[index].click();
    console.log(`ボタン ${index + 1} をクリックしました。`);

    // インターバルを設定せず、次のボタンのクリックを予約しません
  }

  const buttons = document.querySelectorAll(`[aria-label*="${labelText}"]:not([aria-label*="${notFollowingText}"])`);
  clickNextButton(buttons, 0);
}

// スクロールごとに実行されるように、MutationObserverを設定します
const observer = new MutationObserver(() => {
  // スクロールされたときに実行される関数を呼び出します
  clickFollowButtonsWithoutFollowing('フォロー', 'フォロー中');
});

// DOMの変更（スクロール）を監視する設定を行います
observer.observe(document.body, { childList: true, subtree: true });
