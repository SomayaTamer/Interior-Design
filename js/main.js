// for small screen menue toggles
  const menuIcon = document.getElementById('menu-icon');
  const middleNav = document.querySelector('.middle-nav');

  function toggleMenu() {
    middleNav.classList.toggle('show');
  }

  menuIcon.addEventListener('click', toggleMenu);

  menuIcon.addEventListener('touchstart', function(e) {
    e.preventDefault();
    toggleMenu();
  });
