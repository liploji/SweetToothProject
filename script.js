$(document).ready(function () {
  $(".cart1").show();
  $(".cart2").hide();
  $(".menu1").show();
  $(".menu2").hide();
  $("#cart-modal").hide();
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
  $("#menu").animate({ right: "-300px" });
});


//For reviews, create a way to calculate overall rating using given the ratings of reviews provided on the site