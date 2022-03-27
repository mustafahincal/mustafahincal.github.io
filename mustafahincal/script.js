$(document).ready(function () {
   //* navbar
   $(window).scroll(function () {
      if (this.scrollY > 20) {
         $(".navbar").addClass("sticky");
      } else {
         $(".navbar").removeClass("sticky");
      }
   });

   //* toggle menu
   $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
   });

   //* scroll up btn
   $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
         $(".scroll-up-btn").addClass("show");
      } else {
         $(".scroll-up-btn").removeClass("show");
      }
   });

   //* typing animation
   let typed = new Typed(".typing", {
      strings: ["Mustafa Hıncal"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
   });

   let typed2 = new Typed(".typing-2", {
      strings: ["Who am I"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
   });
});
