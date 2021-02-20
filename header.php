<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>> 
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>> 
<div id="wrapper" class="light-bg">

    <!-- HEADER NAV START -->
    <header id="header" class="overlap" data-sticky-container data-toggler=".show-menu">
        <div class="hsnav-s7 sticky" data-sticky data-options="marginTop:0">
            <div class="navbar">
                <a class="navlogo" href="<?php echo get_home_url(); ?>#">
                    <span class="abr"><img src="<?php echo MBN_ASSETS_URI ?>/img/mbn-abr.svg" alt=""></span>
                    <span class="alt">My Biz Niche</span>
                </a>
                <span class="navicon" data-toggle="header">mobile menu</span>

                <div class="navutil">
                    <a class="tel" href="tel:602-737-3192"><i class="icn-phone red"></i>602-737-3192</a>
                    <a class="lets" href="<?php the_permalink(24); ?>">Let’s Talk</a>
                </div>

                <nav class="navmenu">
                    <div class="menu-img">
                        <img src="<?php echo MBN_ASSETS_URI ?>/img/img-navmenu.jpg" alt="">
                    </div>
                    <div class="menu-items">
                        <?php
                            wp_nav_menu( array( 
                                'theme_location' => 'main-menu',
                                'menu'       => '',
                                'container'  => '',
                                'items_wrap' => '<ul>%3$s</ul>' 
                            ));
                        ?>
                    </div>
                    <div class="menu-info">
                        <p>
                            <a href="mailto:info@mybizniche.com">info@mybizniche.com</a><br>
                            <a href="tel:602-833-7169">(602) 833-7169</a>
                        </p>
                        <p>20860 N. Tatum Blvd, Suite 300 Phoenix, Arizona 85050</p>
                        <ul class="social-list">
                            <li>
                                <a href="https://www.linkedin.com/company/my-biz-niche" target="_blank">
                                    <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-linkedin-sq.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/mybizniche/" target="_blank">
                                    <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-facebook-sq.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-behance-sq.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mybizniche/" target="_blank">
                                    <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-instagram-sq.svg" alt=""
                                ></a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/mybizniche/" target="_blank">
                                    <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-pinterest-sq.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <span class="overlay"></span>
            </div>
        </div>            
    </header>
    <!-- HEADER NAV END -->


    <?php if(is_front_page()) { ?>
    <section id="intro">
        <div class="in-1"></div>
        <div class="in-2">
            <div class="in-logo"><img src="<?php echo MBN_ASSETS_URI ?>/img/mbn-red.svg" alt=""></div>
            <div class="in-info">
                <b class="ii-1">m</b>
                <b class="ii-2">b</b>
                <b class="ii-3">n</b>
                <span class="ii-4"><em>stands for</em> my biz niche.</span>
            </div>
        </div>
        <div class="in-3">
            <em class="in-3a">and we made</em> 
            <span class="in-3b">marketing our biz niche.</span>
        </div>    
        <div class="in-4">
            <img src="<?php echo MBN_ASSETS_URI ?>/img/icn-laptop.svg" alt="">
        </div>
        <div class="in-5">
            <img class="in-5a" src="<?php echo MBN_ASSETS_URI ?>/img/icn-crown.svg" alt="">
            <img class="in-5b" src="<?php echo MBN_ASSETS_URI ?>/img/icn-chess-piece.svg" alt="">
        </div>
        <div class="in-6">
            <img class="in-6a" src="<?php echo MBN_ASSETS_URI ?>/img/icn-bulb.svg" alt="">
            <img class="in-6b" src="<?php echo MBN_ASSETS_URI ?>/img/icn-messaging.svg" alt="">
            <img class="in-6c" src="<?php echo MBN_ASSETS_URI ?>/img/icn-image.svg" alt="">
            <img class="in-6d" src="<?php echo MBN_ASSETS_URI ?>/img/icn-video.svg" alt="">
        </div>
        <div class="in-7">
            <img class="in-7a" src="<?php echo MBN_ASSETS_URI ?>/img/icn-application.svg" alt="">
            <img class="in-7b" src="<?php echo MBN_ASSETS_URI ?>/img/icn-magnifier.svg" alt="">
            <img class="in-7c" src="<?php echo MBN_ASSETS_URI ?>/img/icn-arrow-graph.svg" alt="">
        </div>
        <div class="in-8">
            <img class="in-8a" src="<?php echo MBN_ASSETS_URI ?>/img/icn-application-2.svg" alt="">
            <img class="in-8b" src="<?php echo MBN_ASSETS_URI ?>/img/icn-gear.svg" alt="">
        </div>

        <div class="skip-intro">
            <a href="#">Skip Intro</a>
        </div>
    </section>
    <?php } ?>



    


