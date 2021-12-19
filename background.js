let tpll = [];
let isListening = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ tpll });
  chrome.storage.sync.set({ isListening });
});
