import "/src/scss/style.css";

document.querySelector(".nav-toggle").addEventListener("click", function(e) {
  [].map.call(
    document.querySelectorAll(
      ".primary-nav, .site-wrapper, .nav-header, .nav-linklist"
    ),
    function(el) {
      el.classList.toggle("nav-active");
    }
  );
});
