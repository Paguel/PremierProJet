document.querySelectorAll('.navbars a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });
  
  document.querySelectorAll('.reseaux a').forEach(Link => {
    Link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });