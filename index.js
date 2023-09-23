// وظيفة لتحديد العناصر
function getElement(selector) {
  return document.querySelector(selector);
}

// وظيفة لإزالة الفئة "active" من جميع الروابط في القائمة
function removeActiveClassFromNavLinks() {
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

// وظيفة لتحديد العنصر النشط في القائمة على أساس السكرول
function setActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        removeActiveClassFromNavLinks();
        const activeNavLink = getElement(`header nav a[href*=${id}]`);
        if (activeNavLink) {
          activeNavLink.classList.add("active");
        }
      }
    });
  });
}

setActiveNavLinkOnScroll();

// وظيفة لتبديل عرض نموذج البحث
function toggleSearch() {
  const searchForm = getElement(".search-form");
  const searchButton = getElement(".search-button");
  const searchInput = getElement(".search-input");

  searchButton.addEventListener("click", () => {
    searchForm.classList.toggle("active-search");
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchInput.value = "";
      searchForm.classList.remove("active-search");
    }
  });
}

toggleSearch();

let navbar = document.querySelector("nav");
document.querySelector(".bars").onclick = () => {
  navbar.classList.toggle("active");
};

// Show Scroll Up

let arrow = document.querySelector(".arrow-up");

window.onscroll = () => {
  if (this.scrollY >= 500) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
};
