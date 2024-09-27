function handleResize() {
    const width = window.innerWidth;
    const menu = document.getElementById("menu");
    const list = document.getElementById("list");
    const close = document.getElementById("close");
    const burger = document.getElementById("burger");

    if (width < 900) {
        menu.classList.add("none");
        list.classList.remove("none");
        burger.classList.remove("none");

        list.addEventListener("click", () => {
            list.classList.add("none");
            close.classList.remove("none");
            menu.classList.add("phone");
            menu.classList.remove("none");
        });
        close.addEventListener("click", () => {
            list.classList.remove("none");
            close.classList.add("none");
            menu.classList.remove("phone");
            menu.classList.add("none");
        });
    } else {
        burger.classList.add("none");
        menu.classList.remove("none");
        list.classList.add("none");
    }

}

window.addEventListener("resize", handleResize);
handleResize();