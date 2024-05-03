function toggleMenu(event) {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("show");
    event.stopPropagation(); // Prevents the event from propagating to the parent element
  }
  
  function closeMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("show");
  }
  