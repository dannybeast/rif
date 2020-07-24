// SVG
var __svg__ = {
  path: "./assets/icons/**/*.svg",
  name: "assets/icons/sprite.svg",
};
__svg__ = {
  filename: "/assets/icons/sprite.svg",
};
require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

// SCSS
import "./assets/scss/main.scss";

// Modules
import hideLoader from "./js/modules/loader";
import "lazyload";
import "@fancyapps/fancybox";
import mobileNavigation from "./js/modules/mobileNavigation";
import Modal from "./js/modules/modals";
import animations from "./js/modules/animations";
import masks from "./js/modules/inputmasks";
import sliders from "./js/modules/sliders";
import parallax from "./js/modules/parallax";
import contactsMap from "./js/modules/contactsMap";
import { scrollTo } from "./js/modules/scrollTo";

// Forms
import "./js/forms/validation";
import "./js/forms/callme";
import "./js/forms/answer";
import "./js/forms/calc";
import "./js/forms/calc-construction";
import "./js/forms/calc-design";
import "./js/forms/calc-repairs";

document.addEventListener("DOMContentLoaded", function() {
  animations();
  lazyload(document.querySelectorAll(".js-lazy"));
  // Tabs
  let $tabs = $(".js-tabs");

  $tabs.each(function() {
    let tabs_item = $(this);

    function showTab(index) {
      tabs_item
        .find(".js-tab-link")
        .eq(index)
        .addClass("is-active");
      tabs_item
        .find(".js-tab-content")
        .eq(index)
        .show();
      sliders();
    }
    function hideTabs() {
      tabs_item.find(".js-tab-link.is-active").removeClass("is-active");
      tabs_item.find(".js-tab-content").hide();
    }
    showTab(0);
    tabs_item.find(".js-tab-link").click(function() {
      hideTabs();
      showTab($(this).index());
    });
  });

  masks();

  sliders();
  parallax();
  contactsMap();
  new Modal();
});

window.onload = function() {
  setTimeout(() => {
    mobileNavigation();
    if (document.querySelector(".js-scrollTo-answer")) {
      scrollTo(".js-scrollTo-answer", ".answers", "0");
    }
    if (document.querySelector(".js-scrollTo-begining")) {
      scrollTo(".js-scrollTo-begining", ".header", "0");
    }
  }, 500);

  $(window).scroll(function() {
    var top = $(document).scrollTop();

    if (top > 10) {
      $(".to-begining").removeClass("hide");
    } else {
      $(".to-begining").addClass("hide");
    }
  });

  hideLoader();
};
