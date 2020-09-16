$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('bg-transparent', $(this).scrollTop() < $nav.height());
    });
  });