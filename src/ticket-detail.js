const urlPattern = /https?:\/\/\S+/g;

window.addEventListener("pageshow", function() {
    const checklistItems = this.document.querySelectorAll(".ChecklistItem .Title");
    for (let item of checklistItems) {
        item.innerHTML = item.innerHTML.replaceAll(urlPattern, '<a href="$&">$&</a>');
    }
});
