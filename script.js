window.onload = () => {
    enableCopyOnClick();
};

function enableCopyOnClick() {
    let linkElem = document.querySelector("#elf-discord-link");
    let textElem = linkElem.querySelector(".elf-link-text");
    let timeout;

    linkElem.addEventListener("click", () => {
        if (timeout || !navigator.clipboard) {
            return;
        }

        navigator.clipboard.writeText("anastasiaelf");
        textElem.innerHTML = "Copied!";

        timeout = setTimeout(() => {
            textElem.innerHTML = "@anastasiaelf";
            timeout = null;
        }, 3000);
    });
}
