<?php

/* Template Name: Contact template */

get_header(); ?>

<main id="content">

    <div class="sec-contact">
        <div class="grid-container">
            <h6 class="sc-sub">contact us</h6>

            <div class="grid-x grid-margin-x contact-form">
                <div class="cell large-6 cf-left">
                    <h5 class="cf-do"><em>Let’s 
                        <b class="do">do 
                            <span class="circles">
                                <s class="before"></s>
                                <s class="after"></s>
                            </span>
                        </b>
                        </em>
                    </h5>
                    <h1 class="cf-mbn">
                        <span class="text-primary">m</span><span class="text-dark">ore</span><br>
                        <span class="text-primary">b</span><span class="text-dark">usiness</span><br> 
                        <span class="text-primary">n</span><span class="text-dark">ow.</span>
                    </h1>
                </div>
                <div class="cell large-6 cf-right">
                    <h5 class="cf-talk">Let’s talk</h5>
                    <p>I’d like to speak to MY BIZ NICHE about possibly working together.</p>
                    <?= do_shortcode('[gravityform id="1" title="false" description="false" ajax="false"]'); ?>
                </div>
            </div>
            
            <div class="grid-x grid-margin-x contact-info">
                <div class="cell large-3 info-box">
                    <h6>visit us</h6> 
                    <p>17797 N. Perimeter Drive, Suite D105, Scottsdale, AZ 85255</p>
                </div>
                <div class="cell large-3 large-offset-1 info-box">
                    <h6>email us</h6>
                    <p> info@mybizniche.com</p>
                </div>
                <div class="cell large-3 info-box">
                    <h6>call us</h6>
                    <p>(602) 833-7169</p>
                </div>
                <div class="cell large-2 info-box">
                    <h6>connect with us</h6>
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
                </div>
            </div>
        </div>
    </div>

    <div class="sec-map">
        <div class="google-map">
               <div id="map" style="height: 620px"></div>
               <script>
                    function initMap() {
                    // Create a map object and specify the DOM element for display.
                    var map = new google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: 33.647147,
                            lng: -111.8954317
                        },
                        scrollwheel: false,
                        zoom: 13,
                        mapTypeControl: false,
                        mapTypeControlOptions: {
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.TOP_CENTER
                        },
                        zoomControl: false,
                        zoomControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        scaleControl: false,
                        streetViewControl: false,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_TOP
                        },
                        fullscreenControl: false,
                        styles: [
                            {
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#d3d3d3"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "stylers": [
                                    {
                                        "color": "#808080"
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#b3b3b3"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "weight": 1.8
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#d7d7d7"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#ebebeb"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#a7a7a7"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#efefef"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#696969"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#737373"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#d6d6d6"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {},
                            {
                                "featureType": "poi",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#dadada"
                                    }
                                ]
                            }
                        ]
                    });

                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(33.647750, -111.897255),
                        icon: '<?php echo MBN_ASSETS_URI ?>/img/map-pin.png',
                        map: map
                    });
                    // var marker2 = new google.maps.Marker({
                    //     position: new google.maps.LatLng(33.4545865, -112.0897932),
                    //     icon: '<?php echo MBN_ASSETS_URI ?>/img/map-pin.png',
                    //     map: map
                    // });
                }  
              </script>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGw796lT6PGFF97mZxv5LnemjwcDaJMJQ&callback=initMap"></script>
            </div>
    </div>

</main>

<?php get_footer() ?>