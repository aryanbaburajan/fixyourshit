chrome.storage.local.get("discord.hideBlockedMessages", function (result) {
  if (result["discord.hideBlockedMessages"] === true) {
    hideBlockedMessages();
  }
});

function hideBlockedMessages() {
  const onDOMChange = (records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (
          node.textContent.endsWith("Show messages") ||
          node.textContent.endsWith("Show message")
        ) {
          node.style.display = "none";
        }
      });
    });
  };

  var observer = new MutationObserver(onDOMChange);
  observer.observe(document.body, { childList: true, subtree: true });
}
