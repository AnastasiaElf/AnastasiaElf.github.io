window.onload = () => {
    updateLinkContentsWidth();
    enableCopyOnClick();
};

function updateLinkContentsWidth() {
    if (window.screen.width <= 700) {
        let elements = document.querySelectorAll(".elf-link .elf-link-content");
        let elementsWidth = Array.from(elements, (elem) => elem.offsetWidth);
        let maxWidth = Math.max(...elementsWidth);

        elements.forEach((elem) => (elem.style.width = `${maxWidth + 1}px`));
    }
}

function enableCopyOnClick() {
    let linkElem = document.querySelector("#elf-discord-link");
    let textElem = linkElem.querySelector(".elf-link-text");
    let timeout;

    linkElem.addEventListener("click", () => {
        if (timeout || !navigator.clipboard) {
            return;
        }

        navigator.clipboard.writeText("anastasiaelf");
        textElem.innerHTML = "Username copied!";

        timeout = setTimeout(() => {
            textElem.innerHTML = "@anastasiaelf";
            timeout = null;
        }, 3000);
    });
}
