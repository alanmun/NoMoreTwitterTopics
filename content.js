function checkForTopicsViaSelector(){
    topics = document.querySelectorAll("div[aria-label='Set as not interested']");

    for(const div of topics){
        ariaLabel = div.getAttribute('aria-label')
        if(ariaLabel != null && ariaLabel != ""){
            console.log("Found div that has aria-label:", ariaLabel)
            if(ariaLabel == "Set as not interested"){
                console.log("Found a topic, hiding it!");
                div.click();
            }
        }
    }
}
document.onscroll = checkForTopicsViaSelector
console.log("Twitter Topic Hider extension is running.");