const urlPattern = /https?:\/\/\S+[^\s\.;?!]/g;

function wrapMatches(text, pattern, wrapFunc) {
    const nodes = [];
    let pos = 0;

    for (const match of text.matchAll(pattern)) {
        const precedingText = text.slice(pos, match.index);
        if (precedingText) {
            nodes.push(document.createTextNode(precedingText));
        }

        const replacementNode = wrapFunc(match[0], match.index);
        nodes.push(replacementNode);

        pos = match.index + match[0].length;
    }

    const trailingText = text.slice(pos);
    if (trailingText) {
        nodes.push(document.createTextNode(trailingText));
    }

    return nodes;
}

function wrapUrls(url) {
    const link = document.createElement('a');
    link.href = url;
    link.appendChild(document.createTextNode(url));
    return link;
}

window.addEventListener("pageshow", function() {
    const checklistItems = this.document.querySelectorAll(".ChecklistItem .Title");
    for (let item of checklistItems) {
        const nodes = wrapMatches(item.textContent, urlPattern, wrapUrls);
        item.firstChild.replaceWith(...nodes);
    }
});
