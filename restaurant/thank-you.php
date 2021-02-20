<?php
/**
 * Template Name: Lander - Restaurant TY
**/
?>
<!doctype html>
<html> 
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" />
    <link rel="stylesheet" href="https://use.typekit.net/ion0lxd.css" />

    <?php 
        //remove_action( 'wp_head', 'wp_enqueue_scripts', 1);
		remove_action( 'wp_head', 'style_scripts');

        function hook_css_js () {
        $version = "6.5.7"; 
    ?>

    <!--  CSS -->
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url') ?>/restaurant/resources/css/app.css?ver=<?= $version; ?>" />
	<style>
		ul.gform_fields .field .ginput_container span {width:100% !important;}
		.gform_wrapper input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"]):not([type="image"]):not([type="file"]) {padding:15px 20px;}
	</style>

    <!-- JS -->
    <script src="<?php bloginfo('template_url') ?>/restaurant/resources/vendor/jquery-3.4.1.min.js?ver=<?= $version; ?>"></script>
    <script src="<?php bloginfo('template_url') ?>/restaurant/resources/vendor/foundation/js/foundation.min.js?ver=<?= $version; ?>"></script>

    <?php 
        } add_action('wp_head', 'hook_css_js'); 

        wp_head();
    ?>

</head>
<body>
<header id="header" class="header" data-sticky-container>
    <div class="navbar sticky" data-sticky data-options="marginTop:0">
        <div class="grid-container">
            <a class="navlogo" href="/"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo.svg" alt=""></a>
            <a class="navphone" href="tel:+14809776444">
                <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-phone.svg" alt=""> 
                <span>+1 (480) 977-6444</span>
            </a>
        </div>
    </div>            
</header>
<main id="content">
    <section class="sec-hero">
        <div class="body">
            <div class="grid-container"> 
                <h1 class="text-center">Thank You</h1>
            </div>
        </div>
    </section>

    <section class="sec-main">
        <div class="grid-container">
            <p class="text-center">Thank you for contacting us, we will get back to you as soon as we can.</p>
        </div>
    </section>

    
    <div class="sec-awards">
        <div class="grid-container">
            <ul>
                <li class="big">
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-ranking-arizona.png" alt="">
                    </figure>
                    <p>#1 Advertising Agency <span>2020</span></p>
                    <p>Best SEO/Social Media Marketing <span>2019 - 2020</span></p>
                </li>
                <li class="big">
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-expertise.png" alt="">
                    </figure>
                </li>
                <li class="big">
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-boov.png" alt="">
                    </figure>
                    <p>Best of Our Valley for Web Design <span>2017-2020</span></p>
                    <p>Best of Our Valley for  Social Media <span>2018</span></p>
                </li>
                <li>
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-us-veteran.png" alt="">
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-google-partner.png" alt="">
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-bbb-ap.png" alt="">
                    </figure>
                </li>
            </ul>
        </div>
    </div>
</main>
<footer id="footer" class="footer">
    <div class="grid-container">     
        <hr>
        <div class="grid-x grid-margin-x">
            <div class="cell medium-5 align-self-bottom medium-order-2">
                <div class="foot-logo"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/mbn-footer.svg" alt=""></div>
            </div>
            <div class="cell medium-7 align-self-bottom medium-order-1">
                <div class="foot-contact">
                <a class="phone" href="tel:602-737-2583">
                    <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-phone.svg" alt=""> 
                    <span>(602) 737-2583</span>
                </a>
                <span class="address">
                    17797 N. Perimeter Drive, Suite D105, Scottsdale, AZ 85255<br>
                    2 N Central Ave 18th floor, Phoenix, AZ 85004
                </span>
                </div>
                <div class="foot-social">
                    <ul class="social-list">
                        <li>
                            <a href="https://www.linkedin.com/company/my-biz-niche" target="_blank"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-linkedin-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mybizniche/" target="_blank"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-facebook-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="" target="_blank"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-behance-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mybizniche/" target="_blank"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-instagram-sq.svg" alt=""></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/mybizniche/" target="_blank"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-pinterest-sq.svg" alt=""></a>
                        </li>
                    </ul>
                    <ul class="rating-list">
                        <li>
                            <a href="https://goo.gl/maps/TuXZ9vsmgUA2" target="_blank">
                                <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-google.svg" alt="">
                                <span>5.0</span>
                                <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-star-ratings.svg" alt="">
                            </a>
                        </li>

                        <li><a href="#"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-bbb-ap.svg" alt=""></a></li>
                    </ul>
                </div>
                <div class="copyright">
                    <span class="db">&copy; <?= date('Y'); ?> My Biz Niche</span> 
                    A Damn Good Digital Marketing Company in Phoenix, AZ. 
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </div>
    </div>
</footer>

<script>$(document).foundation();</script>
<?PHP 
	remove_action( 'wp_footer', 'js_scripts');
	wp_footer();
?>
</body>
</html>

