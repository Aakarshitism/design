class Header extends HTMLElement { constructor() { super(); } connectedCallback() { this.innerHTML = `

       <section class="header">
    <div class="container">
        <div class="col-sm-5 header_left">
            <div class="left_content">
                <ul>
                    <li><a href="">COLLECTION</a></li>
                    <li><a href="">OFFERS</a></li>
                    <li><a href="">ABOUT US</a></li>
                </ul>
            </div>
        </div>

        <div class="col-sm-2 logo">
            <div class="image_logo">
                <img src="images/thrift_logo.png" />
            </div>
        </div>
        <div class="col-sm-5 header_right">
            <div class="right_content">
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li>
                        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-solid fa-basket-shopping"></i></a>
                    </li>
                    <li>
                        
<div class="dropdown drop_img">
  <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   <img src="images/p100.png">
  </a>

  <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#"><i class="fa-regular fa-user"></i> Profile</a></li>
    
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-bell"></i> Notifications</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-heart"></i> Wishlist</a></li>
    
        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-note-sticky"></i> Terms & Conditions </a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></li>
  </ul>
</div>

















                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

`; } } customElements.define("header-component", Header);
