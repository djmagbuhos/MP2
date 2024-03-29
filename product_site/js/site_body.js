$(document).ready(function () {
  $("img.image-preview").mouseenter(function () {
    let source = $(this).prop("src");
    $("#image-display").prop("src", source);
  });
});

$(document).ready(function () {
  let nav = `
  <div class="container">
    <div class="row py-3" id="psw_topnav2">
      <div class="col-lg-4 d-flex justify-content-center align-items-center d-none d-sm-block">
        <a href="../index.html">
          <img src="../img/psw-logo.png" alt="weblogo" id="logo" width="300px" />
        </a>
      </div>

      <div class="col-lg-6">
        <form class="d-flex d-none d-sm-block">
          <div>
            <div class="input-group">
              <input type="search" class="form-control" id="search-bar" />
              <span class="input-group-text" id="search-bar-2">
                <a href="#" class="text-dark">
                  <span class="material-symbols-outlined align-middle">
                    search
                  </span>
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>

      <div class="col-lg-2 d-flex justify-content-center align-items-center d-none d-sm-block text-center">
        <a href="../myacct.html" class="mx-2 nav_text">
          <span class="material-symbols-outlined mt-1 py-1">person</span>
        </a>
        <a href="../cart_page.html" class="mx-2 nav_text">
          <span class="material-symbols-outlined mt-1 py-1">shopping_cart</span>
        </a>
      </div>
    </div>
  </div>
</nav>`;

  $("#psw_topnav").append(nav);

  let nav2 =
    '<div class="container-fluid">' +
    '<div class="container" id="nav_container">' +
    "  <button " +
    '    class="navbar-toggler text-white" ' +
    '    data-bs-toggle="collapse" ' +
    '    data-bs-target="#site-navbar" ' +
    "  >" +
    '    <span class="navbar-toggler-icon"></span></button' +
    '  ><a href="../index.html" ' +
    "    ><img " +
    '      src="../img/psw-logo-white.png" ' +
    '      class="ms-4 d-sm-none" ' +
    '      alt="weblogo" ' +
    '      id="logo" ' +
    '      width="200px" ' +
    "  /></a>" +
    "  <div " +
    '    class="collapse navbar-collapse justify-content-center" ' +
    '    id="site-navbar" ' +
    "  >" +
    '    <ul class="navbar-nav w-100 nav-fill">' +
    '      <li class="nav-item">' +
    '        <a class="nav-link nav_link" href="../index.html">' +
    "          <strong>Home</strong></a" +
    "        >" +
    "      </li>" +
    '      <li class="nav-item dropdown">' +
    "        <a " +
    '          class="nav-link nav_link dropdown-toggle" ' +
    '          href="#" ' +
    '          data-bs-toggle="dropdown" ' +
    '          id="shop_now_dd" ' +
    "          ><strong>Shop Now</strong></a" +
    "        >" +
    '        <ul class="dropdown-menu w-100 dd_shopnow">' +
    "          <li>" +
    "            <a " +
    '              class="li_dd dropdown-item text-center text-light" ' +
    '              href="../shop_game.html"' +
    "            >" +
    "              GAMES</a" +
    "            >" +
    "          </li>" +
    "          <li>" +
    "            <a " +
    '              class="li_dd dropdown-item text-center text-light" ' +
    '              href="../shop_ca.html"' +
    "            >" +
    "              CONSOLE | ACCESSORIES</a" +
    "            >" +
    "          </li>" +
    "        </ul>" +
    "      </li>" +
    '      <li class="nav-item">' +
    '        <a class="nav-link nav_link" href="../index.html#aboutus">' +
    "          <strong>About Us </strong></a" +
    "        >" +
    "      </li>" +
    '      <li class="nav-item">' +
    '        <a class="nav-link nav_link" href="../contactus.html">' +
    "          <strong>Contact Us </strong></a" +
    "        >" +
    "      </li>" +
    '      <div class="d-sm-none">' +
    '        <li class="nav-item">' +
    '          <a class="nav-link nav_link" href="../cart_page.html">' +
    "            <strong>My Cart </strong></a" +
    "          >" +
    "        </li>" +
    '        <li class="nav-item">' +
    '          <a class="nav-link nav_link" href="../myacct.html">' +
    "            <strong>My Account </strong></a" +
    "          >" +
    "        </li>" +
    "      </div>" +
    "    </ul>" +
    "  </div>" +
    "</div>" +
    "</div>";

  $("#psw_navbar").append(nav2);
});

$(document).ready(function () {
  let footer =
    '<div class="container-fluid text-center" id="footer_newsletter" style="background-color: rgb(102, 104, 110)">' +
    '<div class="container pt-4 pb-4">' +
    '<div class="row">' +
    '<div class="col-lg-6">' +
    '<p class="text-light"><strong>Sign Up to Newsletter: </strong>Be the first to learn about promotions, special events, new arrivals and more!</p>' +
    "</div>" +
    '<div class="col-lg-6">' +
    '<form class="d-flex align-items-center justify-content-center">' +
    "<div class='w-100'>" +
    '<div class="input-group">' +
    '<input type="search" class="form-control" id="subscribe-bar"/>' +
    '<span class="input-group-text" id="subscribe-bar-2" style="background-color: rgb(41, 41, 41); border: 1px solid rgb(41, 41, 41);">' +
    '<a href="#" class="text-dark"><span class="align-middle text-light">Subscribe </span></a>' +
    "</span>" +
    "</div>" +
    "</div>" +
    "</form>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="container-fluid pb-5 text-white" id="footer-container" style="background-color: rgb(41, 41, 41)">' +
    "<br/><br/>" +
    '<div class="container" id="footer-container2">' +
    '<div class="row">' +
    '<div class="col-lg-3">' +
    '<p class="fs-5"><strong>Contact Us</strong></p>' +
    '<p class="fs-6 footer_link2">support@playstationworld.ph</p>' +
    '<p class="fs-6 footer_link2">+63922 895 0320</p>' +
    '<p class="fs-6 footer_link2">+63922 895 0323</p>' +
    '<p class="fs-6 footer_link2">+639123456789</p>' +
    "</div>" +
    '<div class="col-lg-3">' +
    '<p class="fs-5"><strong>COMPANY</strong></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">About Us</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Terms of Use</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">FAQs</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Privacy and Policy</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Store Locations</a></p>' +
    "</div>" +
    '<div class="col-lg-3">' +
    '<p class="fs-5"><strong>Customer Care</strong></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">My Account</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Shopping Cart</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Warranty</a></p>' +
    '<p class="fs-6"><a href="#" class="footer_link text-decoration-none" style="color: inherit; transition: color 0.3s" onmouseover="this.style.color=\'rgb(155, 188, 251)\'" onmouseout="this.style.color=\'inherit\'">Feedback</a></p>' +
    "</div>" +
    '<div class="col-lg-3">' +
    '<p class="fs-5"><strong>Follow Us</strong></p>' +
    '<a href="#"><img src="img/footer-logo/facebook-logo.png" class="me-1 img-fluid footer_sm_logo"/></a>' +
    '<a href="#"><img src="img/footer-logo/instagram-logo.png" class="me-1 img-fluid footer_sm_logo"/></a>' +
    '<a href="#"><img src="img/footer-logo/tiktok-logo.png" class="me-1 img-fluid footer_sm_logo"/></a>' +
    '<a href="#"><img src="img/footer-logo/twitter-logo2.png" class="me-1 img-fluid footer_sm_logo"/></a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="container-fluid py-3" id="footer_bottom" style="background-color: rgb(254, 254, 250)">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-lg-6 mt-2">' +
    '<p id="fbot_text" style="font-size: 12px">© 2024 Dante Magbuhos Jr | dj.magbuhos@gmail.com & Keith Aquino | keithaquino@gmail.com</p>' +
    "</div>" +
    '<div class="col-lg-6" style="text-align: right">' +
    '<img src="img/footer-logo/pay_logo_botfooter.png" alt="payment logos" width="280px"/>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  $("#footer_all").append(footer);
});
