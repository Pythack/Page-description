if (typeof browser === "undefined") {
  var browser = chrome;
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {// When a tab is updated

});