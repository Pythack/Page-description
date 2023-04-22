if (typeof browser === "undefined") {
  var browser = chrome;
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => { // Listen for messages
  switch (message.request) {
      case "get-description":
          const descriptionmeta = document.querySelector("meta[name='description']");
          if (descriptionmeta != null) {
            const description = descriptionmeta.content;
            sendResponse(description);
          } else {
            sendResponse(null);
          }
          break;
      default:
          break;
  }
});
