$(function () {
  //*---------------- Nav Color On Scroll ------------------------
  $(window).on("load scroll", function () {
    if ($(window).scrollTop() > 40) {
      $(".header-nav").addClass("header-nav-scroll");
    } else {
      $(".header-nav").removeClass("header-nav-scroll");
    }
  });

  //*---------------- Show/Hide Nav Menu ------------------------
  $("#menu-bar-button").click(function () {
    $("#menu-bar-button i").toggleClass("icon-cross");
    $("#menu-bar-button i").toggleClass("icon-bars");

    $(".header-nav .header-menu").toggleClass("open");
  });

  //*---------------- Toggle Question Accordian ------------------------
  $(".question-answer h4").click(function () {
    $(".question-answer p").slideUp();
    $(this).next("p").slideDown();

    $(".question .question-icon span").text("+");
    $(this).children("span").text("-");
  });
});
