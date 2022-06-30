window.onload = updateLinkContentsWidth;

function updateLinkContentsWidth() {
    let elements = document.querySelectorAll(".elf-link .elf-link-content");
    let elementsWidth = Array.from(elements, (elem) => elem.offsetWidth);
    let maxWidth = Math.max(...elementsWidth);

    elements.forEach((elem) => (elem.style.width = `${maxWidth}px`));
}
