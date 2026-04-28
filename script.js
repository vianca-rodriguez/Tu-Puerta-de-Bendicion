document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle hamburger
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    // Close menu on any link click
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");

            // Smooth scroll for internal anchors
            const target = link.getAttribute("href");
            if (target.startsWith("#")) {
                e.preventDefault();
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});



function toggleResena() {
  const full = document.querySelector('.reseña-full');
  const button = document.querySelector('.read-more-button');
  const preview = document.querySelector('.reseña-preview');

  if (full.style.display === 'none') {
    full.style.display = 'inline';
    preview.style.display = 'none';
    button.textContent = 'Leer menos';
  } else {
    full.style.display = 'none';
    preview.style.display = 'inline';
    button.textContent = 'Leer más';
  }
}



const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const leader = document.getElementById("modal-leader");
const phone = document.getElementById("modal-phone");
const image = document.getElementById("modal-image");
const gallery = document.getElementById("modal-gallery");

const close = document.querySelector(".close");

document.querySelectorAll(".btn-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        title.textContent = btn.dataset.title;
        text.textContent = btn.dataset.info;
        leader.textContent = btn.dataset.leader;
        phone.textContent = btn.dataset.phone;

        // Main image
        image.src = btn.dataset.image;

        // Gallery images
        gallery.innerHTML = ""; // clear previous

        const images = btn.dataset.gallery.split(",");
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            gallery.appendChild(img);
        });

        modal.style.display = "flex";
    });
});

close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};