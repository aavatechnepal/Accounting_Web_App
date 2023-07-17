const navlink = document.getElementById('navlink');
  const menu = document.getElementById('menu');

  menu.addEventListener('click',()=>{
    navlink.classList.toggle('active');
  })