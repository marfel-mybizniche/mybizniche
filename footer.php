<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */

?>



<footer id="footer" class="foot-s1">
    <div class="grid-container">    
        <hr>
        <div class="foot-menu">
            <?php
                wp_nav_menu( array( 
                    'theme_location' => 'footer-menu',
                    'menu'       => '',
                    'container'  => '',
                    'items_wrap' => '<ul>%3$s</ul>' 
                ));
            ?>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="cell medium-7 align-self-bottom">
                <div class="foot-social">
                    <ul class="social-list">
                        <li>
                            <a href="https://www.linkedin.com/company/my-biz-niche" target="_blank"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-linkedin-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mybizniche/" target="_blank"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-facebook-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="" target="_blank"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-behance-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mybizniche/" target="_blank"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-instagram-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/mybizniche/" target="_blank"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-pinterest-sq.svg" alt=""></a>
                        </li>
                    </ul>
                    <ul class="rating-list">
                        <li>
                            <a href="https://goo.gl/maps/TuXZ9vsmgUA2" target="_blank">
                                <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-google.svg" alt="">
                                <span>5.0</span>
                                <img class="filter-none" src="<?php echo MBN_ASSETS_URI ?>/img/icn-star-ratings.svg" alt="">
                            </a>
                        </li>

                        <li><a href="#"><img src="<?php echo MBN_ASSETS_URI ?>/img/icn-bbb-ap.svg" alt=""></a></li>
                    </ul>
                </div>
                <div class="copyright">
                    <span class="db">&copy; 2020 My Biz Niche</span> 
                    A Damn Good Digital Marketing Company in Phoenix, AZ. 
                    <span>All Rights Reserved</span>
                </div>
            </div>
            <div class="cell medium-5 align-self-bottom">
                <div class="foot-logo"><img src="<?php echo MBN_ASSETS_URI ?>/img/mbn-footer.svg" alt=""></div>
            </div>
        </div>
    </div>
    
    <a href="#header" data-smooth-scroll="" class="back-top">
        <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-chev.svg" alt="">
    </a>
</footer>
    
</div>


<?php wp_footer(); ?>

</body>
</html>

