//
// "background": {
//     "service_worker": "background.js"
//   },

//Enable content.js using:
// "content_scripts": [
//     {
//       "matches": ["*://*.twitter.com/*", "https://whatsong.page/"],
//       "js": ["content.js"]
//     }
//   ],

// chrome.runtime.onInstalled.addListener(function() {
//     //Everything in here runs when extension is first installed
//     chrome.contextMenus.create({
//       "id": "sampleContextMenu",
//       "title": "Sample Context Menu",
//       "contexts": ["selection"]
//     });
// });

var checkForTopics = function(){
    console.log("start");

    let divs = document.getElementsByTagName("div");

    let i = 0;
    while(i < 999999){ i++; } //Trying to delay it doesn't seem to work
    //everything = document.querySelectorAll("svg") //This finds a single svg in entire page
    //topics = divs.querySelectorAll("div[aria-label='Set as not interested']");
    console.log(divs)
    //console.log(topics);

    //everything.click();

    console.log(divs.length)
    for(const div of divs){
        console.count()
        ariaLabel = div.getAttribute('aria-label')
        if(ariaLabel == "Loading..."){
            console.log("Found loading...")
        }
        if(ariaLabel != null){
            console.log("Found div that has aria-label:", ariaLabel)
            if(ariaLabel == "Set as not interested"){
                console.log("FOUND A TOPIC TO HIDE!!!")
            }
        }
        //topic.click();
    }
}

console.log("in background.js");

//document.addEventListener("DOMContentLoaded", checkForTopics)


chrome.tabs.onUpdated.addListener(async info => {
    console.log(info)
    //chrome.tabs.getCurrent()
    //const tab = await chrome.tabs.get(info);
    //alert("This is my favorite website!");


    // const isTwitter = tab.url.includes("twitter.com"); //If Top Tweets doesn't have topics, just use twitter.com/home
    // isTwitter ? chrome.action.enable(tab.tabId) : chrome.action.disable(tab.tabId);
    checkForTopics();
});


/*

<div dir="auto" class="css-901oao r-111h2gw r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1e081e0 r-qvutc0">
We won’t suggest this Topic anymore.</div>

*/

/*

<div aria-label="Set as not interested" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty
r-rs99b7 r-15ysp7h r-4wgw6l r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr" style="margin-right: calc(-9px);"><div dir="auto" class="css-901oao
r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0">
<svg viewBox="0 0 24 24" aria-hidden="true" class="r-111h2gw r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz">
<g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 
1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.
707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-1b43r93
r-1cwl3u0 r-bcqeeo r-qvutc0"></span></div></div>

*/