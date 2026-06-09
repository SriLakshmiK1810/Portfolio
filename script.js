function openModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.style.display = "block";

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
        if (event.target === modal) {

            modal.classList.remove("show");

            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
};