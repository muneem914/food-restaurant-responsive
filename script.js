let menu = document.querySelector('#menuBars');
let navbar = document.querySelector('.navbar');



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#searchIcon').onclick = () => {
    document.querySelector('#searchForm').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#searchForm').classList.remove('active');
}






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop:true,
  });