function checkForTopicsViaSelector(){
    topics = document.querySelectorAll("div[aria-label='Set as not interested']");

    for(const div of topics){
        ariaLabel = div.getAttribute('aria-label')
        if(ariaLabel != null && ariaLabel != ""){
            console.log("Found div that has aria-label:", ariaLabel)
            if(ariaLabel == "Set as not interested"){
                console.log("Found a topic, hiding it!");
                div.click();

                chrome.storage.sync.get({
                    isHidden: true
                  }, function(items) {
                    if(items.isHidden) hideItToo(div);
                });
            }
        }
    }
}

function hideItToo(div){
    element = div;
    for(let i = 0; i < 10; i++){
        let parent = element.parentElement;
        if(parent.nodeName == "article") {
            console.log("Found the article, hiding entirely!!!");
            parent.remove()
            return;
        }
        //Give up after 10 tries? It should only have to bubble up like 4-5 parents I think
    }
}

document.onscroll = checkForTopicsViaSelector
console.log("Twitter Topic Hider extension is running.");