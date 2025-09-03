document.addEventListener("DOMContentLoaded", () => {
  const blocker = document.getElementById("blocker");
  let note = document.getElementById("note");

  chrome.storage.sync.get("blockReels", (data) => {
    blocker.checked = data.blockReels === true;
  });

  blocker.addEventListener("change", () => {
    chrome.storage.sync.set({ blockReels: blocker.checked });
  });
});
