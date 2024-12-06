import $ from "jquery";

function initSupport() {
  $("#product-search").click(function (e) {
    e.preventDefault();
    if ($(window).width() >= 768) {
      $("input#search").focus();
    } else {
      $("a.menu").click();
      $('inp[data-go-to="search"]').click();
    }
  });
}

window.scripts = window.scripts || [];
window.scripts.push(initSupport);
