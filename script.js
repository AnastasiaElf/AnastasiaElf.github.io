window.onload = updateLinkContentsWidth;

function updateLinkContentsWidth() {
    if (window.screen.width <= 700) {
        let elements = document.querySelectorAll(".elf-link .elf-link-content");
        let elementsWidth = Array.from(elements, (elem) => elem.offsetWidth);
        let maxWidth = Math.max(...elementsWidth);

        elements.forEach((elem) => (elem.style.width = `${maxWidth + 1}px`));
    }
}
