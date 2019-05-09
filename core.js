$(function(){
  $(".flip-card").on("mouseenter mouseleave", function(){
    $(this).find(".player-nick").stop().toggle("slow");
  })

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

      if (scroll >= 340) {
          if($(".nav-img").length < 1){
            $(".navbar-brand").before("<a href='#' id='brand-img'><img src='./img/demise_the_D.png' class='d-inline-block align-top nav-img' alt=''></a>");
          }
          $(".toggle-btn").css("background-color", "white");
          $(".toggle-btn:before").css("box-shadow", "0 -10px 0 0 white");
          $(".toggle-btn:after").css("box-shadow", "0 10px 0 0 white");
          $(".navbar").css("background-color", "black");
          $(".navbar").css("border-bottom", "2px solid #E94724");
          $(".nav-link, .navbar-brand").css("color", "white");
          $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
          if(scroll >= 900){
            $("#take_me_up").show();
          }
      }
      else {
          $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
          $(".navbar").css("background-color", "transparent");
          $(".navbar").css("border-bottom", "none");
          $(".nav-link, .navbar-brand").css("color", "#231F20");
          $("#brand-img").remove();
          $("#take_me_up").hide();
      }
});

})
