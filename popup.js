if (typeof browser === "undefined") {
    var browser = chrome;
}


document.addEventListener("DOMContentLoaded", event => {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {
        const activeTab = tabs[0];
        const activeTabId = activeTab.id;
        
        const askfordesc = browser.tabs.sendMessage(activeTabId, {request:"get-description"});
        askfordesc.then(async (response) => {
            if (response != null) {
                document.querySelector("#descdiv").innerHTML = "<span style='color: hsl(219, 50%, 50%)'>" + response + "</span>";
            } else {
                document.querySelector("#descdiv").innerHTML = "<span style='color: hsl(0, 50%, 50%)'>No description on this page</span>";
            }
        }, error => {document.querySelector("#descdiv").innerHTML = "<span style='color: hsl(0, 50%, 50%)'>Page did not respond; try refreshing it. You might also be on a restricted URL.</span>";});
   
     });
});
