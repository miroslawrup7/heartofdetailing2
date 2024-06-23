
const configuratorIframeLoc = document.getElementById('configurator_iframe');

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        configuratorIframeLoc.height = configuratorIframeLoc.contentWindow.document.body.scrollHeight;
    }
})

window.onmessage = function(e) {
    if (e.data) {
        configuratorIframeLoc.height = e.data
    }
}
//# sourceMappingURL=main.js.map
