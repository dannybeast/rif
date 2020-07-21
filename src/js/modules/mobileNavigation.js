export default function() {
  let nav = document.querySelector(".header__nav ul");
  if (nav) {
    let navCloned = nav.cloneNode(true);
    let buttonsCloned = document
      .querySelector(".header__buttons")
      .cloneNode(true);

    var $header = document.querySelector(".header");
    let headerHeight;
    if ($header) {
      var rect = $header.getBoundingClientRect();
      headerHeight = rect.height;
    }

    document.querySelector(".header__col:last-child").insertAdjacentHTML(
      "beforeend",
      `
        <li>
        <button class="nav-button">
            <div class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </button></li>`
    );

    let navBtn = document.querySelector(".header .nav-button");
    let mobileMenu = document.createElement("div");
    mobileMenu.classList.add("mobile-menu");
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("container");
    mobileMenu.appendChild(menuContainer);
    menuContainer.appendChild(buttonsCloned);
    menuContainer.appendChild(navCloned);

    // Append menu
    document.body.appendChild(mobileMenu);

    mobileMenu.style.top = `${headerHeight}px`;
    mobileMenu.style.height = `calc(100% - ${headerHeight}px)`;

    navBtn.addEventListener("click", function(e) {
      document
        .querySelector(".header .hamburger")
        .classList.toggle("is-active");
      mobileMenu.classList.toggle("open");
      document.body.classList.toggle("overflow-transparent");
    });
  }
}
