<?php


// Register Custom Post Type
function cutom_post() {
	register_post_type( 'batch-record',
		array(
			'labels' 	=> array(
				'name' => __( 'Custom Posts' ),
				'singular_name' => __('Custom Post')
			),
			'public' 		=> true,
			'has_archive' 	=> false,
			'show_in_rest' 	=> true,
            'menu_position' => 20,
			'supports'		=>	array('title', 'editor', 'page-attributes', 'thumbnail'),
        	'menu_icon' 	=> 'dashicons-editor-paragraph',
		)
	);
	register_taxonomy(  
		'custom-category',
		'custom-post',
		array(
			'hierarchical' => true,			
			'has_archive' => true,
			'label' => 'Categories',  			
			'query_var' => true,
			'show_admin_column' => true,
			'show_in_rest' => true,
            /*'rewrite' => array(
                'slug' => 'custom-posts',
                'with_front' => true  
            )*/
		)
	);
}
//add_action( 'init', 'cutom_post' );