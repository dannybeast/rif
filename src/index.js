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
import Accordion from "./js/modules/accordion";
import mobileNavigation from "./js/modules/mobileNavigation";
import Modal from "./js/modules/modals";
import animations from "./js/modules/animations";
import masks from "./js/modules/inputmasks";
import sliders from "./js/modules/sliders";
import Tabs from "./js/modules/tabs";
import Notice from "./js/modules/notifications";
import { scrollTo } from "./js/modules/scrollTo";
document.addEventListener("DOMContentLoaded", function() {
  animations();
  // Accordion
  for (const e of document.querySelectorAll('[data-accordion="trigger"]')) {
    const newAccordion = new Accordion(e);
    newAccordion;
  }
  masks();
  sliders();
  new Modal();
});

window.onload = function() {
  setTimeout(() => {
    mobileNavigation();
    if (document.querySelector(".js-scrollTo-answer")) {
      scrollTo(".js-scrollTo-answer", ".answers__block", "0");
    }
  }, 1000);
  hideLoader();
};
