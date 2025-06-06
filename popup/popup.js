document.addEventListener("DOMContentLoaded", () => {
  const blocker = document.getElementById("blocker");
  let note = document.getElementById("note");

  chrome.storage.sync.get("blockReels", (data) => {
    blocker.checked = data.blockReels === true;
    note.textContent = blocker.checked ? "great! reels is now blocked" : "reels blocker is turned off";
  });

  blocker.addEventListener("change", () => {
    chrome.storage.sync.set({ blockReels: blocker.checked });
    note.textContent = blocker.checked ? "great! reels is now blocked" : "reels blocker is turned off";
  });
});
