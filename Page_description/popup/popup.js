if (typeof browser === "undefined") {
    var browser = chrome;
}


document.addEventListener("DOMContentLoaded", event => {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {
        const activeTab = tabs[0];
        const activeTabId = activeTab.id;
        
        const askfordesc = browser.tabs.sendMessage(activeTabId, {request:"get-description"});
        const theSpan = document.createElement("span");
        askfordesc.then(async (response) => {
            if (response != null) {
                theSpan.innerText = response;
                theSpan.style.color = "hsl(219, 50%, 50%)";
            } else {
                theSpan.innerText = browser.i18n.getMessage("noDesc");
                theSpan.style.color = "hsl(0, 50%, 50%)";
            }
        }, error => {
            theSpan.innerText = browser.i18n.getMessage("noResponse");
            theSpan.style.color = "hsl(0, 50%, 50%)";
        });
        document.querySelector("#descdiv").appendChild(theSpan);
    });
    browser.storage.local.get().then(storage => {
        const spanel = document.querySelector("#descdiv span");
        spanel.style.fontSize = storage.fontsize + storage.fontunit;
    });

});
