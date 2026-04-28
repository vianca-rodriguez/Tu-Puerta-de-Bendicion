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



// Modal
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('modal-image').src = btn.dataset.image;
        document.getElementById('modal-title').textContent = btn.dataset.title;
        document.getElementById('modal-text').textContent = btn.dataset.info;
        document.getElementById('modal-horario').textContent = btn.dataset.horario;
        document.getElementById('modal-leader').textContent = btn.dataset.leader;

        const phone = btn.dataset.phone;
        const phoneEl = document.getElementById('modal-phone');
        phoneEl.textContent = phone;
        phoneEl.href = `tel:${phone}`;

        const galleryLink = document.getElementById('modal-gallery-link');
        if (btn.dataset.galleryLink) {
            galleryLink.href = btn.dataset.galleryLink;
            galleryLink.style.display = 'inline-block';
        } else {
            galleryLink.style.display = 'none';
        }

        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});