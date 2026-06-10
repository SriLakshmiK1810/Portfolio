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

function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("active");
}
// const links = document.querySelectorAll("#nav-links a");

// links.forEach(link => {
//     link.addEventListener("click", () => {
//         document.getElementById("nav-links")
//                 .classList.remove("active");
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#nav-links a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("nav-links")
                    .classList.remove("active");
        });
    });
});
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