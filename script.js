const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav-links');
  

  burger.addEventlistener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();

  