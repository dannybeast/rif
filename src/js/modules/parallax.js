import simpleParallax from "simple-parallax-js";
export default function() {
  var image = document.getElementsByClassName("js-parallax");
  var imageRight = document.getElementsByClassName("js-parallax-right");
  var imageScroll = document.getElementsByClassName("js-parallax-scroll");
  var imageScrollVertical = document.getElementsByClassName(
    "js-parallax-scroll-vertical"
  );

  new simpleParallax(image, {
    delay: 0.8,
    transition: "cubic-bezier(0,0,0,1)",
  });
  new simpleParallax(imageRight, {
    delay: 0.8,
    transition: "cubic-bezier(0,0,0,1)",
    orientation: "right",
  });
  new simpleParallax(imageScroll, {
    overflow: true,
    delay: 0.8,
    //transition: "cubic-bezier(0,0,0,1)",
    orientation: "right",
  });
  new simpleParallax(imageScrollVertical, {
    overflow: true,
    delay: 0.8,
    //transition: "cubic-bezier(0,0,0,1)",
    orientation: "down",
  });
}
