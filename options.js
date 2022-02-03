//This script handles the business logic of the option pop up pane

// Saves options to chrome.storage
function save_options() {
    var isHidden = document.getElementById('hiddenTopic').checked;
    chrome.storage.sync.set({
        isHidden: isHidden
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    //Default to true if restoring and they never had set anything
    chrome.storage.sync.get({
        isHidden: true
    }, function(items) {
        document.getElementById('isHidden').checked = items.isHidden;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('hiddenTopic').addEventListener('click',
    save_options);