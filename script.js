$(document).ready(function () {
  $(".cart1").show();
  $(".cart2").hide();
  $(".menu1").show();
  $(".menu2").hide();
  $("#cart-modal").hide();
  $("#menu-modal").hide();
  if ($(window).width() <= 1000) {
    $("#carousel-img-1").attr("src", "./assets/offer1-small.png");
    $("#carousel-img-2").attr("src", "./assets/offer2-small.png");
    $("#carousel-img-3").attr("src", "./assets/offer3-small.png");
  }
});

$(".st-cart-button").hover(() => {
  $(".cart1").hide();
  $(".cart2").show();
});

$(".st-cart-button").mouseleave(() => {
  $(".cart1").show();
  $(".cart2").hide();
});

$(".st-cart-button").click(() => {
  $("#cart-modal").fadeIn();
  $("#cart").animate({ right: "0px" });
});

$(".st-menu-button").hover(() => {
  $(".menu1").hide();
  $(".menu2").show();
});

$(".st-menu-button").mouseleave(() => {
  $(".menu1").show();
  $(".menu2").hide();
});

$(".st-menu-button").click(() => {
  $("#menu-modal").fadeIn();
  $("#menu").animate({ left: "0px" });
});

$("#cart-modal").click(() => {
  $("#cart-modal").fadeOut();
  $("#cart").animate({ right: "-300px" });
});

$("#menu-modal").click(() => {
  $("#menu-modal").fadeOut();
  $("#menu").animate({ left: "-300px" });
});

$("#close-menu").click(() => {
  $("#menu-modal").fadeOut();
  $("#menu").animate({ left: "-300px" });
});

$(window).resize(() => {
  if ($(window).width() <= 1000) {
    $("#carousel-img-1").attr("src", "./assets/offer1-small.png");
    $("#carousel-img-2").attr("src", "./assets/offer2-small.png");
    $("#carousel-img-3").attr("src", "./assets/offer3-small.png");
    return;
  }
  $("#carousel-img-1").attr("src", "./assets/offer1.png");
  $("#carousel-img-2").attr("src", "./assets/offer2.png");
  $("#carousel-img-3").attr("src", "./assets/offer3.png");
});

//For reviews, create a way to calculate overall rating using given the ratings of reviews provided on the site

// FAQ PAGE ACCORDION
document.querySelectorAll('.accordion_button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion_button--active');

    if (button.classList.contains('accordion_button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else{
      accordionContent.style.maxHeight = 0; 
    }
  });
});