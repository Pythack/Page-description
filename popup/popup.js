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
                theSpan.innerText = "No description on this page";
                theSpan.style.color = "hsl(0, 50%, 50%)";
            }
        }, error => {
            theSpan.innerText = "Page did not respond; try refreshing it. You might also be on a restricted URL.";
            theSpan.style.color = "hsl(0, 50%, 50%)";
        });
        document.querySelector("#descdiv").appendChild(theSpan);
    });
    browser.storage.local.get().then(storage => {
        const spanel = document.querySelector("#descdiv span");
        spanel.style.fontSize = storage.fontsize + storage.fontunit;
    });

});
