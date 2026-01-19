/* 
    ads in linkedIn are flagged by adding a line that says "Promoted"
    to the psot. 
    simply looking through the page for elements that contain the "Promoted"
    in them is all we need to find an ad in Js.
    Then, to actually remove the ad, we need to find the ancestor (n-th parent) element 
    that wraps around the entire post and get rid of that. With Dev Tools, you can actually 
    right-click on the element and select “Remove Element” to see the result. 
    we are going to set that element's syle attribute to display: none; .
*/

function removeAds() {

    //get all 'span' elements on the page
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        //checkt if the contain the text 'Promoted'
        if (spans[i].innerHTML === "Promoted") {
            //get the div that wraps around the entire ad
            let card = spans[i].closest(".feed-shared-update-v2");

            //if the class changed and we can't find it with closest(), get the 6th parent
            if (card === null) {
                //coud also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }

            }
            //make the add disapear
            card.setAttribute("style", "display: none !important;");
        }
    }
}

removeAds();

//ensures ads will be removed as the user scrolls
setInterval(function () {
    removeAds();
}, 100)