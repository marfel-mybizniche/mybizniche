<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

get_header();
?>

<main id="content">
	<section class="page-content">
        <div class="grid-container">
            <?php
                while ( have_posts() ) : the_post();
                    the_title('<h1>', '</h1>');
                    the_content();
                endwhile; // End of the loop.
            ?>      
        </div>     
	</section>
</main>

<?php

get_footer();
