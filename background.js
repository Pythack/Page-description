if (typeof browser === "undefined") {
    var browser = chrome;
}

function updateIcon(tab) {
    const activeTabId = tab.tabId;
    
    const askfordesc = browser.tabs.sendMessage(activeTabId, {request:"get-description"});
    askfordesc.then(async (response) => {
        if (response != null) {
            browser.action.setIcon({path: './images/iconok.png'});
        } else {
            browser.action.setIcon({path: './images/iconnotok.png'});
        }
    }, error => {
        browser.action.setIcon({path: './images/iconerror.png'});
    });

}

browser.tabs.onActivated.addListener(updateIcon);
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {
        updateIcon({tabId: tabs[0].id})
    });
});