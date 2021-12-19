function scrapeTpll() {
  setTimeout(() => {
    const actionMenu = document.querySelector("#action-menu");
    // Check if actionMenu tag exists
    if (actionMenu) {
      // Retrieve tag holding tpll data
      const tpllData = actionMenu.firstChild.firstChild;
      // When tag is clicked, copy the tpll data and append to array
      tpllData.onclick = function () {
        console.log(tpllData.lastChild.firstChild.textContent);
        chrome.storage.sync.get("tpll", ({ tpll }) => {
          tpll.push(tpllData.lastChild.firstChild.textContent);
          chrome.storage.sync.set({ tpll });
        });
      };
    }
  }, 250);
}
