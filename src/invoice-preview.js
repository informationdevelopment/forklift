window.addEventListener("pageshow", function() {
    const previewWatermark = document.querySelector("iframe").contentDocument.querySelector('div');
    previewWatermark.style.zIndex = -1;
});
