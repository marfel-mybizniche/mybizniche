<?php
/**
 * Template Name: Lander - Restaurant
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
        //remove_action( 'wp_head', 'wp_enqueue_scripts', 1);

        function hook_css_js () {
        $version = "6.5.7"; 
    ?>

    <!--  CSS -->
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url') ?>/restaurant/resources/css/app.css?ver=<?= $version; ?>" />
	<style>
		
		
		@media (max-width:1023px) {
		    .sec-main .marketing .item h3 {max-width:none;}
		}
		
		@media (max-width:639px) {
		    .sec-main .marketing .item {font-size:16px;}
		    .sec-main .marketing .item h3 {font-size:24px; margin:0 0 30px;}
		    .sec-main .marketing .item figure {width: 150px; margin: 0 auto 20px;}
		}
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
            <a class="navphone" href="tel:602-737-2583">
                <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/icn-phone.svg" alt=""> 
                <span>(602) 737-2583</span>
            </a>
        </div>
    </div>            
</header>
<main id="content">
    <section class="sec-hero">
        <figure class="bg"><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/img-banner.jpg" alt=""></figure>
        <div class="body">
            <div class="grid-container"> 
                <div class="grid-x grid-margin-x">
                    <div class="cell large-7">
                        <div class="copy">
                            <h1>restaurant marketing is our biz niche</h1>
                            <p>Want to drive immediate business and increased revenue to your restaurants while also producing huge lifetime value?</p>
                            <p>My Biz Niche has the secret ingredients to do just that.</p><br>
                            <h4>We like to keep things simple</h4>
                            <ul class="triangle-list">
                                <li>Month-to-Month Contract</li> 
                                <li>No Commitment</li> 
                                <li>Cancel Anytime</li> 
                            </ul>
                            <p>We don’t believe in locking our clients into long term commitments, We’d rather focus on generating the results we need to keep you happy.</p><br><br>
                        </div>

                        <div class="experience">
                            <h6>Team Experience</h6>
                            <ul>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-tgif.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-grimaldis.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-subway.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-mcdonald.png" alt=""></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cell large-5">
                        <div class="aside">
                            <div class="form">
                                <h3>Proven ROI and Unbelievable results</h3>
                                <p>Grimaldi’s received 802% Return on Ad Spend. <br>Want results? Need ROI? Contact us.</p>
                                <?= do_shortcode('[gravityform id="1" title="false" description="false" ajax="false"]'); ?>
                                <p class="note">Privacy Policy: We will never sell your email address to any<br> 3rd Party or send you nasty spam. Promise.</p>
                            </div>
                            
                            <div class="asseen">
                                <h6>As seen in</h6>
                                <ul>
                                    <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-inc.png" alt=""></li>
                                    <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-bi.png" alt=""></li>
                                    <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-forbes.png" alt=""></li>
                                    <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-fortune.png" alt=""></li>
                                    <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-time.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sec-main">
        <div class="grid-container">

            <div class="strategy">
                    <h3>our strategy</h3>
                    <p>We have developed and optimized our strategies to produce proven restaurant marketing solutions that drive both immediate ROI as well as huge lifetime value.</p>
                    <p>Our campaigns are fully customizable, geo located and tailor-madeto your restaurants requirements by our in-house teams.</p>
            </div>

            <div class="roi">
                <h2>Need some proof? <span>Our ROI doesn’t LIE.</span></h2>
                <h4>MBN x Grimaldi’s</h4>
                <figure class="img">
                    <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/img-problem.png" alt="">
                </figure>
            </div>

            <div class="problem">
                <h2>the problem</h2>
                <p>Grimaldi’s were determined to spread their famous New York-style pizza all over the country, but they were challenged with under-performing locations bringing down the revenue of the chain. To make things worse, they couldn’t identify why they under-performed. Grimaldi’s engaged MBN to drive business and revenue by identifying the root cause to their lack of performance and produce a game plan to turn them around. MBN was given their  top <b><i>3 under-performing locations</i></b> to analyze and market. Why? Because no other marketing agency had been successful.</p>
            </div>

            <div class="solution">
                <h2>our solution</h2>
                <p>A <b>comprehensive social media</b> campaign designed to engage <br> and motivate targeted segments to try their pizza.</p>
                <figure class="img">
                    <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/img-solution.png" alt="">
                </figure>
            </div>

            <div class="marketing">
                <div class="grid-x grid-margin-x">
                    <div class="cell large-4">
                        <div class="item">
                            <figure><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/social-media.png" alt=""></figure>
                            <h4>Social Media Advertising</h4>
                            <p>MBN focused efforts on a targeted social media ad campaign, showing ads in front of a qualified audience based on purchasing behavior, social behavior, and financial status. </p>
                        </div>
                    </div>
                    <div class="cell large-4">
                        <div class="item">
                            <figure><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/powerful-messaging.png" alt=""></figure>
                            <h4>Powerful messaging</h4>
                            <p>An irresistible offer, and world-class creative resulted in 2,800+ in-store redemptions, <b>an 8x return on ad spend.</b></p>
                        </div>
                    </div>
                    <div class="cell large-4">
                        <div class="item">
                            <figure><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/reducing-the-sauce.png" alt=""></figure>
                            <h4>Reducing the Sauce</h4>
                            <p>MBN split test multiple variants in audience, creative & copy which helped us find the secret ingredients faster, resulting in a <b>700% ROAS in the first month.</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="sec-cta">
        <div class="grid-container">
            <div class="success">
                <div class="grid-x grid-margin-x copy">
                    <div class="cell large-3">
                        <figure class="img-c1">
                            <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/img-the-success.png" alt="">
                        </figure>
                    </div>
                    <div class="cell large-8 align-self-bottom">
                        <div class="grid-x grid-margin-x">
                            <div class="cell large-12">
                                <h5>Combined results for Grimaldi’s 3 most underperforming locations</h5>
                            </div>                                
                            <div class="cell large-5">
                                <h6>Month one</h6>
                                <ul>
                                    <li>Over <b>700</b>% ROAS in first month.</li>  
                                    <li>223% ROI in first month.</li>  
                                    <li>Grew database 1,310 new subscribers</li>  
                                </ul>
                            </div>
                            <div class="cell large-6">
                                <h6>Campaign Lifetime</h6>
                                <ul>
                                    <li>Over <b>800</b>% Monthly Return On Ad Spend (ROAS)</li> 
                                    <li>Return On Investment (ROI) of over 250%</li> 
                                    <li>Return On Investment (ROI) of over 250%</li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="cell large-1 align-self-bottom">
                        <figure class="img-c4">
                            <img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/img-aug-2019.jpg" alt="" width="130">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="whyform">
                <div class="grid-x grid-margin-x">
                    <div class="cell large-7">
                        <div class="whymbn">
                            <h3>why mbn?</h3>
                            <p>We aren’t just like any marketing agency. We don’t just take your money. We make you money.</p>
                            <p>We’ve worked with numerous restaurants, from local to national and global chains, we have handled it all and generated incredible results.</p>
                            <p>We also don’t believe in contracts. We’re so confident in our ability to drive incredible results that we choose to work on a month-to-month basis. This keeps your risk to a minimum and keeps us on our toes.</p>
                        </div>
                        <div class="experience">
                            <h6>Team Experience</h6>
                            <ul>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-tgif.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-grimaldis.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-subway.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-mcdonald.png" alt=""></li>
                            </ul>
                        </div>
                        <div class="asseen">
                            <h6>As seen in</h6>
                            <ul>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-inc.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-bi.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-forbes.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-fortune.png" alt=""></li>
                                <li><img src="<?php bloginfo('template_url') ?>/restaurant/resources/img/logo-time.png" alt=""></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cell large-5">
                        <div class="form">
                            <h3>Proven ROI and Unbelievable results</h3>
                            <p>Grimaldi’s received 802% Return on Ad Spend. Want results? Need ROI? Contact us.</p>
                            <?= do_shortcode('[gravityform id="1" title="false" description="false" ajax="false"]'); ?>
                            <p class="note">Privacy Policy: We will never sell your email address to any 3rd Party or send you nasty spam. Promise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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

