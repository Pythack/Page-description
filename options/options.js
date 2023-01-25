if (typeof browser === "undefined") {
    var browser = chrome;
}


document.addEventListener("DOMContentLoaded", event => {
    browser.storage.local.get().then(storage => {
        document.querySelector("#font-size-input").value = storage.fontsize;
        document.querySelector("#font-size-unit").value = storage.fontunit;
    });
    document.querySelector("#options-save").addEventListener("click", event => {
        browser.storage.local.set({fontsize: document.querySelector("#font-size-input").value, fontunit: document.querySelector("#font-size-unit").value});
    });
});
