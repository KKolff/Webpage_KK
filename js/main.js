(function () {
  var nav = document.querySelector(".site-nav");
  var cover = document.querySelector(".cover");

  if (!nav) return;

  if (!cover) {
    nav.classList.add("solid");
    return;
  }

  function updateNav() {
    var threshold = cover.offsetHeight - nav.offsetHeight;
    nav.classList.toggle("solid", window.scrollY > threshold);
  }

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
  window.addEventListener("resize", updateNav);
})();

(function () {
  var gallery = document.querySelector(".gallery-grid");
  if (!gallery) return;

  gallery.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  gallery.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
})();
