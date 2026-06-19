const boxes = document.querySelectorAll(".heroBox");
const overlay = document.querySelector(".overlay");

boxes.forEach(box => {
    box.addEventListener("click", () => scaleUp(box));
});

function scaleUp(box){
    if(document.querySelector(".heroBox.scaled")) return;

    box.classList.add("scaled");
    overlay.classList.add("active");
    document.body.classList.add("modal-open");

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.classList.add("close-btn");

    closeBtn.onclick = (e) => {
        e.stopPropagation();
        close(box, closeBtn);
    };

    overlay.onclick = () => close(box, closeBtn);

    box.appendChild(closeBtn);
}

function close(box, btn){
    box.classList.remove("scaled");
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
    btn.remove();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const openBox = document.querySelector(".heroBox.scaled");
        const btn = document.querySelector(".close-btn");
        if (openBox && btn) close(openBox, btn);
    }
});
