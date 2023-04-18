 class Footer extends HTMLElement { constructor() { super(); } connectedCallback() { this.innerHTML = `




                            <section class="footer">
                            <div class="footer_content">
                            <div class="footer_upper">
                                <img src="images/f1.png">
                                <img src="images/f2.png">
                                <img src="images/f3.png">
                                <img src="images/citibank.png">
                                <img src="images/Skrill.png">

                                
                            </div>   
                            <div class="footer_middle">
                                <div class="container">
                                <div class="footer_img">
                             <img src="images/group56.png">
                                </div>
                                <div class="storepolicy1">

                                <div class="storepolicy">
                                 <span>Store Policy</span></div>
                                 <div class="storepolicy">
                                 <span>About Us</span></div>
                                 <div class="storepolicy">
                                 <span>Privacy Policy</span></div>
                                 <div class="storepolicy">
                                 <span>Terms & Condition</span></div>
                                 <div class="storepolicy">
                                 <span>Contact Us</span></div>
                               
                                   
                                </div>
                                      <div class="storepolicy3">

                                <div class="storepolicy2">
                                 <span> <i class="fa-brands fa-whatsapp"></i> (00)1234 5678</span></div>
                                 <div class="storepolicy2">
                                 <span> <i class="fa-regular fa-clock"></i> 24 x 7 Services</span></div>
                                 <div class="storepolicy2">
                                 <span> <i class="fa-solid fa-m"></i> shop@email.com</span></div>
                                
                               
                                   
                                </div>
                                
                            </div> 
                             </div>
                            <div class="footer_lower">
                            <div class="lower_content">
                             <p>Copyright Ⓒ 2014-2015 <span>Hangingthrift.in</span> by Youwes. All Right Reserved</p>   
                              <a href="">  <i class="fa-brands fa-facebook"></i> </a>
                              <a href="">  <i class="fa-brands fa-google"></i> </a>
                              <a href="">  <i class="fa-brands fa-twitter"></i> </a>
                              <a href="">  <i class="fa-brands fa-linkedin"></i> </a>
                              <a href="">  <i class="fa-brands fa-pinterest"></i> </a>


                                
                            </div>    


                                
                            </div>











                            </div>
                                
                                
                            </section>







 `; } } customElements.define("footer-component", Footer);
