$(document).ready(function () {
  $("#cart1").show();
  $("#cart2").hide();
  $("#cart-modal").hide();
});

$(".st-cart-button").hover(() => {
  $("#cart1").hide();
  $("#cart2").show();
});

$(".st-cart-button").mouseleave(() => {
  $("#cart1").show();
  $("#cart2").hide();
});

$(".st-cart-button").click(() => {
  $("#cart-modal").show();
  $("#cart").animate({ right: "0px" });
});

$("#cart-modal").click(() => {
  $("#cart-modal").hide();
  $("#cart").animate({ right: "-300px" });
});
