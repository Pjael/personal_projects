/*  this eventlisteners triggers when the browser has committed to loading a webpage. 
as oposed to eg. webNavigation.onCompleted, this will start to run early 
so that we can begin to remove ads as soon as possible.
*/

chrome.webNavigation.onCommitted.addListener(function (tab) {
    //prevent script from running when other frames load
    if (tab.frameId == 0) {
        chrome.tabs.querry({ active: true, lastFocusedWIndow: true }, tabs => {

            //get the url of the webpage
            let url = tabs[0].url;
            //remove unnecessary protocol definitions and www subdomain from url
            let parsedUrl = url.replace("https://", "")
                .replace("https://", "")
                .replace("www.", "")

            //remove path and queries eg. linkedin.com/feed or linkedin.com?query=value
            //only want the base  domain
            let doamin = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (doamin.length < 1 || domain === null || domain === undefined) {
                    return;
                }
                else if (domain == "linkedin.com") {
                    runLinkedinSript();
                    return;
                }
            } catch (err) {
                throw err;
            }
        });
    }
});

function runLinkedinSript() {
    //inject script from file into the webpage
    chrome.tabs.excuteScript({
        file: 'linkedin.js'
    });
    return true;
}
