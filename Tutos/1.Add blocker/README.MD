how to build a fully-functional extension to block LinkedIn ads, in just 10 minutes.
link to tutorial : https://levelup.gitconnected.com/building-your-own-adblocker-in-literally-10-minutes-1eec093b04cd


1. manifest.json is the only essential file an extension needs. In our case, it will contain metadata about the extension, the permissions it needs to operate, and the script it should run in the background. 


2. in background.js , we’ll be setting up our event listener that will trigger an action every time the user loads a new webpage. We’ll then check if that website is LinkedIn, and if it is, we’ll block ads.

3. The last file we have left specifies how to actually block the ads.
However, unlike Facebook, LinkedIn doesn’t really try to obfuscate HTML to make it hard to distinguish ads, so simply looking through the page for elements that contain the word “Promoted” in them is all you need to find an ad in JS.
Then, to actually remove the ad, we need to find the ancestor (n-th parent) element that wraps around the entire post and get rid of that. With Dev Tools, you can actually right-click on the element and select “Remove Element” to see the result. In our code, we are going to set that element’s style attribute to display: none; , which does the trick.

done !!!!!
As for how you use it, here’s what you do:

Click your browser’s “burger menu” on the top right corner or visit Settings directly
Navigate to ‘Extensions’
Toggle on “Developer Mode”, which is usually on the top right corner of the ‘Extensions Page’
Some buttons should have appeared on the top of the page. Click “Load Unpacked”
Select your project directory from the File Browser
You’re all set!