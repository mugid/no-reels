chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    tab.url.includes("https://www.instagram.com/reels/") &&
    changeInfo.status == "loading"
  ) {
    chrome.storage.sync.get("blockReels", (data) => {
        if (data.blockReels == true) {

        chrome.tabs.update(tabId, {
          url: "https://youtu.be/dQw4w9WgXcQ?si=ZjaxNvFD2F9O6U-2",
        });
      }
    });
  }
});
