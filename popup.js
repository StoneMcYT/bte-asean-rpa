let bteTpll = document.getElementById("bteTpll");

bteTpll.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get("isListening", ({ isListening }) => {
    chrome.storage.sync.get("color", ({ color }) => {
      bteTpll.style.background = color;
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: extractTpll,
      args: [isListening],
    });
  });
});

function extractTpll(bool) {
  // Add event listener to check for action menu when right clicking

  if (!bool) {
    console.log("START");
    window.addEventListener("contextmenu", scrapeTpll, true);

    chrome.storage.sync.set({ isListening: true });
    chrome.storage.sync.set({ color: "green" });
  }
  // Remove event listener to prevent multiple listeners
  else {
    console.log("STOP");

    window.removeEventListener("contextmenu", scrapeTpll, true);

    chrome.storage.sync.get("tpll", ({ tpll }) => {
      uri =
        "data:application/octet-stream," + encodeURIComponent(tpll.join('" '));

      const link = document.createElement("a");

      const d = new Date(),
        dformat =
          [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
          "-" +
          [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

      link.download = dformat + ".txt";
      link.href = uri;
      link.click();

      chrome.storage.sync.set({ tpll: [] });

    });

    chrome.storage.sync.set({ isListening: false });
    chrome.storage.sync.set({ color: "red" });
  }
}
